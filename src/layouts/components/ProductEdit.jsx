import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import BackIcon from '../../assets/icon/BackIcon';
import { onChangeNewProduct } from '../../store/slices/productSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import TextArea from '../../components/TextArea';


export default function ProductEdit({ productObj, handleOnChange }) {
    const dispatch = useDispatch();
    const { series } = useSelector(store => store.series);
    const { groups } = useSelector(store => store.group);


    return (
        <div className="w-full lg:w-1/2 min-h-screen flex">
            <div className="card-body">
                <div className="form-control gap-6">
                    <div className='flex items-center gap-2'>
                        <div className='w-28'>Name: </div>
                        <Input
                            value={productObj.productName}
                            onChange={(e) => dispatch(handleOnChange({ name: e.target.name, value: e.target.value }))}
                            name="productName"
                            placeholder="Enter Product Name"
                        />
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='w-28'>Price: </div>
                        <Input
                            type="number"
                            value={productObj.price}
                            onChange={(e) => dispatch(handleOnChange({ name: e.target.name, value: e.target.value }))}
                            name="price"
                        />
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='w-28'>Series: </div>
                        <select
                            className="select border-gray-300 w-full"
                            onChange={(e) => dispatch(handleOnChange({ name: e.target.name, value: e.target.value }))}
                            value={productObj.serieId}
                            name="serieId"
                        >
                            <option disabled value="">Product Series</option>
                            {series.map(el => <option key={el.id} value={el.id}>{el.series}</option>)}
                        </select>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='w-28'>Group: </div>
                        <select
                            className="select border-gray-300 w-full"
                            onChange={(e) => dispatch(handleOnChange({ name: e.target.name, value: e.target.value }))}
                            value={productObj.groupId}
                            name="groupId"
                        >
                            <option disabled value="">Product Groups</option>
                            {groups.map(el => <option key={el.id} value={el.id}>{el.group} / {el.categories}</option>)}
                        </select>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='w-28'>Launch Date: </div>
                        <Input
                            type="date"
                            onChange={(e) => dispatch(handleOnChange({ name: e.target.name, value: e.target.value }))}
                            value={productObj.launchDate}
                            name="launchDate"
                        />
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='w-28'>Quantity: </div>
                        <Input
                            type="number"
                            onChange={(e) => dispatch(handleOnChange({ name: e.target.name, value: e.target.value }))}
                            value={productObj.stockQuantity}
                            name="stockQuantity"
                        />
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='w-28'>Brand: </div>
                        <Input
                            placeholder="Enter Product Brand"
                            onChange={(e) => dispatch(handleOnChange({ name: e.target.name, value: e.target.value }))}
                            value={productObj.brand}
                            name="brand"
                        />
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='w-28'>Size: </div>
                        <Input
                            placeholder="Enter Product Size"
                            onChange={(e) => dispatch(handleOnChange({ name: e.target.name, value: e.target.value }))}
                            value={productObj.size}
                            name="size"
                        />
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='w-28'>Material: </div>
                        <Input
                            placeholder="Enter Product Material"
                            onChange={(e) => dispatch(handleOnChange({ name: e.target.name, value: e.target.value }))}
                            value={productObj.material}
                            name="material"
                        />
                    </div>
                    <div>
                        <div>Description:</div>
                        <TextArea
                            placeholder="Enter Description"
                            onChange={(e) => dispatch(handleOnChange({ name: e.target.name, value: e.target.value }))}
                            value={productObj.customDetail}
                            name="customDetail"
                        ></TextArea>
                    </div>
                </div>
                <div className="form-control">
                    <Button bg="red" color="white" onClick={() => { }}>SUBMIT</Button>
                </div>
            </div>
        </div>
    )
}