import React, { useEffect, useState } from 'react';
import ProductsContainer from '../../layouts/components/ProductsContainer';
import ProductCard from '../../layouts/components/ProductCard';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchAllProduct } from '../../store/slices/productSlice';

export default function SeriesPage() {
  const { products } = useSelector(store => store.product) || {}
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({})
  const [page, setPage] = useState(1)

  return (

    <div className=' hero '>
      <div className=' m-auto  text-center  '>
        <ProductsContainer title={"Series"}
          productCard={ProductCard}
          productType={'series'}
        />
      </div>
    </div>
  );
}
