import React, { useState } from 'react';
import SeriesCard from './SeriesCard';
import { Link } from 'react-router-dom';

export default function SeriesMenulist({ link, subPages }) {

  const [selectedFilter, setSelectedFilter] = useState(null);

  const onFilterChange = (filterValue) => {
    setSelectedFilter(filterValue);
  };

  return (
    <div className='flex p-8 w-full shadow-md'>
      <div className='grid gap-4 grid-cols-4 mx-auto'>
        {subPages.map((page, index) => (
          <Link key={index} to={`${link}/${index + 1}`}>
            <button onClick={() => onFilterChange(index + 1)}>
              <SeriesCard value={page.name} selected={selectedFilter === index + 1} />
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
