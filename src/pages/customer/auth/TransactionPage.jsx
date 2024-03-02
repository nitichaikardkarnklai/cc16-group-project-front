import React from 'react';
import Button from '../../../components/Button';
import CreditCardIcon from '../../../assets/icon/CreditCardIcon';
import BitCoinIcon from '../../../assets/icon/BitCoinIcon';

export default function TransactionPage() {
  return (
    <div className="container mx-auto w-10/12 py-10 min-h-screen">
      <div className="container mx-auto py-10">
        <div className="flex flex-col gap-10 w-full lg:flex-row">
          <div className="flex-grow card ">
            <div className='flex flex-col flex-2 place-items-left ' >
              <div className='flex flex-col'>
                <h3>please add your Shipping address</h3>
                <Button className=" w-full">Add Shipping Address</Button>
              </div>
              <div className='flex flex-col py-5'>
                <h3 className='text-2xl text-bold'>BILLING ADDRESS:</h3>
                <Button className="btn border btn-secondary">Add Billing Address</Button>
              </div>
              <div className='flex flex-col py-5'>
                <h3 className='text-2xl text-bold'>PAYMENT METHOD:</h3>
                <Button className="btn btn-primary ">
                  <div className="flex items-center gap-2 ">
                    <CreditCardIcon bgColor="red" />
                    Credit Card
                  </div>
                </Button>
                <br />
                <Button className="btn btn-primary">
                  <div className="flex items-center gap-2 ">
                    <BitCoinIcon />
                    Others
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex-grow flex-1 card place-items-right">
            <div className="flex flex-col bg-base-200 w-3/4 p-10">
              <div className="flex justify-between">
                <h3 className='font-bold'> Subtotal</h3>
                <h3 className='font-bold'> THB</h3>
              </div>
              <div className="flex justify-between">
                <h3 className='font-bold'> Subtotal</h3>
                <h3 className='font-bold'> Shipping</h3>
              </div>
              <div className="divider divider-vertical"></div>
              <div className="flex justify-between"><div>
              </div>
              </div>
              <div className="flex justify-between">
                <h2 className="text-2xl font-bold">Total(2)</h2>
                <h2 className="text-2xl font-bold"> ฿760.00</h2>
              </div>
              <div className="divider divider-vertical"></div>
              <h1 className="text-2xl text-center ">2 Items</h1>

              <div>
                <div className="flex py-10 w-full ">
                  <div className="flex px-2 w-full">
                    <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" alt="Shoes" className="rounded-xl h-40 w-40" />
                  </div>
                  <div className="flex flex-col justify-between w-full">
                    <div>
                      <h4 className="text-mx font-bold"> Select All</h4>
                      <p className="text-mx "> Select All</p>
                    </div>
                    <div className="flex justify-between ">
                      <h4 className="text-mx font-bold text-red-600"> ฿380.00</h4>
                      <h1>QTY:1</h1>
                    </div>
                  </div>
                </div>
                <div className="flex py-10 w-full ">
                  <div className="flex px-2 w-full">
                    <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" alt="Shoes" className="rounded-xl h-40 w-40" />
                  </div>
                  <div className="flex flex-col justify-between w-full">
                    <div>
                      <h4 className="text-mx font-bold"> Select All</h4>
                      <p className="text-mx "> Select All</p>
                    </div>
                    <div className="flex justify-between ">
                      <h4 className="text-mx font-bold text-red-600"> ฿380.00</h4>
                      <h1>QTY:1</h1>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div >

  )
}
