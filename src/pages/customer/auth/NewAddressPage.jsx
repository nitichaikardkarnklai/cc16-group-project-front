import React from 'react';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { useState } from 'react';
import BackIcon from '../../../assets/icon/BackIcon';
import { useNavigate } from 'react-router-dom';
import validateUserAddress from '../../../features/user/validations/validate-address';
import useUser from '../../../hooks/use-user';
import { toast } from 'react-toastify';
import AddressForm from '../../../features/user/components/AddressForm';

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

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const validateError = validateUserAddress(input);
      if (validateError) {
        console.log(validateError);
        return setError(validateError);
      }
      console.log(input);
      await createUserAddress(input);
      toast.success('add address');
      navigate('/my-address-page');
    } catch (err) {
      console.log(err);
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
        <AddressForm
          input={input}
          error={error}
          onChange={handleOnChange}
          onCheck={handleOnCheck}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
