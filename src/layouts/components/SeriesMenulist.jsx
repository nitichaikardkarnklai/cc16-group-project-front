import React from 'react';
import SeriesCard from './SeriesCard';
import { Link } from 'react-router-dom';

export default function SeriesMenulist({ link }) {
  return (
    <div className='flex p-8 w-full shadow-md'>
      <div className='grid gap-4 grid-cols-4 mx-auto'>
        <Link to={link}>
          <SeriesCard />
        </Link>
        <Link to={link}>
          <SeriesCard />
        </Link>
        <Link to={link}>
          <SeriesCard />
        </Link>
        <Link to={link}>
          <SeriesCard />
        </Link>
        <Link to={link}>
          <SeriesCard />
        </Link>
        <Link to={link}>
          <SeriesCard />
        </Link>
      </div>
    </div>
  );
}
