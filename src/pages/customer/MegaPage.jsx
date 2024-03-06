import React, { useEffect, useState } from 'react';
import ProductsContainer from '../../layouts/components/ProductsContainer';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../layouts/components/ProductCard';


export default function MegaPage() {
  const [filter, setFilter] = useState({})
  const dispatch = useDispatch()
  const { groups } = useSelector(store => store.group) || {}
  const { products } = useSelector(store => store.product) || {}




  return (
    <div className=' hero '>
      <div className=' m-auto  text-center  '>
        <ProductsContainer
          title={"Mega"}
          productCard={ProductCard}
          productType={'mega'}
          filter={filter}
          setFilter={setFilter}
          products={products}
        />
      </div>
    </div>
  )
}
