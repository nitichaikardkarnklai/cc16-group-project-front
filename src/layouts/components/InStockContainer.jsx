import React from 'react';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';

export default function InStockContainer() {
  const { products } = useSelector(store => store.product) || {};
  return (
    <div className='w-[1235px] mx-auto '>
      <div className=' text-3xl font-bold px-4'>In Stock 23rd | Feb</div>
      <div className='grid grid-cols-4 gap-8  mx-auto mt-6'>
        {products?.map((el, index) => <ProductCard key={el.id} productObj={el} />)}
      </div>
    </div>
  );
}
