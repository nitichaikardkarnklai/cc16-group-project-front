import React from 'react';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { useState } from 'react';
import BackIcon from '../../../assets/icon/BackIcon';
import { useNavigate } from 'react-router-dom';
import validateUserAddress from '../../../features/user/validations/validate-address';
import useUser from '../../../hooks/use-user';
import { toast } from 'react-toastify';

const initial = {
  firstName: '',
  lastName: '',
  phone: '',
  cityVillage: '',
  apartmentSuite: '',
  province: '',
  zipCode: '',
  other: '',
  setDefault: false,
};

export default function NewAddressPage() {
  const [input, setInput] = useState({ ...initial });
  const [error, setError] = useState({});

  const { createUserAddress } = useUser();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      const validateError = validateUserAddress(input);
      if (validateError) {
        console.log(validateError);
        return setError(validateError);
      }
      console.log(input);
      createUserAddress(input);
      toast.success('add address');
    } catch (err) {
      console.log(err);
    } finally {
      navigate('/my-address-page');
    }
  };

  const handleOnChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: '' });
  };

  const handleOnCheck = (e) => {
    setInput({ ...input, [e.target.name]: e.target.checked });
  };

  return (
    <div>
      <div className='relative px-8 py-24'>
        <div
          onClick={() => navigate('/my-address-page')}
          className='absolute left-24 top-12 btn bg-transparent border-none shadow-none'
        >
          <BackIcon />
        </div>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            ADD ADDRESS
          </h2>
        </div>
        <form
          onSubmit={handleSubmit}
          className='mx-auto mt-16 max-w-xl sm:mt-10'
        >
          <div className='grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2'>
            <div className='mt-2.5'>
              <Input
                name='firstName'
                onChange={handleOnChange}
                value={input.firstName}
                placeholder={'*First Name'}
                errorMessage={error.firstName}
              />
            </div>
            <div className='mt-2.5'>
              <Input
                name='lastName'
                onChange={handleOnChange}
                value={input.lastName}
                placeholder={'*Last Name'}
                errorMessage={error.lastName}
              />
            </div>
            <div className='sm:col-span-2'>
              <div className='mt-2.5'>
                <Input
                  name='phone'
                  onChange={handleOnChange}
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
                  onChange={handleOnChange}
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
                  onChange={handleOnChange}
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
                  onChange={handleOnChange}
                  value={input.cityVillage}
                  placeholder={'*City/ward/town/village'}
                  errorMessage={error.cityVillage}
                />
              </div>
            </div>
            <div className='mt-2.5'>
              <Input
                name='province'
                onChange={handleOnChange}
                value={input.province}
                placeholder={'*Province'}
                errorMessage={error.province}
              />
            </div>
            <div className='mt-2.5'>
              <Input
                name='zipCode'
                onChange={handleOnChange}
                value={input.zipCode}
                placeholder={'*Postal Code'}
                errorMessage={error.zipCode}
              />
            </div>
            <div className='flex gap-4'>
              <input
                type='checkbox'
                name='setDefault'
                onChange={handleOnCheck}
                value={input.setDefault}
                className='checkbox'
              />
              <div>Set as default Address</div>
            </div>
          </div>
          <div className='mt-10 items-center'>
            <Button btn bg='red' color='white' type='submit' className='w-full'>
              SAVE
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
