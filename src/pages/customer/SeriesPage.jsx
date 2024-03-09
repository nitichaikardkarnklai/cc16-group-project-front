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
  const handleSortChange = (sortedProducts) => {
    setSortedProducts(sortedProducts);
  };


  useEffect(() => {
    dispatch(fetchAllProduct());
  }, [dispatch]);

  const serieId = parseInt(seriesId);

  const filter = {
    serieId: serieId,
  };

  const handleFilterChange = (filters) => {
    const filteredProducts = products.filter(product => product.serieId === filters.serieId);
    setSortedProducts(filteredProducts);
  }

  useEffect(() => {
    const filteredProducts = products.filter(product => product.serieId === serieId);
    setSortedProducts(filteredProducts);

    // Extract unique series names filtered by serieId
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
        />
      </div>
      {sortedProducts.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}

export default SeriesPage;
