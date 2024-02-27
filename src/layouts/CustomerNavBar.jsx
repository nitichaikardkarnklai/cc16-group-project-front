import React from 'react';
import ToyMartLogo from '../assets/icon/ToyMartLogo';
import SearchBar from '../components/SearchBar';
import ThaiFlagIcon from '../assets/icon/ThaiFlagIcon';

export default function CustomerNavBar() {
  return (
    <div className='sticky flex w-full h-[3rem] bg-red-500 items-center'>
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
        <div className='flex items-center'>
          <div className='w-[24px] h-[24px] bg-gray-400 rounded-full'></div>
          <div>My Account</div>
        </div>
      </div>
    </div>
  );
}
