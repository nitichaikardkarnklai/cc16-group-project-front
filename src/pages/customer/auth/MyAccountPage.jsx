import React from 'react';

export default function MyAccountPage() {
  return (
    <div>
      <div className=" m-auto max-w-2xl text-center  px-8 py-20  ">
        <div>
          <div class="avatar">
            <div class="w-24 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
        <div>
          <h2 className=" font-bold tracking-tight text-gray-900 sm:text-2xl">"Name" ACCOUNT</h2>
        </div>
        <div className="flex justify-center gap-6 underline ">
          <div>ACCOUNT SETTINGS</div>
          <div>EDIT PROFILE</div>
        </div>
        <div className="flex  justify-between py-6 px-6 ">
          <div className='bg-gray-200 gap-6 py-8 px-6 w-1/3 rounded-2xl'>My order </div>
          <div className='bg-gray-200 gap-6 py-8 px-6 w-1/3 rounded-2xl'>My reward </div>
        </div>
        <div className="flex  justify-between py-6 px-6 ">
          <div className='bg-gray-200 gap-6 py-8 px-6 w-1/3 rounded-2xl'>Address book </div>
          <div className='bg-gray-200 gap-6 py-8 px-6 w-1/3 rounded-2xl'>Sign out </div>
        </div>



      </div>



    </div>
  )
}
