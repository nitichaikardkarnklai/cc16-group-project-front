// src/hooks/useFilteredProducts.js
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchAllProduct } from '../../store/slices/productSlice';

export default function useFilteredProducts(groupId) {
    const dispatch = useDispatch();
    const { products } = useSelector(store => store.products) || { products: [] };
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        dispatch(fetchAllProduct());

        const filterProducts = products.filter(product => product.groupId === groupId);
        setFilteredProducts(filterProducts);
    }, [dispatch, products, groupId]);

    return filteredProducts;
}
