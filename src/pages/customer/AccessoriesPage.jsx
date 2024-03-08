import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAllProduct } from '../../store/slices/productSlice';
import ProductsContainer from '../../layouts/components/ProductsContainer';
import ProductCard from '../../layouts/components/ProductCard';

const AccessoriesPage = () => {
  const dispatch = useDispatch();
  const { accId } = useParams(); // รับ megaId จาก URL
  const { products } = useSelector(store => store.products) || { products: [] };

  const [sortedProducts, setSortedProducts] = useState([]);

  const handleSortChange = (sortedProducts) => {
    setSortedProducts(sortedProducts);
  };


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
        <ProductsContainer title="Accessories" filter={filter} ProductCards={ProductCard} onSortChange={handleSortChange} />
      </div>
      {sortedProducts.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
};

export default AccessoriesPage;
