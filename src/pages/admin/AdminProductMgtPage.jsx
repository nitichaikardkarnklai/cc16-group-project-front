import React from 'react';
import ProductCard from '../../layouts/components/ProductCard';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllProduct } from '../../store/slices/productSlice';
import { fetchSeries } from '../../store/slices/seriesSlice';
import { fetchGroups } from '../../store/slices/groupSlice';
import Button from '../../components/Button';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function AdminProductMgtPage() {
  const { products } = useSelector(store => store.products);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchAllProduct());
    dispatch(fetchGroups());
    dispatch(fetchSeries());
  }, [])
  return (
    <div className='flex flex-col gap-8'>
      <Button onClick={() => navigate("/admin/admin-product-add-form")} color="white" bg="red">ADD PRODUCT</Button>
      <div className='flex flex-wrap gap-y-8'>
        {products.map((el, index) => <ProductCard key={el.id} productObj={el} location={location} />)}
      </div>
    </div>
  );
}
