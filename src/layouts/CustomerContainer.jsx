import { Outlet } from 'react-router-dom';
import React from 'react';
import CustomerNavBar from './CustomerNavBar';
import CustomerFooter from './CustomerFooter';

export default function CustomerContainer() {
  return (
    <>
      <CustomerNavBar />
      <Outlet />
      <CustomerFooter />
    </>
  );
}
