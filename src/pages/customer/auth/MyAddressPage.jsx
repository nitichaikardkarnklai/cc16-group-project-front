import React from 'react';
import FileIcon from '../../../assets/icon/FileIcon';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import useUser from '../../../hooks/use-user';
import { useState } from 'react';
import AddressRow from '../../../layouts/components/AddressRow';
import BackIcon from '../../../assets/icon/BackIcon';

export default function MyAddressPage() {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const { address, deleteUserAddress } = useUser();

  const handleOnDelete = (id) => {
    deleteUserAddress(id);
    setToggle((prev) => !prev);
  };

  return (
    <div className='relative w-[850px] mx-auto my-12'>
      <div
        onClick={() => navigate('/my-account-page')}
        className='absolute -left-32 btn bg-transparent border-none shadow-none'
      >
        <BackIcon />
      </div>
      <div className='text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl'>
        MY ADDRESS
      </div>
      {address && address.length != 0 ? (
        address.map((el) => {
          return (
            <AddressRow key={el.id} address={el} onDelete={handleOnDelete} />
          );
        })
      ) : (
        <div className='flex flex-col justify-center items-center py-12'>
          <FileIcon size='60px' />
          <div>You don't have any address</div>
        </div>
      )}
      <div
        onClick={() => navigate('/add-address-page')}
        className='btn w-full bg-black text-white'
      >
        ADD A NEW ADDRESS
      </div>
    </div>
  );
}
