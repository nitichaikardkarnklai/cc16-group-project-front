import React from 'react';
import Button from '../../../components/Button';

export default function CartPayment({ data }) {
  console.log('payment', data);
  return (
    <div className='flex-grow card place-items-center'>
      <div className='flex flex-col bg-base-200 w-3/4 p-10'>
        <div className='flex justify-between font-semibold'>
          <h3> Subtotal</h3>
          <h3> {data.totalAmount} THB</h3>
        </div>

        <div className='divider divider-vertical'></div>
        <div className='flex flex-col justify-between'>
          <div className='flex w-full justify-between'>
            <h4 className='text-mx font-bold'>Current point</h4>
            <h4 className='text-mx font-bold'> 50</h4>
          </div>
          <div className='flex w-full justify-between'>
            <h4 className='text-mx font-bold'> Discount with points</h4>
            <input type='checkbox' className='toggle' onChange={() => {}} />
          </div>
          <h5 className='text-xs font-bold'> 10 points : 1 THB </h5>
        </div>
        <br />
        <h2 className='text-2xl font-bold'>Total</h2>
        <br />
        <Button bg='red' type='submit'>
          <h3 className='text-xl font-bold text-white'>Checkout</h3>
        </Button>
      </div>
    </div>
  );
}
