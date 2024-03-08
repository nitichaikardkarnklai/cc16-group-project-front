import React from 'react';

export default function MenuCard({ value }) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='w-[120px] h-[120px] bg-grayBg100'></div>
      <div className=' font-medium'>{value}</div>
    </div>
  );
}
