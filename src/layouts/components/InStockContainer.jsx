import React, { useEffect } from 'react';
import ProductCard from './ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProduct } from '../../store/slices/productSlice';

export default function InStockContainer() {
  const dispatch = useDispatch();
  const { products } = useSelector(store => store.products) || { products: [] };

  useEffect(() => {
    dispatch(fetchAllProduct());
  }, [dispatch]);

  useEffect(() => {
    console.log(products);
  }, [products]);

  // จัดกลุ่มสินค้าตามวัน Launch Date
  const groupedProducts = products.reduce((acc, product) => {
    const launchDate = new Date(product.launchDate).toLocaleDateString('en-GB');

    if (!acc[launchDate]) {
      acc[launchDate] = [];
    }

    acc[launchDate].push(product);

    return acc;
  }, {});

  return (
    <div className='w-[1235px] mx-auto '>
      <div className='text-6xl text-center font-semibold px-4'> Launch Calendar</div>
      {Object.entries(groupedProducts).map(([launchDate, productsInGroup]) => (
        <div key={launchDate} className='mt-11' >
          <div className='text-3xl font-bold px-4'>In Stock : {launchDate}</div>
          <div className='grid grid-cols-4 gap-8 mx-auto mt-10'>
            {productsInGroup.map((product, index) => (
              <div key={product.id}>
                <ProductCard productObj={product} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
