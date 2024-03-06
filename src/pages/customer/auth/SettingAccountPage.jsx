import React from 'react';
import HeadPhoneIcon from '../../../assets/icon/HeadPhoneIcon';
import MailIcon from '../../../assets/icon/MailIcon';
import useAuth from '../../../hooks/use-auth';
import useUser from '../../../hooks/use-user';
import BackIcon from '../../../assets/icon/BackIcon';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function SettingAccountPage() {
  const { authUser } = useAuth();
  const { updateUserSubscribe, subscribe } = useUser();
  const navigate = useNavigate();

  const handleOnCheck = (e) => {
    console.log(e.target.checked);
    updateUserSubscribe({ isSubscribe: e.target.checked });
  };

  return (
    <div className='relative w-full min-h-full'>
      <div
        onClick={() => navigate('/my-account-page')}
        className='absolute left-24 top-12 btn bg-transparent border-none shadow-none'
      >
        <BackIcon />
      </div>
      <div className=' flex flex-col gap-6 w-[885px] mx-auto py-24'>
        <div className='text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl'>
          ACCOUNT SETTING
        </div>
        <div>
          <div className='text-lg font-medium'>EMAIL</div>
          <input
            type='text'
            placeholder={authUser.email}
            className='input input-bordered w-full '
            disabled
          />
        </div>
        <div className='border-b pb-6'>
          <div className='text-lg font-medium'>Subscribe</div>
          <div className='flex gap-4'>
            {/* -----CheckBox subscribeBox----- */}
            <input
              type='checkbox'
              onChange={handleOnCheck}
              className='toggle'
              checked={subscribe ? true : false}
            />
            <div className='text-sm'>
              Show me newsletters,promotion,events from TOY MART via Email.
            </div>
          </div>
        </div>
        <div>
          <HeadPhoneIcon />
        </div>
        <div>
          <div className='text-lg font-medium'>Online customer service</div>
          <div className='text-sm'>
            Click the customer service icon to start talking with us,
            <br /> using either automated or human service.
          </div>
          <div className='text-sm'>7 days a week 09:00 - 18:00</div>
        </div>
        <div>
          <MailIcon />
        </div>
        <div className='border-b pb-6'>
          <div className='text-lg font-medium'>Email service</div>
          <div className='text-sm'>
            Please contact us at support@toymart.com
          </div>
        </div>
      </div>
    </div>
  );
}
