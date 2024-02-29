import React from 'react';

export default function FeatureCard({ cardName = 'cardName' }) {
  return (
    <div className='flex flex-col gap-2'>
      <div className='w-[328px] h-[138px] bg-grayBg100'></div>
      <div className=' font-medium'>{cardName}</div>
    </div>
  );
}
