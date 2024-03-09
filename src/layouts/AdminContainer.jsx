import { Outlet } from 'react-router-dom';
import React from 'react';
import AdminSideBar from "../layouts/AdminSideBar";

export default function AdminContainer() {

  return (
    <div className='min-h-screen flex'>
      <div className='bg-grayBg100 shadow-md '>
        <div className='min-w-72 h-screen p-6 flex flex-col justify-between sticky top-0'>
          <AdminSideBar />
        </div>
      </div>
      <div className='px-12 py-8 w-full'>
        <Outlet />
      </div>
    </div>
  );
}
