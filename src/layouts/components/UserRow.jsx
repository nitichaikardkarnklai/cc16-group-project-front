import React from 'react'
import Button from '../../components/Button'

export default function UserRow() {
    return (
        <div className='border-2 p-4 rounded-lg flex justify-between'>
            <div className='border-none rounded-full  overflow-hidden w-12'>
                <img src="https://picsum.photos/id/237/200/200"></img>
            </div>
            <div className='flex flex-col gap-1'>
                <div>John Smith</div>
                <div className='text-grayBg300 text-[0.8rem]'>john@nibble.com</div>
            </div>
            <div className='flex items-center'>
                <div>Customer</div>
            </div>
            <div className='flex items-center'>
                Tel: xxxxxxxxxx
            </div>
            <div>
                <Button bg="gray">DEACTIVE</Button>
                {/* <Button bg="red" color="white">ACTIVATE</Button> */}
            </div>
        </div>
    )
}