import React from 'react';
import UserRow from '../../layouts/components/UserRow';
import useUser from '../../hooks/use-user';
import { useEffect } from 'react';
import Spinner from '../../components/Spinner';

export default function AdminCustomerMgtPage() {
  const { users, setOnFetch, bannedUser, unbannedUser, location, loading } = useUser();

  const onToggleBanned = (userObj) => {
    // console.log(userObj);
    if (userObj.isActive === true) {
      bannedUser(userObj.id);
    } else {
      unbannedUser(userObj.id);
    }
    // setOnFetch(c => !c)
  }

  if (loading) return <Spinner />

  return <div className='flex flex-col gap-4'>
    {users?.map(el => <UserRow key={el.id} user={el} onToggleBanned={onToggleBanned} location={location}></UserRow>)}
  </div>;
}