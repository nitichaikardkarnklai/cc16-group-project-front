import { Outlet } from 'react-router-dom';
import React from 'react';
import AdminSideBar from "../layouts/AdminSideBar"

export default function AdminContainer() {
  return (
    <>
      <AdminSideBar />
      <Outlet />
    </>
  );
}
