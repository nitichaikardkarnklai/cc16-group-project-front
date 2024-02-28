import React from 'react';
import FaceBookIcon from '../assets/icon/FaceBookIcon';
import InstagramIcon from '../assets/icon/InstagramIcon';
import TwitterIcon from '../assets/icon/TwitterIcon';
import LinkInIcon from '../assets/icon/LinkInIcon';
import MailIcon from '../assets/icon/MailIcon';

export default function CustomerFooter() {
  return (
    <div className=' w-full'>
      <div className='w-full h-[4rem] flex justify-start items-center gap-6  bg-grayFooter'>
        <div className=' font-semibold'>FOLLOW US ON</div>
        <div className='flex gap-4'>
          <FaceBookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <LinkInIcon />
          <MailIcon />
        </div>
      </div>
      <div className='w-full bg-black text-white'>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
