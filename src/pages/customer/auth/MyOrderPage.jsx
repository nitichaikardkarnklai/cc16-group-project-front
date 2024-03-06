import React from 'react';
import BackIcon from '../../../assets/icon/BackIcon';
import { useNavigate } from 'react-router-dom';

export default function MyOrderPage() {
  const navigate = useNavigate();
  return (
    <div className='relative w-full min-h-screen'>
      <div
        onClick={() => navigate('/my-account-page')}
        className='absolute left-24 top-12 btn bg-transparent border-none shadow-none'
      >
        <BackIcon />
      </div>
      <div className='w-[800px] py-10 m-auto items-center'>
        <div className='text-4xl font-bold text-left py-4 '>My Order</div>
        <div>
          <div className='flex py-10 gap-2 '>
            <img
              src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80'
              alt='Shoes'
              className='rounded-xl h-40 w-40'
            />
            <div className='flex w-full justify-between'>
              <div>
                <h4 className='text-mx font-bold'>Product Name</h4>
                <p className='text-mx '> Select All</p>
                <h4 className='text-mx font-bold text-red-600'> ฿380.00</h4>
              </div>
              <div className='flex justify-end gap-44 '>
                <form className='max-w-xs mx-auto'>
                  <div className='relative flex items-center max-w-[8rem]'></div>
                </form>
              </div>
              <button className='underline'>REMOVE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
