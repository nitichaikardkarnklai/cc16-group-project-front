import React from 'react';

export default function ProductCard() {
  return (
    <div className='relative w-[200px] flex flex-col  mx-auto'>
      <div className='w-[200px] h-[200px] bg-grayBg100'></div>
      <div className='flex flex-col w-full items-start'>
        <div className=' font-semibold text-goldToyMart'>ToyMart</div>
        <div className='font-medium text-lg'>ProductName</div>
        <div className='font-semibold text-2xl text-redHero'>350.-</div>
      </div>
      <div className='flex gap-2'>
        <div className='text-sm bg-yellowNew px-2 pt-1 font-bold text-white'>
          NEW
        </div>
        <div className='text-sm bg-redHero px-2 pt-1 font-bold text-white'>
          HOT
        </div>
        <div className='text-sm bg-yellowNew px-2 pt-1 font-bold text-white'>
          BEST-SELLER
        </div>
      </div>
    </div>
  );
}
