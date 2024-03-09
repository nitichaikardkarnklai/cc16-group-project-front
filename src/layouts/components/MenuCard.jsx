import React from 'react';

export default function MenuCard({ value, value2 }) {
  return (
    <div className='flex flex-col justify-center items-center mt-1'>
      <div className='w-[105px] h-[105px] flex justify-center items-center rounded-full text-white  bg-red-400'>{value2}</div>

      <div className=' font-medium  pt-3'>{value}</div>
    </div>
  );
}
