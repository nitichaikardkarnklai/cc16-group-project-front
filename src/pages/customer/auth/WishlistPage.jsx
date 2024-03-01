import React from 'react';
import WishListCard from '../../../layouts/components/WishListCard';

export default function WishlistPage() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='text-5xl font-semibold pt-24 pb-12'>MY WISHLIST</div>
      <div className='flex flex-col gap-4'>
        <WishListCard />
        <WishListCard />
        <WishListCard />
        <WishListCard />
        <WishListCard />
        <WishListCard />
      </div>
    </div>
  );
}
