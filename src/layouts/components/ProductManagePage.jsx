import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function ProductManagePage() {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
    }

    return (
        <div>

            <div className="w-full" onSummit={handleSubmit}>
                <div className="hero min-h-screen ">
                    <div className="hero text-center">
                        <div className="w-full">
                            <div className="card flex-shrink-0 w-full  ">
                                <div className="card-body">
                                    <div className="form-control gap-6">
                                        <Input placeholder="Enter Product Name" />
                                        <Input placeholder="Enter Product Price" />
                                        <select className="select border-gray-300 w-full">
                                            <option disabled selected>Product Series</option>
                                            <option>Homer</option>
                                            <option>Marge</option>
                                            <option>Bart</option>
                                            <option>Lisa</option>
                                            <option>Maggie</option>
                                        </select>
                                        <select className="select border-gray-300 w-full">
                                            <option disabled selected>Product Category</option>
                                            <option>Homer</option>
                                            <option>Marge</option>
                                            <option>Bart</option>
                                            <option>Lisa</option>
                                            <option>Maggie</option>
                                        </select>
                                        <Input placeholder="Enter Product Category" />
                                        <Input placeholder="Enter Product Quantity" />
                                        <Input placeholder="Enter Product Brand" />
                                        <Input placeholder="Enter Product Size" />
                                        <Input placeholder="Enter Product Material" />
                                        <Input placeholder="Enter Product Description" />
                                    </div>
                                    <div className="form-control mt-6">
                                        <Button className="btn btn-primary" onClick={handleSubmit}>submit</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}