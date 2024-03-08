
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAllProduct } from '../../store/slices/productSlice';
import ProductsContainer from '../../layouts/components/ProductsContainer';

const AccessoriesPage = () => {
  const dispatch = useDispatch();
  const { accId } = useParams(); // รับ megaId จาก URL
  const { products } = useSelector(store => store.products) || { products: [] };

  useEffect(() => {
    dispatch(fetchAllProduct());
  }, [dispatch]);

  // กำหนด groupId จาก megaId
  const groupId = parseInt(accId) + 6;

  // กำหนด filter โดยใช้ groupId
  const filter = {
    groupId: groupId,
    // Add other filter criteria if needed
  };



  return (
    <div className='hero'>
      <div className='m-auto text-center'>
        <ProductsContainer title="Accessories" filter={filter} />
      </div>
    </div>
  );
};

export default AccessoriesPage;
