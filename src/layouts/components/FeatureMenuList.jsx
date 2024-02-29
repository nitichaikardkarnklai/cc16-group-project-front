import React from 'react';
import FeatureCard from './FeatureCard';
import AllProductIcon from '../../assets/icon/AllProductIcon';
import { Link } from 'react-router-dom';

export default function FeatureMenuList() {
  return (
    <div className='w-[full] shadow-md flex justify-center p-8 gap-4'>
      <Link to={'/launch-calendar'}>
        <FeatureCard cardName={'Launch Calendar'} />
      </Link>
      <Link to={'/top-selling'}>
        <FeatureCard cardName={'Trending'} />
      </Link>
      <Link to={'/new-arrivals'}>
        <FeatureCard cardName={'New Arrivals'} />
      </Link>
    </div>
  );
}
