import React from 'react';
import ProductCard from './ProductCard';

export default function InStockContainer() {
  return (
    <div className='w-[1235px] mx-auto '>
      <div className=' text-3xl font-bold px-4'>In Stock 23rd | Feb</div>
      <div className='grid grid-cols-4 gap-8  mx-auto mt-6'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
