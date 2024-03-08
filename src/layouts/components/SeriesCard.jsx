import React from 'react';

export default function SeriesCard({ value }) {
  return (
    <div className='w-[220px] h-[70px] bg-grayBg100 flex justify-start items-center gap-4'>
      <div className='w-[60px] h-[60px] bg-grayBg300'></div>
      <div className=' font-medium'> {value}</div>
    </div>
  );
}
