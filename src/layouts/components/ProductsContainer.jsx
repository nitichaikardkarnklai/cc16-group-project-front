import React from 'react';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';
import FilterProduct from './FilterProduct';

export default function ProductsContainer({ title = 'TITLE' }) {
  const { products } = useSelector(store => store.product) || {};

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-5xl p-12 font-semibold'>{title}</h1>
      <div className='w-full flex justify-end text-right px-10 pr-56'>
        <div className=' flex gap-5'>
          <div>
            <div className="drawer drawer-end">
              <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                <label htmlFor="my-drawer-1" className="drawer-button ">
                  <p className='text-xl underline'> Sort </p>
                </label>
              </div>
              <div className="drawer-side">
                <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 pt-20 w-80 min-h-full bg-base-200 text-base-content">
                  {/* Sidebar content here */}
                  <li ><a>sort Item 1</a></li>
                  <li><a>Sidebar Item 2</a></li>
                  <FilterProduct />
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="drawer drawer-end">
              <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="drawer-button"><p className='text-xl underline'>
                  Filter
                </p>
                </label>
              </div>
              <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 pt-20 w-80 h-[80vh] bg-base-200 text-base-content">
                  {/* Sidebar content here */}
                  <li ><a>filter Item 1</a></li>
                  <li><a>Sidebar Item 2</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-4 gap-8 w-[1235px] mx-auto'>
        {products?.map((el, index) => <ProductCard key={el.id} productObj={el} />)}
      </div>
    </div>
  );
}
