import React from 'react';
import ProductsContainer from '../../layouts/components/ProductsContainer';
import { fetchAllProduct } from '../../store/slices/productSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export default function NewArrivalsPage() {
  const dispatch = useDispatch();
  const { products } = useSelector(store => store.products) || { products: [] };

  useEffect(() => {
    dispatch(fetchAllProduct())
  }, [dispatch])

  const filter = {
    isNew: true, // ตัวอย่างการใช้งาน isNew
  };

  return (
    <div className=' hero '>
      <div className=' m-auto  text-center  '>
        <ProductsContainer title="New Arrivals" filter={filter} />

      </div>
    </div>
  )
}
