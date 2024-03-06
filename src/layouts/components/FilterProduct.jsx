import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProduct } from "../../store/slices/productSlice";
import Button from "../../components/Button";

export default function FilterProduct() {
    const dispatch = useDispatch();
    const { products } = useSelector(store => store.product) || {};

    useEffect(() => {
        dispatch(fetchAllProduct());
    }, [])

    return (
        <div  >
            <div className="flex flex-col justify-start text-left items-start">
                <h2 className="text-2xl py-3">Category</h2>
                <div >
                    <div className="form-control">
                        <label className="cursor-pointer">
                            <input type="checkbox" defaultChecked className="checkbox" />
                            <span className="label-text text-xl px-3"> MEGA 100%</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="cursor-pointer">
                            <input type="checkbox" className="checkbox" />
                            <span className="label-text text-xl px-3"> MEGA 400%</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="cursor-pointer">
                            <input type="checkbox" className="checkbox" />
                            <span className="label-text text-xl px-3">MEGA 1000%</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="cursor-pointer">
                            <input type="checkbox" className="checkbox" />
                            <span className="label-text text-xl px-3">Collaborations</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="cursor-pointer">
                            <input type="checkbox" className="checkbox" />
                            <span className="label-text text-xl px-3">Figure</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="cursor-pointer">
                            <input type="checkbox" className="checkbox" />
                            <span className="label-text text-xl px-3">  Action Figure</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="cursor-pointer">
                            <input type="checkbox" className="checkbox" />
                            <span className="label-text text-xl px-3">    Phone  Accessories</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="cursor-pointer">
                            <input type="checkbox" className="checkbox" />
                            <span className="label-text text-xl px-3">      Plush Toys</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="cursor-pointer">
                            <input type="checkbox" className="checkbox" />
                            <span className="label-text text-xl px-3">Bags</span>
                        </label>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="form-control">
                    <Button color="white" bg="darkGray" onClick={() => { dispatch(fetchAllProduct()) }}>Apply</Button>
                </div>
            </div>

        </div>
    )
}