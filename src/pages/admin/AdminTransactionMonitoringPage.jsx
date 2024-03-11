import React from 'react';
import * as transactionApi from '../../api/transaction';
import { useState } from 'react';
import { useEffect } from 'react';
import TransactionCard from '../../layouts/components/TransactionCard';

export default function AdminTransactionMonitoringPage() {
  const [allTransaction, setAllTransaction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await transactionApi.getAllTransactions();
        console.log(response.data.transaction);
        setAllTransaction(response.data.transaction);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div>
      <div></div>
      <div>
        {allTransaction?.map((el) => {
          return <TransactionCard data={el} />;
        })}
      </div>
    </div>
  );
}
