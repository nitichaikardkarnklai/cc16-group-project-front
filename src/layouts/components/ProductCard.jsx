import React from 'react';

export default function ProductCard() {
  return (
    <div className='relative w-[250px] flex flex-col gap-2 mx-auto'>
      <div className='w-[250px] h-[320px] bg-grayBg100'></div>
      <div className='flex flex-col w-full items-start'>
        <div className=' font-semibold text-goldToyMart'>ToyMart</div>
        <div className='font-medium text-lg'>ProductName</div>
        <div className='font-medium text-xl mt-2 text-redHero'>350.-</div>
      </div>
      <div className='absolute top-2 left-2 flex gap-2'>
        <div className='text-xs bg-yellowNew px-2 pt-1 font-semibold text-white'>
          NEW
        </div>
        <div className='text-xs bg-redHero px-2 pt-1 font-semibold text-white'>
          HOT
        </div>
        <div className='text-xs bg-grayBg200 px-2 pt-1 font-semibold text-white'>
          SOLD OUT
        </div>
      </div>
    </div>
  );
}
