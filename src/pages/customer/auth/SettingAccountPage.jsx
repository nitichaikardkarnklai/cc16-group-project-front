import React from 'react';
import HeadPhoneIcon from '../../../assets/icon/HeadPhoneIcon';
import MailIcon from '../../../assets/icon/MailIcon';
import useAuth from '../../../hooks/use-auth';

export default function SettingAccountPage() {
  const { authUser } = useAuth();

  return (
    <div className='flex flex-col gap-6 w-[885px] mx-auto'>
      <div className='text-center text-3xl font-semibold pt-12'>
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
          <input type='checkbox' className='toggle' />
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
        <div className='text-sm'>Please contact us at support@toymart.com</div>
      </div>
    </div>
  );
}
