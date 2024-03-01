import React from 'react';
import UserRow from '../../layouts/components/UserRow';
import useUser from '../../hooks/use-user';
import { useEffect } from 'react';

export default function AdminAdminMgtPage() {
    const { users, setOnFetch, bannedAdmin, unbannedAdmin, location } = useUser();

    const onToggleBanned = (userObj) => {
        // console.log(userObj);
        if (userObj.isActive === true) {
            bannedAdmin(userObj.id);
        } else {
            unbannedAdmin(userObj.id);
        }
    }

    return (
        <div className='flex flex-col gap-4 h-screen'>
            {users?.map(el => <UserRow key={el.id} user={el} onToggleBanned={onToggleBanned} location={location}></UserRow>)}
        </div>
    )
}
