import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { useSelector, useDispatch } from 'react-redux';
import FilterProduct from './FilterProduct';
import { fetchAllProduct } from '../../store/slices/productSlice';
import { fetchGroups } from '../../store/slices/groupSlice';
import { fetchSeries } from '../../store/slices/seriesSlice';


export default function ProductsContainer({ title = 'TITLE' }) {
  const dispatch = useDispatch();
  const { products } = useSelector(
    store =>
      store.products) || { products: [], };
  const { groups } = useSelector(store => store.group) || {};
  const { series } = useSelector(store => store.series) || {};
  const [filter, setFilter] = useState({})


  useEffect(() => {
    dispatch(fetchAllProduct(
      { ...filter, group: 'MEGA' }
    ));
    dispatch(fetchGroups({ ...filter, group: ' ' }));
    dispatch(fetchSeries());
  }, [dispatch]);

  useEffect(() => {
    setFilter({ ...filter, group: 'mega' })
  }, [groups]);



  console.log(filter)
  console.log("product", products)
  console.log(series)
  console.log(groups)

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-5xl p-12 font-semibold'>{title}</h1>
      <div className='w-full flex justify-end text-right pr-20'>
        <div className=' flex gap-10'>
          <div>
            <div className="drawer drawer-end">
              <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                <label htmlFor="my-drawer-1" className="drawer-button ">
                  <p className='text-xl underline'> Sort By </p>
                </label>
              </div>
              <div className="drawer-side ">
                <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 pt-20 w-80 min-h-full bg-base-200 text-base-content">
                  <div className="flex flex-col justify-start text-left items-start">
                    <h2 className="text-2xl pt-3">Sort By</h2>
                    <div className="divider"></div>
                    <div className="form-control">
                      <label className="cursor-pointer">
                        <input type="radio" name="radio-1" className="radio" />
                        <span className="label-text text-xl px-3"> Latest arrival </span>
                      </label>
                      <label className="cursor-pointer">
                        <input type="radio" name="radio-1" className="radio" />
                        <span className="label-text text-xl px-3"> Best selling</span>
                      </label>
                      <label className="cursor-pointer">
                        <input type="radio" name="radio-1" className="radio" />
                        <span className="label-text text-xl px-3">Price: low to high </span>
                      </label>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="drawer drawer-end">
              <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                <label htmlFor="my-drawer-2" className="drawer-button">
                  <p className='text-xl underline'>
                    Filter
                  </p>
                </label>
              </div>
              <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 pt-20 w-80 min-h-full bg-base-200 text-base-content">
                  <div className="flex flex-col justify-start text-left items-start">
                    <h2 className="text-2xl pt-3">Filter</h2>
                    <div className="divider"></div>
                  </div>
                  <FilterProduct />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-10">

        <div className='grid grid-cols-4 gap-8 w-[1235px] mx-auto'>
          {products?.map((el, index) => <ProductCard key={el.id} productObj={el} />)}
        </div>
      </div>
    </div >
  );
}
