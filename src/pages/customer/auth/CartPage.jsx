import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import CartCard from '../../../layouts/components/CartCard';
import CartPayment from '../../../layouts/components/CartPayment';
import { fetchCart, fetchReward } from '../../../store/slices/cartSlice';
import * as cartApi from '../../../api/cart';
import * as transactionApi from '../../../api/transaction';
import { useState } from 'react';
import Spinner from '../../../components/Spinner';
import Modal from '../../../components/Modal';
import Button from '../../../components/Button';

const initialTransaction = {
  subTotal: 0,
  totalAmount: 0,
  discount: 0,
  reward: 0,
  cartItemId: [],
};

const destinationTransaction = {
  totalAmount: 0,
  discount: 0,
  reward: 0,
  cartItemId: [],
};

export default function CartPage() {
  const [onfetch, setOnfetch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [checkCart, setCheckCart] = useState([]);
  const [transaction, setTransaction] = useState(initialTransaction);
  const [finalTransaction, setFinalTransaction] = useState(
    destinationTransaction
  );
  const { itemsInCart, reward } = useSelector((store) => store.cart);
  const [discount, setDiscount] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        dispatch(fetchCart());
        dispatch(fetchReward());
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [onfetch]);

  useEffect(() => {
    setTransaction((prev) => ({
      ...prev,
      subTotal: subTotal(),
      totalAmount: sumPrice(),
      discount: sumDiscount(),
      cartItemId: putItemIdIntoCart(),
      reward: reward,
    }));
  }, [itemsInCart, discount]);

  //remove item from cart
  const handleRemove = async (id) => {
    await cartApi.removeFromCart(id);
    setOnfetch((c) => !c);
  };

  //update item amount
  const handleUpdateCart = async (item) => {
    await cartApi.upsertIntoCart(item);
    setOnfetch((c) => !c);
  };

  const putItemIdIntoCart = () => {
    return itemsInCart.map((el) => {
      return el.id;
    });
  };

  const subTotal = () => {
    return itemsInCart.reduce((acc, crr) => acc + crr.quantity * +crr.price, 0);
  };

  const sumDiscount = () => {
    return reward / 100;
  };

  //sum total price
  const sumPrice = () => {
    if (!discount) {
      return itemsInCart.reduce(
        (acc, crr) => acc + crr.quantity * +crr.price,
        0
      );
    } else {
      const total = itemsInCart.reduce(
        (acc, crr) => acc + crr.quantity * +crr.price,
        0
      );

      return total - sumDiscount();
    }
  };

  //check to add items function
  const addCheck = (id, count, price) => {
    setCheckCart((prev) => [...prev, { id: id, count: count, price: price }]);
  };

  //check to remove items function
  const removeCheck = (id) => {
    const toBeRemove = checkCart.find((item) => item.id === id);
    if (toBeRemove) {
      checkCart.splice(checkCart.indexOf(toBeRemove), 1);
      setCheckCart([...checkCart]);
    }
  };

  const toggleDiscount = () => {
    setDiscount((c) => !c);
  };

  const onSubmitted = () => {
    console.log('submitted');
    if (!discount) {
      setFinalTransaction(destinationTransaction);
      setFinalTransaction((prev) => ({
        ...prev,
        totalAmount: transaction.subTotal,
        cartItemId: transaction.cartItemId,
      }));
      document.getElementById('check-out-modal').showModal();
    } else {
      setFinalTransaction(destinationTransaction);
      setFinalTransaction((prev) => ({
        ...prev,
        totalAmount: transaction.totalAmount,
        discount: transaction.discount,
        reward: transaction.reward,
        cartItemId: transaction.cartItemId,
      }));
      document.getElementById('check-out-modal').showModal();
    }
  };

  const onCheckout = async () => {
    const response = await transactionApi.createTransaction(finalTransaction);
    window.location.href = response.data.url;
  };

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className='container mx-auto w-9/12 py-10 min-h-screen'>
      <h1 className='text-4xl font-bold '> My Cart </h1>
      <div className='flex flex-col w-full lg:flex-row py-10 gap-8'>
        <div className='flex-grow card'>
          {/* <div className='flex py-2  '>
            <input type='checkbox' defaultChecked className='checkbox' />
            <h4 className='text-mx font-bold px-2'> Select All</h4>
          </div> */}
          <div className=''>
            {itemsInCart.length != 0 ? (
              itemsInCart?.map((el, index) => {
                console.log(el.quantity);
                return (
                  <CartCard
                    key={index}
                    data={el}
                    onUpdate={handleUpdateCart}
                    onRemove={handleRemove}
                    addCheck={addCheck}
                    removeCheck={removeCheck}
                  />
                );
              })
            ) : (
              <div>Your cart is empty</div>
            )}
            {/* {itemsInCart?.map((el, index) => {
              return (
                <CartCard
                  key={index}
                  data={el}
                  onUpdate={handleUpdateCart}
                  onRemove={handleRemove}
                />
              );
            })} */}
          </div>
        </div>
        <CartPayment
          data={transaction}
          onCheck={toggleDiscount}
          onSubmit={onSubmitted}
        />
      </div>
      <Modal id={'check-out-modal'}>
        <div className='flex flex-col gap-4'>
          <p>Do you want to checkout?</p>
          <Button onClick={onCheckout} bg={'red'} color={'white'}>
            Yes, Checkout
          </Button>
        </div>
      </Modal>
    </div>
  );
}
