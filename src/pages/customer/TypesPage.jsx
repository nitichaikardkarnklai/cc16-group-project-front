
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAllProduct } from '../../store/slices/productSlice';
import ProductsContainer from '../../layouts/components/ProductsContainer';
import ProductCard from '../../layouts/components/ProductCard';

const TypesPage = () => {
    const dispatch = useDispatch();
    const { typesId } = useParams(); // รับ megaId จาก URL
    const { products } = useSelector(store => store.products) || { products: [] };

    const [sortedProducts, setSortedProducts] = useState([]);
    const [typesCategories, setTypesCategories] = useState([]);

    const handleSortChange = (sortedProducts) => {
        setSortedProducts(sortedProducts);
    };

    useEffect(() => {
        dispatch(fetchAllProduct());
    }, [dispatch]);

    const groupId = parseInt(typesId);

    const filter = {
        groupId: groupId,
    };
    const handleFilterChange = (filters) => {
        // Apply the filters to the products
        const filteredProducts = products.filter(product => product.groupId === filters.groupId);
        setSortedProducts(filteredProducts);
    };

    useEffect(() => {
        const filteredProducts = products.filter(product => product.groupId === groupId);
        setSortedProducts(filteredProducts);

        const uniqueCategories = [...new Set(filteredProducts.map(product => product.productGroup.categories))];
        setTypesCategories(uniqueCategories);
    }, [groupId, products]);


    return (
        <div className='hero'>
            <div className='m-auto text-center'>
                <ProductsContainer
                    title={typesCategories.length > 0 ? typesCategories.join(', ') : 'All Products'}
                    filter={filter}
                    ProductCards={ProductCard}
                    onSortChange={handleSortChange}
                    onFilterChange={handleFilterChange}
                />
            </div>
            {sortedProducts.map(product => (
                <div key={product.id}>{product.name}</div>
            ))}
        </div>
    );
};

export default TypesPage;
