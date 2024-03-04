import React from 'react'
import Button from '../../components/Button'
import { useState } from 'react'
import Input from '../../components/Input';
import { fetchGroups } from '../../store/slices/groupSlice';

export default function GroupsRow({ group, onChange, onSubmitEdit }) {
    const [isEdit, setIsEdit] = useState(false);

    return (
        !isEdit ?
            <div className='flex items-center px-4 py-2 justify-between'>
                <div className='flex'>
                    <div className='w-16'>{group.id}</div>
                    <div className='w-48'>{group.group}</div>
                    <div className='w-48'>{group.categories}</div>
                </div>
                <div className=''><Button color="white" bg="darkGray" onClick={() => setIsEdit(true)}>EDIT</Button></div>
            </div>
            :

            <form className='flex items-center px-4 py-2 justify-between' onSubmit={(e) => onSubmitEdit(e)}>
                <div className='flex items-center '>
                    <div className='w-16'>{group.id}</div>
                    <div className='w-48'>{group.group}</div>
                    <div className='w-48'>
                        <Input
                            onChange={(e) => onChange(e)}
                            value={group?.categories}
                            name="categories"
                        />
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div className=''><Button color="white" bg="red" type="submit">SAVE</Button></div>
                    <div className=''><Button color="white" bg="darkGray" type="button" onClick={() => { setIsEdit(false); dispatch(fetchGroups()) }}>CANCEL</Button></div>
                </div>
            </form>
    )
}
