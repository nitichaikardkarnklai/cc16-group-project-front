import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAllProduct } from '../../store/slices/productSlice';
import ProductsContainer from '../../layouts/components/ProductsContainer';
import ProductCard from '../../layouts/components/ProductCard';

const MegaPage = () => {
  const dispatch = useDispatch();
  const { megaId } = useParams();
  const { products } = useSelector(store => store.products) || { products: [] };

  const [sortedProducts, setSortedProducts] = useState([]);
  const [megaCategories, setMegaCategories] = useState([]);

  const handleSortChange = (sortedProducts) => {
    setSortedProducts(sortedProducts);
  };

  useEffect(() => {
    dispatch(fetchAllProduct());
  }, [dispatch]);

  const groupId = parseInt(megaId);

  const filter = {
    groupId: groupId,
  };

  const handleFilterChange = (filters) => {
    // Apply the filters to the products
    const filteredProducts = products.filter(product => product.groupId === filters.groupId);
    setSortedProducts(filteredProducts);
  };

  // Fetch products based on megaId
  useEffect(() => {
    const filteredProducts = products.filter(product => product.groupId === groupId);
    setSortedProducts(filteredProducts);

    // Extract unique categories from filtered products
    const uniqueCategories = [...new Set(filteredProducts.map(product => product.productGroup.categories))];
    setMegaCategories(uniqueCategories);
  }, [groupId, products]);

  return (
    <div className='hero'>
      <div className='m-auto text-center'>
        <ProductsContainer
          title={`${megaCategories.join(', ')}` || 'All Products'}
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

export default MegaPage;
