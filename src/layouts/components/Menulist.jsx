import React, { useState } from 'react';
import MenuCard from './MenuCard';
import AllProductIcon from '../../assets/icon/AllProductIcon';
import { Link } from 'react-router-dom';

export default function Menulist({ link }) {
  const filters = [
    { groupId: 1, groupName: 'Mega100%' },
    { groupId: 2, groupName: 'Mega400%' },
    { groupId: 3, groupName: 'Mega1000%' }
  ];

  return (
    <div className='w-[full] shadow-md flex justify-center p-8 gap-4 bg-white'>
      <Link to={{ pathname: '/mega', state: { filtersFromOtherComponent: filters[0] } }}>
        <MenuCard />
      </Link>
      <Link to={{ pathname: '/mega', state: { filtersFromOtherComponent: filters[1] } }}>
        <MenuCard />
      </Link>
      <Link to={{ pathname: '/mega', state: { filtersFromOtherComponent: filters[2] } }}>
        <MenuCard />
      </Link>
      <div className='flex flex-col justify-center items-center'>
        <div className='w-[120px] h-[120px] flex justify-center items-center'>
          <AllProductIcon />
        </div>
        <div className='font-medium'>All Product</div>
      </div>
    </div>
  );
}
