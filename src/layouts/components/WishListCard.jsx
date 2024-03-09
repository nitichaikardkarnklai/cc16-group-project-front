import React from 'react';

export default function WishListCard({ data, onRemove }) {
  console.log('data', data);

  return (
    <div className='w-[1035px] flex items-center gap-6 p-2 border-b'>
      <div className='w-[180px] h-[180px] flex-shrink-0 bg-grayBg100 bg-cover overflow-hidden'>
        <img src={data.products.productCover?.[0].cover} alt='' />
      </div>
      <div className='flex flex-col w-full gap-4'>
        <div>
          <div className='text-2xl font-semibold'>
            {data.products.productName}
          </div>
          <div className='text-grayBg300 text-lg'>{data.products.brand}</div>
        </div>
        <div className='flex justify-between'>
          <div className='text-redHero text-xl font-semibold'>
            {data.products.price} THB
          </div>
          <div
            onClick={(c) => onRemove(+data.id)}
            className=' btn bg-transparent border-none shadow-none text-lg font-medium underline'
          >
            REMOVE
          </div>
        </div>
      </div>
    </div>
  );
}
