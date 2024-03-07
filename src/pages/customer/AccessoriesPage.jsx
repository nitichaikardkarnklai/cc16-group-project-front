import React, { useEffect, useState } from 'react';
import ProductsContainer from '../../layouts/components/ProductsContainer';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../layouts/components/ProductCard';
import { fetchAllProduct } from '../../store/slices/productSlice';

export default function MegaPage() {
  const dispatch = useDispatch();
  const { products } = useSelector(
    store =>
      store.products) || { products: [], };

  console.log(products)

  useEffect(() => {
    dispatch(fetchAllProduct());
  }, [dispatch]);

  const filter = {
    groupId: 7,
    // Add other filter criteria if needed
  };

  return (
    <div className='hero'>
      <div className='m-auto text-center'>
        {/* Pass the filter object to ProductsContainer */}
        <ProductsContainer
          title="Accessories"
          filter={filter}
        />
      </div>
    </div>
  )
}
