import { Outlet } from 'react-router-dom';
import React from 'react';
import AdminSideBar from "../layouts/AdminSideBar"

export default function AdminContainer() {
  return (
    <div className='min-h-screen flex'>
      <div className='min-w-60 p-6 bg-grayBg100 shadow-md'>
        <AdminSideBar />
      </div>
      <div className='px-12 py-8  w-full'>
        <Outlet />
      </div>
    </div>
  );
}
