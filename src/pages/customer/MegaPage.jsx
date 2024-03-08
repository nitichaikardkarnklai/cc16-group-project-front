import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAllProduct } from '../../store/slices/productSlice';
import ProductsContainer from '../../layouts/components/ProductsContainer';

const MegaPage = () => {
  const dispatch = useDispatch();
  const { megaId } = useParams();
  const { products } = useSelector(store => store.products) || { products: [] };

  useEffect(() => {
    dispatch(fetchAllProduct());
  }, [dispatch]);

  // กำหนด groupId จาก megaId
  const groupId = parseInt(megaId);

  // กำหนด filter โดยใช้ groupId
  const filter = {
    groupId: groupId,
    // Add other filter criteria if needed
  };

  return (
    <div className='hero'>
      <div className='m-auto text-center'>
        <ProductsContainer title="Mega" filter={filter} />
      </div>
    </div>
  );
};

export default MegaPage;
