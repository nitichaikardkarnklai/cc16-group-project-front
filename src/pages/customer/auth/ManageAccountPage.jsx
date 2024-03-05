import React from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../../hooks/use-auth';
import validateEditProfile from '../../../features/user/validations/validate-editProfile';
import useUser from '../../../hooks/use-user';
import { toast } from 'react-toastify';
import BackIcon from '../../../assets/icon/BackIcon';
import { useNavigate } from 'react-router-dom';
// import useAuth from '../../../hooks/use-auth';

const initial = {
  nickName: '',
  phone: '',
  birthDate: '',
  gender: '',
};

export default function ManageAccountPage() {
  const [input, setInput] = useState({ ...initial });
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const { authUser, setOnFetch } = useAuth();
  const { editUserProfile } = useUser();
  const {
    userProfile: { nickName, phone, birthDate, gender },
  } = authUser;

  useEffect(() => {
    console.log(authUser.userProfile);
    setInput({
      ...input,
      nickName: nickName || '',
      phone: phone || '',
      birthDate: JSON.stringify(birthDate).slice(1, 11) || '',
      gender: gender || '',
    });
  }, []);

  const { authUser } = useAuth();
  const {
    userProfile: { nickName, phone, birthDate, gender },
  } = authUser;

  useEffect(() => {
    console.log(authUser.userProfile);
    setInput({ ...input, nickName, phone, birthDate, gender });
  }, []);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setError((c) => {
      return { ...error, [e.target.name]: '' };
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const validationError = validateEditProfile(input);
      if (validationError) {
        console.log(validationError);
        return setError(validationError);
      }
      console.log({
        ...input,
        nickName: input.nickName === '' ? null : input.nickName,
      });
      editUserProfile({
        ...input,
        nickName: input.nickName === '' ? null : input.nickName,
        phone: input.phone === '' ? null : input.phone,
        gender: input.gender === '' ? null : input.gender,
        birthDate: input.birthDate === '' ? null : input.birthDate,
      });
      toast.success('updated');
    } catch (error) {
      console.log(error);
    } finally {
      setOnFetch((c) => !c);
    }
  };

  return (
    <div>
      <div className='relative px-6 pb-5  py-24 '>
        <div
          onClick={() => navigate('/my-account-page')}
          className='absolute left-24 top-12 btn bg-transparent border-none shadow-none'
        >
          <BackIcon />
        </div>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Manage Account
          </h2>
        </div>
        <form
          onSubmit={handleSubmit}
          className='mx-auto mt-16 max-w-xl sm:mt-10'
        >
          <div className='grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2'>
            <div className='sm:col-span-2'>
              <label
                htmlFor='Nickname'
                className='block text-sm font-semibold leading-6 text-gray-900'
              >
                Nickname
              </label>
              <div className='mt-2.5'>
                <Input
                  value={input.nickName}
                  name='nickName'
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className='sm:col-span-2'>
              <label
                htmlFor='Mobile Number'
                className='block text-sm font-semibold leading-6 text-gray-900'
              >
                Mobile Number
              </label>
              <div className='mt-2.5'>
                <Input
                  value={input.phone}
                  name='phone'
                  onChange={handleChange}
                  errorMessage={error.phone}
                />
              </div>
            </div>
            <div className='sm:col-span-2'>
              <label
                htmlFor='Gender'
                className='block text-sm font-semibold leading-6 text-gray-900'
              >
                Gender
              </label>
              <div className='mt-2.5'>
                <select
                  name='gender'
                  onChange={handleChange}
                  defaultValue={gender ? `${gender}` : ''}
                  className='select w-full border-gray-300 focus:border-black-500 focus:ring-black-300'
                >
                  <option value='' disabled>
                    Gender
                  </option>
                  <option value='MALE'>Male</option>
                  <option value='FEMALE'>Female</option>
                  <option value='AFAB'>AFAB</option>
                  <option value='AMAB'>AMAB</option>
                  <option value='UNSPECIFIED'>Unspecified</option>
                </select>
              </div>
            </div>
            <div className='sm:col-span-2'>
              <label
                htmlFor='Birthday'
                className='block text-sm font-semibold leading-6 text-gray-900'
              >
                Birthday
              </label>
              <div className='mt-2.5'>
                <Input
                  type='date'
                  value={input.birthDate}
                  name='birthDate'
                  onChange={handleChange}
                  defaultValue={birthDate ? birthDate : ''}
                />
              </div>
            </div>
          </div>
          <div className='mt-10 flex justify-center'>
            <Button btn bg='red' type='submit' className='w-full' color='white'>
              SAVE PROFILE
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
