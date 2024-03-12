import React from 'react';
import * as transactionApi from '../../api/transaction';
import { useState } from 'react';
import { useEffect } from 'react';
import TransactionCard from '../../layouts/components/TransactionCard';
import SearchBar from '../../components/SearchBar';
import Spinner from '../../components/Spinner';

export default function AdminTransactionMonitoringPage() {
  const [allTransaction, setAllTransaction] = useState([]);
  const [searchedTransaction, setSearchTransaction] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await transactionApi.getAllTransactions();
        console.log(response.data.transaction);
        setAllTransaction(response.data.transaction);
        setSearchTransaction(response.data.transaction);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const searchTransactionByEmail = (searchText) => {
    const searchedResult = searchedTransaction.filter((el) =>
      el?.user?.email
        .trim()
        .toLowerCase()
        .includes(searchText.trim().toLowerCase())
    );

    setAllTransaction(searchedResult);
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <div>
        <SearchBar onClick={searchTransactionByEmail} />
      </div>
      <div>
        {allTransaction?.map((el, index) => {
          return <TransactionCard key={index} data={el} />;
        })}
      </div>
    </div>
  );
}
