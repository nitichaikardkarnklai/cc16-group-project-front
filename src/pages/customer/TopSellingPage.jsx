import React from 'react';
import ProductsContainer from '../../layouts/components/ProductsContainer';
import { fetchAllProduct } from '../../store/slices/productSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function TopSellingPage() {
  const dispatch = useDispatch();
  const { products } = useSelector(store => store.products) || { products: [] };

  useEffect(() => {
    dispatch(fetchAllProduct())
  }, [dispatch])

  const filter = {
    isHot: true, // ตัวอย่างการใช้งาน isNew
  };
  return (
    <div>
      <ProductsContainer title="Top Selling" filter={filter} />
    </div>
  )
}
