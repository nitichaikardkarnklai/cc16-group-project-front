import React from 'react';
import WishListCard from '../../../layouts/components/WishListCard';
import {
  removeWishlist,
  fetchWishlist,
} from '../../../store/slices/wishlistSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Spinner from '../../../components/Spinner';

export default function WishlistPage() {
  const { wishlistItems } = useSelector((store) => store.wishlists);
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        dispatch(fetchWishlist());
        // console.log(wishlistItems);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [toggle]);

  const removeFromWishlist = async (id) => {
    console.log('remove from wishlist');
    await dispatch(removeWishlist(id));
    await setToggle(!toggle);
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='text-5xl font-semibold pt-24 pb-12'>MY WISHLIST</div>
      <div className='flex flex-col gap-4'>
        {wishlistItems?.map((el, index) => {
          return (
            <WishListCard key={index} data={el} onRemove={removeFromWishlist} />
          );
        })}
      </div>
    </div>
  );
  // <div className=" w-2/3 py-10 mx-auto items-center">
  //   <div className="flex flex-col  ">
  //     <h1 className="text-4xl font-bold text-center py-4 ">My Wishlist</h1>
  //     <div className="divider"></div>
  //     <div className="flex py-2 ">
  //       <div className="flex px-2">
  //         <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" alt="Shoes" className="rounded-xl h-40 w-40" />
  //       </div>
  //       <div className="flex flex-col justify-between">
  //         <div>
  //           <h4 className="text-mx font-bold"> Select All</h4>
  //           <p className="text-mx "> Select All</p>
  //           <h4 className="text-mx font-bold text-red-600"> ฿380.00</h4>
  //         </div>
  //         <div className="flex justify-end">
  //           <button></button>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="flex justify-end " >
  //       <button >
  //         REMOVE
  //       </button>

  //     </div>
  //     <div className="divider"></div>
  //   </div>
  // </div >
}
