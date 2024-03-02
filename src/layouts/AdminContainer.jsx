import { Outlet } from 'react-router-dom';
import React from 'react';
import AdminSideBar from "../layouts/AdminSideBar";
import useUser from '../hooks/use-user';
import Spinner from '../components/Spinner';

export default function AdminContainer() {
  const { loading } = useUser();

  if (loading) return <Spinner />

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
