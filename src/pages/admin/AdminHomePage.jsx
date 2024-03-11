import React from 'react';
import LineChart from '../../layouts/components/LineChart';
import BarChart from '../../layouts/components/BarChart';
import * as summaryApi from '../../api/summary';
import { useEffect } from 'react';
import { useState } from 'react';
import { data } from 'autoprefixer';
import Spinner from '../../components/Spinner';

export default function AdminHomePage() {
  const [summaryData, setSummaryData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await summaryApi.summary();
        setSummaryData(data.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  console.log(summaryData);
  return (
    <div className='flex flex-col gap-8 justify-center items-center'>
      <div className='w-[1130px]'>
        <LineChart
          date={summaryData?.totalSaleByDateInThirtyDay?.date}
          totalSale={summaryData?.totalSaleByDateInThirtyDay?.totalSale}
        >
          <h1 className='text-3xl text-black'>Amount sell by date time</h1>
        </LineChart>
      </div>
      <div className='flex gap-8'>
        <div className='w-[550px]'>
          <BarChart
            seriesName={summaryData?.totalSaleBySerieInThirtyDay?.serieName}
            totalSale={summaryData?.totalSaleBySerieInThirtyDay?.totalSales}
          >
            <h1 className='text-3xl text-black'>Amount sell by series</h1>
          </BarChart>
        </div>
        <div className='w-[550px]'>
          <BarChart
            seriesName={summaryData?.totalSaleByNameInThirtyDay?.productName}
            totalSale={summaryData?.totalSaleByNameInThirtyDay?.totalSales}
          >
            <h1 className='text-3xl text-black'>Top selling by product</h1>
          </BarChart>
        </div>
      </div>
    </div>
  );
}
