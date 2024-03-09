import React from 'react';
import useUser from '../../../hooks/use-user';
import BackIcon from '../../../assets/icon/BackIcon';
import AddressForm from '../../../features/user/components/AddressForm';
import validateUserAddress from '../../../features/user/validations/validate-address';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
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

export default function EditAddressPage() {
  const [input, setInput] = useState({ ...initial });
  const [error, setError] = useState({});

  const { editAddress, editUserAddress } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    console.log('editAddress', editAddress);
    setInput({
      ...input,
      firstName: editAddress.firstName,
      lastName: editAddress.lastName,
      phone: editAddress.phone,
      other: editAddress.other,
      apartmentSuite: editAddress.apartmentSuite,
      cityVillage: editAddress.cityVillage,
      province: editAddress.province,
      zipCode: editAddress.zipCode,
      setDefault: editAddress.setDefault,
    });
  }, []);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const validateError = validateUserAddress(input);
      if (validateError) {
        console.log(validateError);
        return setError(validateError);
      }
      console.log(input);
      editUserAddress(+editAddress.id, input);
      toast.success('edit address');
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
    <div className='relative w-full min-h-screen'>
      <div
        onClick={() => navigate('/my-address-page')}
        className='absolute left-24 top-12 btn bg-transparent border-none shadow-none'
      >
        <BackIcon />
      </div>
      <div className='px-8 py-24'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            EDIT ADDRESS
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
