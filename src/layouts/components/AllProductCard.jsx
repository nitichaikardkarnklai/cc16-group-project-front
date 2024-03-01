import React from 'react';
import ProductsContainer from './ProductsContainer';

export default function AllProductCard() {
  return (
    <div>
      <div>
        <ProductsContainer title="All Products" />
        <div className="join">
          <input className="join-item btn btn-square" type="radio" name="options" aria-label="1" checked />
          <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
          <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
          <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
        </div>
      </div>
    </div>
  );
}
