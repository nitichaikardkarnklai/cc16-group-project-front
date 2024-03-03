import React from 'react';
import UserRow from '../../layouts/components/UserRow';
import useUser from '../../hooks/use-user';
import { useEffect } from 'react';
import Button from '../../components/Button';
import Spinner from '../../components/Spinner';
import RegisterModal from '../../features/auth/components/RegisterModal';

export default function AdminAdminMgtPage() {
    const { users, loading, bannedAdmin, unbannedAdmin, location } = useUser();

    const onToggleBanned = (userObj) => {
        // console.log(userObj);
        if (userObj.isActive === true) {
            bannedAdmin(userObj.id);
        } else {
            unbannedAdmin(userObj.id);
        }
    }

    if (loading) return <Spinner />

    return (
        <div className='flex flex-col gap-4'>
            {
                location.pathname === "/admin/admin-customer-mgt-page" ?
                    ""
                    :
                    <>
                        <Button color="white" bg="red" onClick={() => document.getElementById('my_modal_4').showModal()}>REGISTER NEW ADMIN</Button>
                        <RegisterModal />
                    </>
            }
            {users?.map(el => <UserRow key={el.id} user={el} onToggleBanned={onToggleBanned} location={location}></UserRow>)}
        </div>
    )
}
