import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { useSelector, useDispatch } from 'react-redux';
import FilterProduct from './FilterProduct';
import { fetchAllProduct } from '../../store/slices/productSlice';

export default function ProductsContainer({ title = 'TITLE', ProductCards = ProductCard, onFilterChange, filter, onSortChange, filterType, sortedProducts, filterOptions, ...props }) {

  const dispatch = useDispatch();
  const { products } = useSelector(store => store.products) || { products: [] };
  const [selectedFilters, setSelectedFilters] = useState({});
  const [selectedProducts, setSelectedProducts] = useState(products);

  useEffect(() => {
    dispatch(fetchAllProduct());
  }, [dispatch]);

  useEffect(() => {
    setSelectedProducts(products);
  }, [products]);

  const applySortBy = (criteria) => {
    let sortedProducts = [...products];
    if (criteria === 'latest') {
      sortedProducts.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (criteria === 'price_low_to_high') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (criteria === 'price_high_to_low') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setSelectedProducts(sortedProducts);
    onSortChange(sortedProducts);
  };

  const handleFilterChange = (filters) => {
    setSelectedFilters(filters);
  };

  useEffect(() => {
    onFilterChange(selectedFilters);
  }, [selectedFilters]);


  const filteredProducts = selectedProducts.filter(product => {
    return (
      (!filter.groupId || product.groupId === filter.groupId) &&
      (!filter.serieId || product.serieId === filter.serieId) &&
      (!filter.isHot || product.isHot) &&
      (!filter.isNew || product.isNew) &&
      // (!filterOptions.length || filterOptions.includes(product.productGroup.categories))
      // &&
      (!filterOptions.length || filterOptions.includes(product.productSeries.series))
    );
  });




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
              <div className="drawer-side" style={{ zIndex: 9999 }}>
                <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 pt-20 w-80 min-h-full bg-base-200 text-base-content">
                  <div className="flex flex-col justify-start text-left items-start">
                    <h2 className="text-2xl pt-3">Sort By</h2>
                    <div className="divider"></div>
                    <div className="form-control">
                      {[
                        { value: 'latest', label: 'Latest arrival' },
                        { value: 'price_low_to_high', label: 'Price: low to high' },
                        { value: 'price_high_to_low', label: 'Price: high to low' }
                      ].map(option => (
                        <label key={option.value} className="cursor-pointer">
                          <input type="radio" name="radio-1" className="radio" onChange={() => applySortBy(option.value)} />
                          <span className="label-text text-xl px-3">{option.label}</span>
                        </label>
                      ))}
                    </div>

                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="drawer drawer-end " >
              <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                <label htmlFor="my-drawer-2" className="drawer-button">
                  <p className='text-xl underline'>
                    Filter
                  </p>
                </label>
              </div>
              <div className="drawer-side" style={{ zIndex: 999 }}>
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 pt-20 w-80 min-h-full bg-base-200 text-base-content">
                  <div className="flex flex-col justify-start text-left items-start">
                    <h2 className="text-2xl pt-3">Filter</h2>
                    <div className="divider"></div>
                  </div>
                  <FilterProduct
                    onFilterChange={handleFilterChange}
                    filterType={filterType}
                    filterOptions={filterOptions}
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-10">
        <div className='grid grid-cols-4 gap-8 w-[1235px] mx-auto' style={{ zIndex: 9 }}>
          {filteredProducts.map((el, index) =>
            <ProductCards key={el.id} productObj={el}
            />)}
        </div>
      </div>
    </div>
  );
}
