import React from 'react'
import ToyMartLogo from '../assets/icon/ToyMartLogo'
import Button from '../components/Button'

export default function AdminSideBar() {
    return (
        <div className='w-[24%] p-8 bg-grayBg100'>
            <ToyMartLogo></ToyMartLogo>
            <div className='flex flex-col mt-24'>
                <Button textPosition="start" bg="gray">Home</Button>
                <Button textPosition="start" bg="gray">Chat</Button>
                <Button textPosition="start" bg="gray">Category Management</Button>
                <Button textPosition="start" bg="gray">Product Management</Button>
                <Button textPosition="start" bg="gray">Trend Management</Button>
                <Button textPosition="start" bg="gray">Customer Management</Button>
                <Button textPosition="start" bg="gray">Admin Management</Button>
                <Button textPosition="start" bg="gray">Transaction Monitoring</Button>
            </div>
        </div>
    )
}