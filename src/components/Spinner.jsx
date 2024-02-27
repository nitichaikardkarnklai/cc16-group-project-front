import React from 'react';

export default function Spinner() {
  return (
    <>
      <div className='fixed inset-0 bg-black opacity-20 z-40'></div>
      <div className='fixed inset-0 z-50'>
        <div className='flex items-center justify-center min-h-full'>
          <span className='loading loading-ring loading-lg text-error'></span>
        </div>
      </div>
    </>
  );
}
