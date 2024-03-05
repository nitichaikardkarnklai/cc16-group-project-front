import React from 'react'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import { useDispatch, useSelector } from 'react-redux';
import { resetNewSeriesInput, setIsAddSeries, onChangeNewSeriesInput } from '../../../store/slices/seriesSlice';

export default function SeriesRowForm({ onSubmit }) {
    const { newSeries } = useSelector(store => store.series);
    const dispatch = useDispatch();

    return (
        <div className='flex items-center px-4 py-2 gap-2'>
            <form onSubmit={(e) => onSubmit(e)} className='flex justify-between w-full'>
                <div className='flex'>
                    <div className='w-16'></div>
                    <div className='w-48'>
                        <Input
                            onChange={(e) => dispatch(onChangeNewSeriesInput({ name: e.target.name, value: e.target.value }))}
                            value={newSeries.series}
                            name="series"
                        />
                    </div>
                </div>
                <div className=''><Button color="white" bg="red">SAVE</Button></div>
            </form>
            <div className=''><Button color="white" bg="darkGray" onClick={() => { dispatch(setIsAddSeries()); dispatch(resetNewSeriesInput()); }}>CANCEL</Button></div>
        </div>
    )
}
