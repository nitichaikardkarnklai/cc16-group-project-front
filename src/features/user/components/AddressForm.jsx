import React from 'react';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

export default function AddressForm({
  input,
  error,
  onChange,
  onCheck,
  onSubmit,
}) {
  return (
    <form onSubmit={onSubmit} className='mx-auto max-w-xl sm:mt-10'>
      <div className='grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2'>
        <div className='mt-2.5'>
          <Input
            name='firstName'
            onChange={onChange}
            value={input.firstName}
            placeholder={'*First Name'}
            errorMessage={error.firstName}
          />
        </div>
        <div className='mt-2.5'>
          <Input
            name='lastName'
            onChange={onChange}
            value={input.lastName}
            placeholder={'*Last Name'}
            errorMessage={error.lastName}
          />
        </div>
        <div className='sm:col-span-2'>
          <div className='mt-2.5'>
            <Input
              name='phone'
              onChange={onChange}
              value={input.phone}
              placeholder={'*Phone Number'}
              errorMessage={error.phone}
            />
          </div>
        </div>
        <div className='sm:col-span-2'>
          <div className='mt-2.5'>
            <Input
              name='other'
              onChange={onChange}
              value={input.other}
              placeholder={'*Address'}
              errorMessage={error.other}
            />
          </div>
        </div>
        <div className='sm:col-span-2'>
          <div className=' mt-2.5'>
            <Input
              name='apartmentSuite'
              onChange={onChange}
              value={input.apartmentSuite}
              placeholder={'Apartment, suite, etc.'}
              errorMessage={error.apartmentSuite}
            />
          </div>
        </div>
        <div className='sm:col-span-2'>
          <div className='relative mt-2.5'>
            <Input
              name='cityVillage'
              onChange={onChange}
              value={input.cityVillage}
              placeholder={'*City/ward/town/village'}
              errorMessage={error.cityVillage}
            />
          </div>
        </div>
        <div className='mt-2.5'>
          <Input
            name='province'
            onChange={onChange}
            value={input.province}
            placeholder={'*Province'}
            errorMessage={error.province}
          />
        </div>
        <div className='mt-2.5'>
          <Input
            name='zipCode'
            onChange={onChange}
            value={input.zipCode}
            placeholder={'*Postal Code'}
            errorMessage={error.zipCode}
          />
        </div>
        <div className='flex gap-4'>
          <input
            type='checkbox'
            name='setDefault'
            onChange={onCheck}
            value={input.setDefault}
            className='checkbox'
            checked={input.setDefault ? true : false}
          />
          <div>Set as default Address</div>
        </div>
      </div>
      <div className='mt-10 items-center'>
        <Button btn bg='red' color='white' type='submit' width='full'>
          SAVE
        </Button>
      </div>
    </form>
  );
}
