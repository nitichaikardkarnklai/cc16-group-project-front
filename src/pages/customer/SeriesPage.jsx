import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAllProduct } from '../../store/slices/productSlice';
import ProductsContainer from '../../layouts/components/ProductsContainer';
import ProductCard from '../../layouts/components/ProductCard';

const SeriesPage = () => {
  const dispatch = useDispatch();
  const { seriesId } = useParams();
  const { products } = useSelector(store => store.products) || { products: [] };

  const [sortedProducts, setSortedProducts] = useState([]);
  const [seriesName, setSeriesName] = useState([]);
  const [filterOptions, setFilterOptions] = useState({}); // เพิ่ม state เก็บค่าที่เลือกจาก FilterProduct
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSortChange = (sortedProducts) => {
    setSortedProducts(sortedProducts);
  };

  useEffect(() => {
    dispatch(fetchAllProduct());
  }, [dispatch]);

  const serieId = parseInt(seriesId);

  const filter = {
    serieId: serieId,
    ...filterOptions,
  };

  const handleFilterChange = (filters) => {
    const filteredList = Object.entries(filters).filter(el => el[1] === true)
    const filteredProducts = products.filter(product => {
      return (
        (!product.serieId || product.serieId === filters.serieId)
        &&
        (!filters.categories || product.productGroup.categories === filters.categories)
      );
    });

    const filterProducts2 = filteredProducts.filter(product => {
      return (
        filterOptions?.includes(product.productGroup.categories)
      );
    });
    setFilteredProducts(filterProducts2);
    setSortedProducts(filteredProducts);
    // setFilterOptions(filters);
    let filteredListTemp = []
    for (let i = 0; i < filteredList.length; i++) {
      filteredListTemp[i] = filteredList[i][0]
    }
    setFilterOptions(filteredListTemp);
  };


  useEffect(() => {
    const filteredProducts = products.filter(product => {
      return (
        (!filter.serieId || product.serieId === filter.serieId)
      )
    })
    const uniqueSeries = [...new Set(filteredProducts.map(product => product.productSeries.series))];
    setSeriesName(uniqueSeries);
  }, [serieId, products]);


  return (
    <div className='hero'>
      <div className='m-auto text-center'>
        <ProductsContainer
          title={seriesName.length > 0 ? seriesName.join(", ") : 'Series'}
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

export default SeriesPage;
