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
    console.log(filter);
    const filteredProducts = products.filter(product => {
      // console.log("product", product);
      console.log("filters", filters);
      console.log("filteredlist", filteredList);

      const test = filteredList.length > 0 ? filteredList.reduce((acc, el) => {
        console.log(el[0]);
        for (let i = 0; i < filteredList.length; i++) {
        }
      }, []) : ""


      return (
        (!product.serieId || product.serieId === filters.serieId)
        &&
        (!filters.categories || product.productGroup.categories === filters.categories)
      );
    });

    console.log("filters.serieId", filters.serieId)


    console.log("Filtered Products", filteredProducts);
    setSortedProducts(filteredProducts);
    setFilterOptions(filters);

  };


  useEffect(() => {
    const filteredProducts = products.filter(product => {
      return (
        (!filter.serieId || product.serieId === filter.serieId)
        // &&
        // (!filter.group || product.productGroup.categories === filter.group) // ใช้ชื่อกลุ่มสินค้าที่ถูกต้องตาม Prisma schema
      )
    })
    // console.log(filteredProducts)
    const uniqueSeries = [...new Set(filteredProducts.map(product => product.productSeries.series))];
    setSeriesName(uniqueSeries);
  }, [serieId, products]);




  return (
    <div className='hero'>
      <div className='m-auto text-center'>
        <ProductsContainer
          title={seriesName.length > 0 ? seriesName.join(", ") : 'Series'}
          filter={filter}
          sortedProducts={sortedProducts}
          ProductCards={ProductCard}
          onSortChange={handleSortChange}
          filterType="group"
          onFilterChange={handleFilterChange}
          filterOptions={filterOptions}
        />
      </div>
      {sortedProducts.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>

  );
}

export default SeriesPage;
