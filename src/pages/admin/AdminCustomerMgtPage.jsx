import React from 'react';
import UserRow from '../../layouts/components/UserRow';

export default function AdminCustomerMgtPage() {
  return <div className='flex flex-col gap-4 h-screen'>
    <UserRow></UserRow>
    <UserRow></UserRow>
    <UserRow></UserRow>
    <UserRow></UserRow>
  </div>;
}
