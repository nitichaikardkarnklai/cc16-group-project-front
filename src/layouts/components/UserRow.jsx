import React from 'react'
import Button from '../../components/Button'

export default function UserRow({ user, onToggleBanned, location }) {

    return (
        location.pathname === "/admin/admin-customer-mgt-page" ?
            <div className='border-2 p-6 rounded-lg flex gap-4 justify-between'>
                {/* <div className='border-none rounded-full  overflow-hidden w-12'>
                <img src="https://picsum.photos/id/237/200/200"></img>
            </div> */}
                <div className='flex items-center min-w-16'>
                    <div>Id: {user.id}</div>
                </div>
                <div className='flex flex-col gap-1 min-w-40'>
                    <div>{user.userProfile?.nickName || <span className='text-grayBg300'>- No Nickname -</span>}</div>
                    <div className='text-grayBg300 text-[0.8rem]'>{user.email}</div>
                </div>
                <div className='flex items-center min-w-32'>
                    <div>{user.role === "USER" && "Customer"}</div>
                </div>
                <div className='flex items-center min-w-40'>
                    Tel: {user.userProfile?.phone || "-"}
                </div>
                <div className=''>
                    {user.isActive ?
                        <Button bg="red" color="white" onClick={() => onToggleBanned(user)}>ACTIVATE</Button>
                        :
                        <Button bg="gray" onClick={() => onToggleBanned(user)}>BANNED</Button>
                    }
                </div>
            </div>
            :
            <div className='border-2 p-6 rounded-lg flex gap-4 justify-between'>
                <div className='flex items-center min-w-16'>
                    <div>Id: {user.id}</div>
                </div>
                <div className='flex flex-col justify-center min-w-40'>
                    <div className=''>{user.email}</div>
                </div>
                <div className='flex items-center min-w-32'>
                    <div>{user.role === "USER" && "Customer"}</div>
                </div>
                <div className=''>
                    {user.isActive ?
                        <Button bg="red" color="white" onClick={() => onToggleBanned(user)}>ACTIVATE</Button>
                        :
                        <Button bg="gray" onClick={() => onToggleBanned(user)}>DEACTIVATE</Button>
                    }
                </div>
            </div>
    )
}