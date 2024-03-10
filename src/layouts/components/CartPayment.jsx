import React from 'react';
import Button from '../../components/Button';
import { useSelector } from 'react-redux';
import { button } from '@material-tailwind/react';

export default function CartPayment({ data, onCheck, onSubmit }) {
  const { itemsInCart } = useSelector((store) => store.cart);
  console.log('payment', data);
  return (
    <div className='flex-grow card place-items-center'>
      <div className='flex flex-col bg-base-200 w-3/4 p-10'>
        <div className='flex justify-between font-semibold'>
          <h3> Subtotal</h3>
          <h3> {data.subTotal.toLocaleString()} THB</h3>
        </div>

        <div className='divider divider-vertical'></div>
        <div className='flex flex-col justify-between'>
          <div className='flex w-full justify-between'>
            <h4 className='text-mx font-bold'>Current point</h4>
            <h4 className='text-mx font-bold'> {data.reward}</h4>
          </div>
          {data.reward > 100 ? (
            <div className='flex w-full justify-between'>
              <h4 className='text-mx font-bold'> Discount with points</h4>
              <input type='checkbox' className='toggle' onChange={onCheck} />
            </div>
          ) : (
            <div className='flex w-full justify-between'>
              <h4 className='text-mx font-bold'> Discount with points</h4>
              <input type='checkbox' className='toggle' disabled />
            </div>
          )}
          <h5 className='text-xs font-bold'>minimum 100 points : 1 THB </h5>
        </div>
        <br />
        <h2 className='text-2xl font-bold'>
          Total {data.totalAmount.toLocaleString()} THB
        </h2>
        <br />
        {itemsInCart.length != 0 ? (
          <Button onClick={onSubmit} bg='red' type='submit'>
            <h3 className='text-xl font-bold text-white'>Checkout</h3>
          </Button>
        ) : (
          <Button bg='gray'>
            <h3 className='text-xl font-bold text-grayBg300'>Checkout</h3>
          </Button>
        )}
      </div>
    </div>
  );
}
