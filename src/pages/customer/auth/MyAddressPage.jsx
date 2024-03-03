import React from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import FileIcon from '../../../assets/icon/FileIcon';
import { useNavigate } from 'react-router-dom';
export default function MyAddressPage() {
  const navigate = useNavigate();

  return (
    <div className='w-[850px] mx-auto'>
      <div className='text-center text-3xl font-semibold pt-12'>MY ADDRESS</div>
      <div className='flex flex-col justify-center items-center py-12'>
        <FileIcon size='60px' />
        <div>You don't have any address</div>
      </div>
      <div
        onClick={() => navigate('/add-address-page')}
        className='btn w-full bg-black text-white'
      >
        ADD A NEW ADDRESS
      </div>
    </div>
  );
}
