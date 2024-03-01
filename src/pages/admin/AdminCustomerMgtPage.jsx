import React from 'react';
import UserRow from '../../layouts/components/UserRow';
import useUser from '../../hooks/use-user';
import { useEffect } from 'react';

export default function AdminCustomerMgtPage() {
  const { users, setOnFetch, bannedUser, unbannedUser, location } = useUser();

  const onToggleBanned = (userObj) => {
    // console.log(userObj);
    if (userObj.isActive === true) {
      bannedUser(userObj.id);
    } else {
      unbannedUser(userObj.id);
    }
    setOnFetch(c => !c)
  }

  return <div className='flex flex-col gap-4 h-screen'>
    {users?.map(el => <UserRow key={el.id} user={el} onToggleBanned={onToggleBanned} location={location}></UserRow>)}
  </div>;
}