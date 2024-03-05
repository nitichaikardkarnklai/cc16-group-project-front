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

export default function ManageAccountPage() {
  const [input, setInput] = useState({
    nickName: "",
    profilePicture: "",
    mobileNumber: "",
    birthday: "",
    gender: "",


  });
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
      birthDate: birthDate || '',
      gender: gender || '',
    });
  }, []);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setError(c => { return { ...error, [e.target.name]: "" } })
  };

  const handleSubmit = async e => {
    try {
      e.preventDefault();
    } catch (error) {
      console.log(error);
    } finally {
      setOnFetch((c) => !c);
    }
  }

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
        <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-10">
          <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">

            <div className="sm:col-span-2">
              <label htmlFor="Nickname" className="block text-sm font-semibold leading-6 text-gray-900">
                Nickname
              </label>
              <div className="mt-2.5">
                <Input
                  value={input.nickName}
                  name="nickName"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="Profile picture" className="block text-sm font-semibold leading-6 text-gray-900">
                Profile picture
              </label>
              <div className="mt-2.5">
                <div className="rounded-md border border-gray-300 bg-gray-50 p-4 shadow-md w-36">
                  <label for="upload" className="flex flex-col items-center gap-2 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 fill-white stroke-red-500" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-gray-600 font-medium">Upload file</span>
                  </label>
                  <input id="upload" type="file" className="hidden" />
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="Mobile Number" className="block text-sm font-semibold leading-6 text-gray-900">
                Mobile Number
              </label>
              <div className="mt-2.5">
                <Input
                  value={input.mobileNumber}
                  name="mobileNumber"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="Gender" className="block text-sm font-semibold leading-6 text-gray-900">
                Gender
              </label>
              <div className="mt-2.5">
                <Input
                  value={input.gender}
                  name="  gender"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="Birthday" className="block text-sm font-semibold leading-6 text-gray-900">
                Birthday
              </label>
              <div className="mt-2.5">
                <Input
                  value={input.birthday}
                  name="  birthday"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <Button btn bg="red" type="submit" className="w-full" color="white">
              SAVE PROFILE
            </Button>
          </div>
        </form >
      </div >
    </div>
  )
}
