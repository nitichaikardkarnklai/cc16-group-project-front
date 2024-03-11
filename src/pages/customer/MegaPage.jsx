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
  const [filterOptions, setFilterOptions] = useState({}); // เพิ่ม state เก็บค่าที่เลือกจาก FilterProduct


  const handleSortChange = (sortedProducts) => {
    setSortedProducts(sortedProducts);
  };

  // useEffect(() => {
  //   dispatch(fetchAllProduct());
  // }, [dispatch]);

  const groupId = parseInt(megaId);

  const filter = {
    groupId: groupId,
    ...filterOptions,
  };

  console.log(products);

  const handleFilterChange = (filters) => {
    const filter = {
      groupId: groupId,
      ...filters
    };
    const filteredProducts = products.filter(product => product.groupId === filters.groupId);
    setSortedProducts(filteredProducts); // This might cause re-renders leading to infinite loop
    setFilterOptions(filters);
  };

  useEffect(() => {
    const filteredProducts = products.filter(product => {
      return (
        (!filter.groupId || product.groupId === filter.groupId) &&
        (!filter.series || product.productSeries.series === filter.series)
      );
    });
    const uniqueCategories = [...new Set(filteredProducts.map(product => product.productGroup.categories))];
    setMegaCategories(uniqueCategories);
  }, [groupId,]); // This might cause re-renders leading to infinite loop


  return (
    <div className='hero'>
      <div className='m-auto text-center'>
        <ProductsContainer
          title={`${megaCategories.join(', ')}` || 'All Products'}
          filter={filter}
          ProductCards={ProductCard}
          onSortChange={handleSortChange}
          filterType="group"
          onFilterChange={handleFilterChange} // ส่ง callback function ไปยัง ProductsContainer

        />
      </div>
      {sortedProducts.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
};

export default MegaPage;
