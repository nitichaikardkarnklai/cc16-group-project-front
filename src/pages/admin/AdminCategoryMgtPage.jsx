import React from 'react';
import Button from '../../components/Button';
import { useState } from 'react';

export default function AdminCategoryMgtPage() {

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div className='flex flex-col'>
      <div className='flex flex-col gap-4'>
        <div className='font-bold'>Product Series</div>
        <div className='flex w-full justify-between bg-grayBg100 items-center px-4 py-2'>
          <div className='flex'>
            <div className='w-16'>Id</div>
            <div className='w-48'>Series Name</div>
          </div>
          <div className=''><Button color="white" bg="red">ADD</Button></div>
        </div>
        <div className='font-bold'>Product Categories</div>
        <div className='flex flex-col'>
          <div className='flex w-full justify-between bg-grayBg100 items-center px-4 py-2'>
            <div className='flex'>
              <div className='w-16'>Id</div>
              <div className='w-48'>Group Name</div>
              <div className='w-48'>Category Name</div>
            </div>
            <div className=''><Button color="white" bg="red">ADD</Button></div>
          </div>
        </div>
      </div>
    </div>
  );
}