import React from 'react';
import FileIcon from '../../../assets/icon/FileIcon';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import useUser from '../../../hooks/use-user';
export default function MyAddressPage() {
  const navigate = useNavigate();

  const { getUserAddress, address, deleteUserAddress } = useUser();

  useEffect(() => {
    getUserAddress();
  }, []);

  const handleOnDelete = (e) => {
    console.log(e.target.value);
    deleteUserAddress(+e.target.value);
  };

  return (
    <div className='w-[850px] mx-auto'>
      <div className='text-center text-3xl font-semibold pt-12'>MY ADDRESS</div>
      {address.length != 0 ? (
        address.map((el) => {
          return (
            <div className='flex justify-between items-center py-4 border-b'>
              <div>
                <div className='flex gap-2'>
                  <div>{el.firstName}</div>
                  <div>{el.lastName}</div>
                </div>
                <div>
                  Address: {el.other} {el.apartmentSuite} {el.cityVillage}
                  {el.province} {el.zipCode}
                </div>
              </div>
              <div className='flex gap-4'>
                <div className='btn bg-grayBg300 text-white'>Edit</div>
                <button
                  role='button'
                  value={el.id}
                  onClick={handleOnDelete}
                  className='btn bg-redHero text-white'
                >
                  Delete
                </button>
              </div>
            </div>
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
