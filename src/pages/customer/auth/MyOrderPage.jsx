import React from 'react';
import BackIcon from '../../../assets/icon/BackIcon';
import { useNavigate } from 'react-router-dom';
import * as transactionApi from '../../../api/transaction';
import TransactionCard from '../../../layouts/components/TransactionCard';
import { useEffect } from 'react';
import { useState } from 'react';
import Spinner from '../../../components/Spinner';

export default function MyOrderPage() {
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await transactionApi.getUserTransaction();
        setTransaction(response.data.transaction);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // console.log(transaction);
  if (loading) {
    return <Spinner />;
  }

  return (
    <div className='relative w-full min-h-screen'>
      <div
        onClick={() => navigate('/my-account-page')}
        className='absolute left-24 top-12 btn bg-transparent border-none shadow-none'
      >
        <BackIcon />
      </div>
      <div className='w-[800px] py-10 m-auto items-center'>
        <div className='text-4xl font-bold text-left py-4 '>My Order</div>
        <div>
          {transaction?.map((el, index) => {
            return <TransactionCard key={index} data={el} />;
          })}
        </div>
      </div>
    </div>
  );
}
