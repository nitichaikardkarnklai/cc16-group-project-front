import React from 'react';
import MenuCard from './MenuCard';
import AllProductIcon from '../../assets/icon/AllProductIcon';
import { Link } from 'react-router-dom';

export default function menulist({ link }) {
  return (
    <div className='w-[full] shadow-md flex justify-center p-8 gap-4 bg-white'>
      <Link to={link}>
        <MenuCard />
      </Link>
      <Link to={link}>
        <MenuCard />
      </Link>
      <Link to={link}>
        <MenuCard />
      </Link>
      <div className=' flex flex-col justify-center items-center'>
        <div className='w-[120px] h-[120px] flex justify-center items-center'>
          <AllProductIcon />
        </div>
        <div className='font-medium'>All Product</div>
      </div>
    </div>
  );
}
