import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import LetGoIcon from '../../assets/icon/LetGoIcon';
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

export default function PaymentResult() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const params = searchParams.get('success');
  console.log('a', params);
  const paymentStatus = params.split('?')[0];
  const transactionId = +params.split('?')[1].slice(3);
  console.log(paymentStatus);
  console.log(transactionId);

  return (
    <div className='flex flex-col w-full h-screen justify-center items-center gap-8'>
      <div className='flex flex-col'>
        <div className='text-2xl'>
          your payment is success, please check your email.
        </div>
        <div className='text-5xl font-medium'>
          Thank you for your Supporting!
        </div>
      </div>
      <Link to='/'>
        <div className='flex justify-center items-center gap-1'>
          <div className='underline'>Continue shopping</div>
          <LetGoIcon size='18px' />
        </div>
      </Link>
    </div>
  );
}
