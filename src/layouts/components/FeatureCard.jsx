import React from 'react';

export default function FeatureCard({ cardName = 'cardName' }) {
  return (
    <div className='flex flex-col gap-2'>
      <div className='w-[250px] h-[105px] bg-red-400 shadow-xl text-white text-4xl flex justify-center items-center'>{cardName}</div>
      <div className=' font-medium'>{cardName}</div>
    </div>
  );
}
