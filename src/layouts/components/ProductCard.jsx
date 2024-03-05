import React from 'react';
import Button from '../../components/Button';

export default function ProductCard({ productObj, location }) {

  return (
    <div className='relative w-[250px] flex flex-col gap-2 mx-auto'>
      <div className='overflow-hidden border-none w-[250px] h-[320px] bg-grayBg100 flex justify-center items-center'>
        <img src={productObj.productCover[0]?.cover}></img>
      </div>
      <div className='flex flex-col w-full items-start'>
        <div className=' font-semibold text-goldToyMart'>{productObj.brand}</div>
        <div className='font-medium text-lg'>{productObj.productName}</div>
        <div className='font-medium text-xl mt-2 text-redHero flex justify-between w-full items-center'>
          {productObj.price}
          {location.pathname === "/admin/admin-product-mgt-page" &&
            <div className='flex gap-2'>
              <Button color="white" bg="darkGray">Edit</Button>
              <Button color="white" bg="red">DELETE</Button>
            </div>
          }
        </div>
      </div>
      <div className='absolute top-2 left-2 flex gap-2'>
        {productObj.isNew ? <div className='text-xs bg-yellowNew px-2 pt-1 font-semibold text-white'>NEW</div> : ""}
        {productObj.isHot ? <div className='text-xs bg-redHero px-2 pt-1 font-semibold text-white'>HOT</div> : ""}
        {productObj.isSoldOut ? <div className='text-xs bg-grayBg200 px-2 pt-1 font-semibold text-white'>SOLD OUT</div> : ""}
      </div>
    </div>
  );
}
