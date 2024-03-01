import React from 'react';
import ProductCard from './ProductCard';

export default function ProductsContainer({ title = 'TITLE' }) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-5xl p-12 font-semibold'>{title}</h1>
      <div className='flex w-[1235px] gap-4 justify-end mb-12'>
        <p className='text-lg font-medium underline'>Sort</p>
        <p className='text-lg font-medium underline'>Filter</p>
      </div>
      <div className='grid grid-cols-4 gap-8 w-[1235px] mx-auto'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
