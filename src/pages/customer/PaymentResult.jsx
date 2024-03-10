import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import LetGoIcon from '../../assets/icon/LetGoIcon';
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import * as transactionApi from '../../api/transaction';

const initialState = {
  status: null,
  id: null,
};

export default function PaymentResult() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState(initialState);
  const params = searchParams.get('success');

  console.log('location', location?.search.split('?')?.[1].split('=')[1]);
  const paymentStatus = params.split('?')[0];
  const transactionId = params.split('?')[1].slice(3);
  const isSuccess = location?.search.split('?')?.[1].split('=')[1];
  console.log(paymentStatus);
  console.log(transactionId);

  const isComplete = () => {
    if (paymentStatus == 'true') {
      return 'COMPLETE';
    } else {
      return 'FAIL';
    }
  };

  useEffect(() => {
    setData((prev) => {
      const tempData = { ...prev, status: isComplete(), id: transactionId };
      (async () => {
        await transactionApi.updateTransaction(tempData);
      })();
      return tempData;
    });
  }, []);

  console.log(data);
  return (
    <div className='flex flex-col w-full h-screen justify-center items-center gap-8'>
      {isSuccess === 'true' ? (
        <>
          <div className='flex flex-col'>
            <div className='text-2xl'>
              your payment is success, please check your email.
            </div>
            <div className='text-5xl font-medium'>
              Thank You for Your Supporting!
            </div>
          </div>
          <Link to='/'>
            <div className='flex justify-center items-center gap-1'>
              <div className='underline'>Continue shopping</div>
              <LetGoIcon size='18px' />
            </div>
          </Link>
        </>
      ) : (
        <>
          <div className='flex flex-col'>
            <div className='text-2xl'>Sorry, Fail to process payment.</div>
            <div className='text-5xl font-medium'>
              Please visiting us again.
            </div>
          </div>
          <Link to='/'>
            <div className='flex justify-center items-center gap-1'>
              <div className='underline'>Continue shopping</div>
              <LetGoIcon size='18px' />
            </div>
          </Link>
        </>
      )}
    </div>
  );
}
