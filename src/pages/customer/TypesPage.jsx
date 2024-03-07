import React, { useEffect, useState } from 'react'
import ProductsContainer from '../../layouts/components/ProductsContainer'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchAllProduct } from '../../store/slices/productSlice'


export default function TypesPage() {

    const dispatch = useDispatch();
    const { products } = useSelector(
        store =>
            store.products) || { products: [], };

    console.log(products)

    useEffect(() => {
        dispatch(fetchAllProduct());
    }, [dispatch]);

    const filter = {
        groupId: 4,
        // Add other filter criteria if needed
    };

    return (
        <div className=' hero '>
            <div className=' m-auto  text-center  '>
                <ProductsContainer
                    title="Types"
                    filter={filter}
                />
            </div>
        </div>
    )
}
