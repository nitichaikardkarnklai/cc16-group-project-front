import React from 'react';

export default function AddressRow({ address, onEdit, onDelete }) {
  return (
    <div
      key={address.id}
      className='flex justify-between items-center py-4 border-b'
    >
      <div>
        <div className='flex gap-2'>
          <div>{address.firstName}</div>
          <div>{address.lastName}</div>
        </div>
        <div>
          Address: {address.other} {address.apartmentSuite}{' '}
          {address.cityVillage}
          {address.province} {address.zipCode}
        </div>
      </div>
      <div className='flex gap-4'>
        <button
          onClick={(e) => onEdit(address.id)}
          className='btn bg-grayBg300 text-white'
        >
          Edit
        </button>
        <button
          onClick={(e) => onDelete(address.id)}
          className='btn bg-redHero text-white'
        >
          Delete
        </button>
      </div>
    </div>
  );
}
