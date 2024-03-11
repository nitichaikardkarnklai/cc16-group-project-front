import React from 'react';

export default function SeriesCard({ value, value2 }) {
  return (
    <div className='w-[220px] h-[70px] bg-grayBg100 rounded-l-full flex justify-start items-center gap-4'>
      <div className='w-[60px] h-[60px] bg-red-400 text-white rounded-full flex justify-center items-center'>SERIES</div>
      <div className=' font-medium'> {value}</div>
    </div>
  );
}
