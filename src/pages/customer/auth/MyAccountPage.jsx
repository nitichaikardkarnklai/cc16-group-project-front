import React from 'react';
import useAuth from '../../../hooks/use-auth';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function MyAccountPage() {
  const { authUser, logout } = useAuth();

  useEffect(() => {
    console.log(authUser);
  }, []);

  return (
    <div>
      <div className=' m-auto max-w-2xl text-center  px-8 py-20  '>
        <div>
          <div className='avatar'>
            <div className='w-24 rounded-full'>
              <img src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
            </div>
          </div>
        </div>
        <div>
          <h2 className=' font-bold tracking-tight text-gray-900 sm:text-2xl'>
            "YOUR NAME" ACCOUNT
          </h2>
        </div>
        <div className='flex justify-center gap-6 underline '>
          <div>ACCOUNT SETTINGS</div>
          <div>EDIT PROFILE</div>
        </div>
        <div className='flex  justify-between py-6 px-6 '>
          <Link to='/my-order-page'>
            <div className='btn text-lg bg-gray-200 w-[180px] h-[88px] rounded-2xl'>
              My order
            </div>
          </Link>
          <Link to='/my-reward-page'>
            <div className='btn text-lg bg-gray-200 w-[180px] h-[88px] rounded-2xl'>
              My reward
            </div>
          </Link>
        </div>
        <div className='flex  justify-between py-6 px-6 '>
          <Link to='/my-address-page'>
            <div className='btn text-lg bg-gray-200 w-[180px] h-[88px] rounded-2xl'>
              Address book
            </div>
          </Link>
          <div
            onClick={() => logout()}
            className='btn text-lg bg-gray-200 w-[180px] h-[88px] rounded-2xl'
          >
            Sign out
          </div>
        </div>
      </div>
    </div>
  );
}
