import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import MinusIcon from '../../assets/icon/MinusIcon';
import PlusIcon from '../../assets/icon/PlusIcon';
import * as cartApi from '../../api/cart';

const initialCartItem = {
  productId: null,
  quantity: null,
  price: null,
};

export default function CartCard({ data, onRemove, onUpdate }) {
  const [cartItem, setCartItem] = useState(initialCartItem);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(data.quantity);
    setCartItem({
      productId: data.productId,
      quantity: data.quantity,
      price: data.price,
    });
  }, [data]);

  //counter function increment and update database
  const increment = () => {
    if (count < 99) {
      setCount((prevCount) => {
        const newCount = prevCount + 1;
        setCartItem((prevItem) => ({ ...prevItem, quantity: newCount }));
        onUpdate({ ...cartItem, quantity: newCount });
        return newCount;
      });
    } else return count;
  };

  //counter function decrement and update database
  const decrement = () => {
    if (count > 1) {
      setCount((prevCount) => {
        const newCount = prevCount - 1;
        setCartItem((prevItem) => ({ ...prevItem, quantity: newCount }));
        onUpdate({ ...cartItem, quantity: newCount });
        return newCount;
      });
    } else return onRemove(data.id);
  };

  console.log('cartItem', cartItem);
  return (
    <div className='flex py-2 border-b'>
      <input type='checkbox' defaultChecked className='checkbox ' />
      <div className='flex px-6 flex-shrink-0'>
        <img
          src={data?.products.productCover?.[0]?.cover}
          alt='Shoes'
          className='object-cover rounded-xl h-40 w-40 '
        />
      </div>
      <div className='flex flex-col justify-between w-full'>
        <div>
          <h4 className='text-2xl font-bold'>{data?.products?.productName}</h4>
          <p className='text-mx '> Brand</p>
          <h4 className='text-lg font-bold text-red-600'>{data?.price} THB</h4>
        </div>
        <div className='flex justify-between items-center w-full'>
          <div className='relative flex items-center justify-center w-[8rem]'>
            <button
              onClick={decrement}
              className='bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
            >
              <MinusIcon />
            </button>
            <div className='bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
              {count}
            </div>
            <button
              onClick={increment}
              className='bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
            >
              <PlusIcon />
            </button>
          </div>
          <div
            onClick={() => onRemove(data.id)}
            className='btn bg-transparent border-none shadow-none font-semibold underline hover:bg-transparent'
          >
            REMOVE
          </div>
        </div>
      </div>
    </div>
  );
}
