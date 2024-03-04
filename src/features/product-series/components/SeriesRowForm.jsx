import React from 'react'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import { useDispatch, useSelector } from 'react-redux';

export default function SeriesRowForm({ onChange, onSubmit, setIsAddGroups, onCancel }) {

    return (
        <div className='flex items-center px-4 py-2 gap-2'>
            <form onSubmit={(e) => onSubmit(e, group)} className='flex justify-between w-full'>
                <div className='flex'>
                    <div className='w-16'></div>
                    <div className='w-48 flex'>
                    </div>
                    <div className='w-48'>
                        <Input
                            onChange={onChange}
                            value={group?.categories}
                            name="categories"
                        />
                    </div>
                </div>
                <div className=''><Button color="white" bg="red">SAVE</Button></div>
            </form>
            <div className=''><Button color="white" bg="darkGray" onClick={onCancel}>CANCEL</Button></div>
        </div>
    )
}
