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
  const [accCategories, setAccCategories] = useState([]);

  const handleSortChange = (sortedProducts) => {
    setSortedProducts(sortedProducts);
  };


  useEffect(() => {
    dispatch(fetchAllProduct());
  }, [dispatch]);

  // กำหนด groupId จาก megaId
  const groupId = parseInt(accId);

  // กำหนด filter โดยใช้ groupId
  const filter = {
    groupId: groupId,
    // Add other filter criteria if needed
  };

  const handleFilterChange = (filters) => {
    // Apply the filters to the products
    const filteredProducts = products.filter(product => product.groupId === filters.groupId);
    setSortedProducts(filteredProducts);
  };

  useEffect(() => {
    const filteredProducts = products.filter(product => product.groupId === filter.groupId);
    setSortedProducts(filteredProducts);

    const uniqueCategories = [...new Set(filteredProducts.map(product => product.productGroup.categories))];
    setAccCategories(uniqueCategories);
  }, [groupId, products]);

  console.log(products)


  return (
    <div className='hero'>
      <div className='m-auto text-center'>
        <ProductsContainer
          title={accCategories.length > 0 ? accCategories.join(', ') : 'All Products'}
          filter={filter}
          ProductCards={ProductCard}
          onSortChange={handleSortChange}
        />
      </div>
      {sortedProducts.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
};

export default AccessoriesPage;
