import React, { useState } from 'react';
import MenuCard from './MenuCard';
import AllProductIcon from '../../assets/icon/AllProductIcon';
import { Link } from 'react-router-dom';

export default function Menulist({ link, subPages }) {
  const [selectedFilter, setSelectedFilter] = useState(null);

  const onFilterChange = (filterValue) => {
    setSelectedFilter(filterValue);
  };


  return (
    <div className='w-[full] shadow-md flex justify-center p-8 gap-4 bg-white'>

      {subPages.map((page, index) => (
        <Link key={index} to={`${link}/${index + 1}`}>
          <button onClick={() => onFilterChange(index + 1)}>
            <MenuCard value={`${page}`} selected={selectedFilter === index + 1} />
          </button>
        </Link>
      ))}

      <div className=' flex flex-col justify-center items-center'>
        <Link to={`${link}`}>
          <div className='w-[120px] h-[120px] flex justify-center items-center'>
            <AllProductIcon />
          </div>
        </Link>
        <div className='font-medium'>All Product</div>
      </div>
    </div>
  );
}
