import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProduct } from "../../store/slices/productSlice";

export default function FilterProduct() {
    const dispatch = useDispatch();
    const { products } = useSelector(store => store.product) || {};

    useEffect(() => {
        dispatch(fetchAllProduct());
    }, [])

    return (
        <div>
            <div className="flex flex-col items-start">
                <h2 className="text-2xl py-3">Category</h2>
                <div >
                    <div className="form-control">
                        <label className="cursor-pointer">
                            <input type="checkbox" defaultChecked className="checkbox" />
                            <span className="label-text text-xl px-3">Blind Box</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="cursor-pointer">
                            <input type="checkbox" className="checkbox" />
                            <span className="label-text text-xl px-3">Blind Box</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="cursor-pointer">
                            <input type="checkbox" className="checkbox" />
                            <span className="label-text text-xl px-3">Blind Box</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="cursor-pointer">
                            <input type="checkbox" className="checkbox" />
                            <span className="label-text text-xl px-3">Blind Box</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="cursor-pointer">
                            <input type="checkbox" className="checkbox" />
                            <span className="label-text text-xl px-3">Blind Box</span>
                        </label>
                    </div>
                </div>
            </div>

        </div>
    )
}