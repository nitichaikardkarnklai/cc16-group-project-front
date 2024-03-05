import React from 'react'
import Button from '../../components/Button'
import { useState } from 'react'
import Input from '../../components/Input';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSeries } from '../../store/slices/seriesSlice';

export default function SeriesRow({ seriesObj, onChange, onSubmitEdit }) {
    const [isEdit, setIsEdit] = useState(false);
    const dispatch = useDispatch();

    return (
        !isEdit ?
            <div className='flex items-center px-4 py-2 justify-between'>
                <div className='flex'>
                    <div className='w-16'>{seriesObj.id}</div>
                    <div className='w-48'>{seriesObj.series}</div>
                </div>
                <div className=''><Button color="white" bg="darkGray" onClick={() => setIsEdit(true)}>EDIT</Button></div>
            </div>
            :

            <form className='flex items-center px-4 py-2 justify-between' onSubmit={(e) => onSubmitEdit(e)}>
                <div className='flex items-center '>
                    <div className='w-16'>{seriesObj.id}</div>
                    <div className='w-48'>
                        <Input
                            onChange={(e) => onChange(e)}
                            value={seriesObj?.series}
                            name="series"
                        />
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div className=''><Button color="white" bg="red" type="submit">SAVE</Button></div>
                    <div className=''><Button color="white" bg="darkGray" type="button" onClick={() => { setIsEdit(false); dispatch(fetchSeries()) }}>CANCEL</Button></div>
                </div>
            </form>
    )
}
