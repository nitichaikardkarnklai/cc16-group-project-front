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
        <Link key={index} to={`${link}/${page.id}`}>
          <button onClick={() => onFilterChange(page.id)}>
            <MenuCard value={`${page.name}`} selected={selectedFilter === page.id} />
          </button>
        </Link>
      ))}

      <div className=' flex flex-col justify-center items-center'>
        <Link to={`${link}`}>
          <div className='w-[120px] h-[120px] flex justify-center items-center'>
            <AllProductIcon />
          </div>
        </Link>
        <div className='font-medium'>All {`${link}`.toUpperCase().slice(1)}</div>
      </div>
    </div>
  );
}
