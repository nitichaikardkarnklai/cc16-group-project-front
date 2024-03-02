import React from 'react';
import Input from '../../../components/Input';

export default function MyRewardPage() {
  return (
    <div className="w-[800px] py-10 m-auto items-center">
      <h1 className="text-4xl font-bold text-left py-8 "> My Reward</h1>
      <div className="flex flex-col w-[800px] h-[90px] py-4 bg-orange-200 text-amber-700 ">
        <h1 className="text-4xl font-bold text-center py-4 ">
          50 Points
        </h1>
      </div>
      <div className="pt-8 pb-2">
        <h2>
          Points Details
        </h2>
      </div>
      <div className="flex flex-col w-[800px] h-[30px] bg-gray-300 ">
        Time
      </div>
      <div className="flex justify-between w-[800px]">
        <h1>
          Date and Time
        </h1>
        <h1>
          Points
        </h1>
      </div>
    </div>
  )
}
