import React from 'react';

export default function MyOrderPage() {
  return (
    <div className='w-[800px] py-10 m-auto items-center'>
      <div className='text-4xl font-bold text-left py-4 '>My Order</div>
      <div>
        <div className='flex py-10 '>
          <input type='checkbox' defaultChecked className='checkbox ' />
          <div className='flex px-2'>
            <img
              src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80'
              alt='Shoes'
              className='rounded-xl h-40 w-40'
            />
          </div>
          <div className='flex flex-col justify-between'>
            <div>
              <h4 className='text-mx font-bold'> Select All</h4>
              <p className='text-mx '> Select All</p>
              <h4 className='text-mx font-bold text-red-600'> ฿380.00</h4>
            </div>
            <div className='flex justify-end gap-44 '>
              <form className='max-w-xs mx-auto'>
                <div className='relative flex items-center max-w-[8rem]'>
                  <button
                    type='button'
                    id='decrement-button'
                    data-input-counter-decrement='quantity-input'
                    className='bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  >
                    <svg
                      className='w-3 h-3 text-gray-900 dark:text-white'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 18 2'
                    >
                      <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M1 1h16'
                      />
                    </svg>
                  </button>
                  <input
                    type='text'
                    id='quantity-input'
                    data-input-counter
                    aria-describedby='helper-text-explanation'
                    className='bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='999'
                    required
                  />
                  <button
                    type='button'
                    id='increment-button'
                    data-input-counter-increment='quantity-input'
                    className='bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                  >
                    <svg
                      className='w-3 h-3 text-gray-900 dark:text-white'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 18 18'
                    >
                      <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M9 1v16M1 9h16'
                      />
                    </svg>
                  </button>
                </div>
              </form>
              <button className='underline'>REMOVE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
