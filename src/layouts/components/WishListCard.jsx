import React from 'react';

export default function WishListCard() {
  return (
    <div className='w-[1035px] flex items-center gap-6 p-2 border-b'>
      <div className='w-[180px] h-[180px] bg-grayBg100'></div>
      <div className='flex flex-col w-[1035px] gap-4'>
        <div>
          <div className='text-2xl font-semibold'>Product Name</div>
          <div className='text-grayBg300 text-lg'>SingleBox</div>
        </div>
        <div className='flex w-full justify-between'>
          <div className='text-redHero text-xl font-semibold'>350.-</div>
          <div className='text-lg font-medium underline'>REMOVE</div>
        </div>
      </div>
    </div>
  );
}
