import React from 'react';
import FaceBookIcon from '../assets/icon/FaceBookIcon';
import InstagramIcon from '../assets/icon/InstagramIcon';
import TwitterIcon from '../assets/icon/TwitterIcon';
import LinkInIcon from '../assets/icon/LinkInIcon';
import MailIcon from '../assets/icon/MailIcon';
import CreditCardIcon from '../assets/icon/CreditCardIcon';
import BitCoinIcon from '../assets/icon/BitCoinIcon';

export default function CustomerFooter() {
  return (
    <div className=' w-full'>
      <div className='w-full h-[4rem] flex justify-start items-center gap-6 px-8 bg-grayFooter'>
        <div className=' font-semibold text-xl'>FOLLOW US ON</div>
        <div className='flex gap-4'>
          <FaceBookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <LinkInIcon />
          <MailIcon />
        </div>
      </div>
      <div className='w-full bg-black text-white flex justify-between py-12 px-24'>
        <div className='flex flex-col gap-8 w-[300px]'>
          <div>
            <div className='text-xl font-medium'>JOIN THE COMMUNITY</div>
            <div className='bg-white h-[3rem] flex justify-end items-center px-4'>
              <p className=' text-black underline font-bold'>Chat with us</p>
            </div>
          </div>
          <div>
            <div className='text-xl font-medium'>CONTACT US</div>
            <div className='border-2 border-grayBg300 p-2'>
              <div className='text-sm'>Email</div>
              <div className='text-xs'>support@toymart.com</div>
            </div>
          </div>
        </div>
        <div className='flex gap-24'>
          <div>
            <h3 className='text-xl font-medium'>INFORMATION</h3>
            <p className='text-grayFooter'>EVENT</p>
            <p className='text-grayFooter'>STORE</p>
            <p className='text-grayFooter'>ABOUT US</p>
            <p className='text-grayFooter'>CONTACT US</p>
          </div>
          <div>
            <h3 className='text-xl font-medium'>HELP</h3>
            <p className='text-grayFooter'>FAQs</p>
            <p className='text-grayFooter'>Terms & Conditions</p>
            <p className='text-grayFooter'>Privacy Policy</p>
            <p className='text-grayFooter'>Shipping Policy</p>
            <p className='text-grayFooter'>Returns & Refunds</p>
            <p className='text-grayFooter'>Track your order</p>
          </div>
        </div>
      </div>
      <div className='w-full bg-black border-white border-t-2 text-grayFooter flex flex-col justify-center items-center p-12 gap-4'>
        <div>2024 TOY MART ALL RIGHT RESERVED</div>
        <div className='flex gap-4'>
          <CreditCardIcon />
          <BitCoinIcon />
        </div>
      </div>
    </div>
  );
}
