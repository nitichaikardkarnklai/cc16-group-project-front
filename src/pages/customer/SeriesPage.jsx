import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAllProduct } from '../../store/slices/productSlice';
import ProductsContainer from '../../layouts/components/ProductsContainer';

const SeriesPage = () => {
  const dispatch = useDispatch();
  const { seriesId } = useParams();
  const { products } = useSelector(store => store.products) || { products: [] };

  useEffect(() => {
    dispatch(fetchAllProduct());
  }, [dispatch]);

  const
    serieId = parseInt(seriesId);

  const filter = {
    serieId: serieId,
  };

  console.log("seriesId: ", seriesId)
  console.log("serieId: ", serieId)
  console.log("products: ", products)

  return (

    <div className=' hero '>
      <div className=' m-auto  text-center  '>
        <ProductsContainer title="Series" filter={filter} />
      </div>
    </div>
  );
}

export default SeriesPage