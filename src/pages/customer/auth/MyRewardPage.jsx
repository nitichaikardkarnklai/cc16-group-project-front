import React from 'react';
import Input from '../../../components/Input';
import { useNavigate } from 'react-router-dom';
import BackIcon from '../../../assets/icon/BackIcon';

export default function MyRewardPage() {
  const navigate = useNavigate();
  return (
    <div className='relative w-full min-h-full'>
      <div
        onClick={() => navigate('/my-account-page')}
        className='absolute left-24 top-12 btn bg-transparent border-none shadow-none'
      >
        <BackIcon />
      </div>
      <div className='w-[800px] py-10 m-auto items-center'>
        <h1 className='text-4xl font-bold text-left py-8 '> My Reward</h1>
        <div className='flex flex-col w-[800px] h-[90px] py-4 bg-goldBg100  text-goldToyMart '>
          <h1 className='text-4xl font-bold text-center py-4 '>50 Points</h1>
        </div>
      </div>
    </div>
  );
}
