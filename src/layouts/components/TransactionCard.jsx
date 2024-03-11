import React from 'react';

export default function transactionCard({ data }) {
  console.log('data', data);
  return (
    <div className='flex py-10 gap-2 w-full '>
      <div className='flex flex-col w-[200px] pr-4 border-r flex-shrink-0'>
        <div className='text-2xl font-semibold'>Transaction Id {data.id}</div>
        <div>status: {data.status}</div>
        <div>discount: {(+data.discount).toLocaleString()} THB</div>
        <div className='text-lg font-medium'>
          total: {(+data.totalAmount).toLocaleString()} THB
        </div>
      </div>
      <div className='flex flex-col gap-2 w-full'>
        {data.itemPayments.map((el, index) => {
          console.log('el', el);
          return (
            <div key={index} className='flex gap-4'>
              <div className='h-[90px] w-[90px] bg-grayBg100 flex-shrink-0'>
                <img src={el.products?.productCover?.[0].cover} alt='' />
              </div>
              <div className='flex flex-col justify-between w-full'>
                <div>
                  <div className='text-lg font-medium'>
                    {el.products.productName}
                  </div>
                  <div className='text-xs text-goldToyMart'>
                    {el.products.brand}
                  </div>
                </div>
                <div className='flex justify-between'>
                  <div className='text-redHero font-semibold'>
                    {el.price} THB
                  </div>
                  <div>Quantity: {el.quantity} pcs.</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
