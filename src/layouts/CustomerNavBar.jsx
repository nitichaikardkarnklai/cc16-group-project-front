import React from 'react';
import ToyMartLogo from '../assets/icon/ToyMartLogo';
import SearchBar from '../components/SearchBar';
import ThaiFlagIcon from '../assets/icon/ThaiFlagIcon';
import HeadPhoneIcon from '../assets/icon/HeadPhoneIcon';
import HeartIcon from '../assets/icon/HeartIcon';
import ShoppingBagIcon from '../assets/icon/ShoppingBagIcon';

export default function CustomerNavBar() {
  return (
    <div className='sticky flex w-full h-[5rem] bg-white justify-between items-center px-8 border-b-2 border-gray-400'>
      <div className='flex gap-6  items-center font-semibold'>
        <ToyMartLogo />
        <div>New & Featured</div>
        <div>SERIES</div>
        <div>MEGA</div>
        <div>TYPES</div>
        <div>ACCESSORIES</div>
      </div>
      <div className='flex gap-4  items-center font-semibold'>
        <div className='w-[226px] h-[42px]'>
          <SearchBar />
        </div>
        <div className='flex gap-2 items-center'>
          <div>
            <ThaiFlagIcon />
          </div>
          <div>TH</div>
        </div>
        <div className='flex items-center gap-4'>
          <div className='flex  justify-center items-center gap-1'>
            <div className='w-[24px] h-[24px] bg-gray-400 rounded-full'></div>
            <div>My Account</div>
          </div>
          <div>
            <HeadPhoneIcon />
          </div>
          <div>
            <HeartIcon />
          </div>
          <div className='w-[77px] h-[34px] rounded-3xl border border-gray-400 flex justify-center items-center'>
            <ShoppingBagIcon />
            <div>1</div>
          </div>
        </div>
      </div>
    </div>
  );
}
