import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import CartCard from '../../../layouts/components/CartCard';
import CartPayment from './CartPayment';
import { fetchCart } from '../../../store/slices/cartSlice';
import * as cartApi from '../../../api/cart';
import { useState } from 'react';
import Spinner from '../../../components/Spinner';

const initialTransaction = {
  totalAmount: 0,
  discount: 0,
  reward: 0,
  cartItemId: [],
};

export default function CartPage() {
  const [onfetch, setOnfetch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [totalSum, setTotalSum] = useState(0);
  const [transaction, setTransaction] = useState(initialTransaction);
  const { itemsInCart } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        dispatch(fetchCart());
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [onfetch]);

  useEffect(() => {
    setTransaction((prev) => ({ ...prev, totalAmount: sumPrice() }));
  }, [itemsInCart]);

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

  //sum total price
  const sumPrice = () => {
    return itemsInCart.reduce((acc, crr) => acc + crr.quantity * +crr.price, 0);
  };

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className='container mx-auto w-9/12 py-10 min-h-screen'>
      <h1 className='text-4xl font-bold '> My Cart </h1>
      <div className='flex flex-col w-full lg:flex-row py-10'>
        <div className='flex-grow card'>
          <div className='flex py-2  '>
            <input type='checkbox' defaultChecked className='checkbox' />
            <h4 className='text-mx font-bold px-2'> Select All</h4>
          </div>
          {itemsInCart.length != 0 ? (
            itemsInCart?.map((el, index) => {
              return (
                <CartCard
                  key={index}
                  data={el}
                  onUpdate={handleUpdateCart}
                  onRemove={handleRemove}
                />
              );
            })
          ) : (
            <div>Your cart is empty</div>
          )}
        </div>
        <CartPayment data={transaction} />
      </div>
    </div>
  );
}
