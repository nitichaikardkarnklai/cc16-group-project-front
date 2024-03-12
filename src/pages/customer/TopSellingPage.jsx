import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProduct } from '../../store/slices/productSlice';
import ProductsContainer from '../../layouts/components/ProductsContainer';
import ProductCard from '../../layouts/components/ProductCard';

export default function TopSellingPage() {
  const dispatch = useDispatch();
  const { products } = useSelector(store => store.products) || { products: [] };

  useEffect(() => {
    dispatch(fetchAllProduct())
  }, [dispatch])

  const [sortedProducts, setSortedProducts] = useState([]);
  const [topSellingCategories, setTopSellingCategories] = useState([]);
  const [filterOptions, setFilterOptions] = useState({});
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSortChange = (sortedProducts) => {
    setSortedProducts(sortedProducts);
  };

  const handleFilterChange = (filters) => {
    const filteredList = Object.entries(filters).filter(el => el[1] === true)
    const filteredProducts = products.filter(product => {
      return (
        (!product.groupId || product.groupId === filters.groupId)
        &&
        (!filters.series || product.productSeries.series === filters.series)
      )
    })

    console.log(filters)
    console.log(filteredList)
    const filterProducts2 = filteredProducts.filter(product => {
      return (
        filterOptions?.includes(product.productSeries.series)
      )
    })
    setFilteredProducts(filterProducts2);
    setSortedProducts(filteredProducts);

    let filteredListTemp = []
    for (let i = 0; i < filteredList.length; i++) {
      filteredListTemp[i] = filteredList[i][0]
    }
    setFilterOptions(filteredListTemp);

  };

  useEffect(() => {
    const uniqueCategories = [...new Set(products.map(product => product.productGroup.categories))];
    setTopSellingCategories(uniqueCategories);
  }, [products]);

  const filter = {
    isHot: true,
    ...filterOptions,
  };

  return (
    <div className='hero'>
      <div className='m-auto text-center'>
        <ProductsContainer
          title={'Top Selling '}
          filter={filter}
          ProductCards={ProductCard}
          onSortChange={handleSortChange}
          onFilterChange={handleFilterChange}
          sortedProducts={sortedProducts}
          filterOptions={filterOptions}
          filterType="group"
        />
      </div>
      {sortedProducts.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}
