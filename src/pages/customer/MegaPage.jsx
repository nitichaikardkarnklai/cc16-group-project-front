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

  return (
    <div className='hero'>
      <div className='m-auto text-center'>
        <ProductsContainer title="Mega" filter={filter} ProductCards={ProductCard} onSortChange={handleSortChange} />
      </div>
      {sortedProducts.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
};

export default MegaPage;
