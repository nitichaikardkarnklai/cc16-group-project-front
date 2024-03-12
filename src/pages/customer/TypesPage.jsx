
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
    const [filterOptions, setFilterOptions] = useState({}); // เพิ่ม state เก็บค่าที่เลือกจาก FilterProduct
    const [filteredProducts, setFilteredProducts] = useState([]);

    const handleSortChange = (sortedProducts) => {
        setSortedProducts(sortedProducts);
    };

    useEffect(() => {
        dispatch(fetchAllProduct());
    }, [dispatch]);

    const groupId = parseInt(typesId);

    const filter = {
        groupId: groupId,
        ...filterOptions,
    };
    const handleFilterChange = (filters) => {
        const filteredList = Object.entries(filters).filter(el => el[1] === true)
        const filteredProducts = products.filter(product => {
            return (
                (!product.groupId || product.groupId === filters.groupId)
                &&
                (!filters.series || product.productSeries.series === filters.series)
            )
        })

        console.log(filters)
        console.log(filteredList)
        const filterProducts2 = filteredProducts.filter(product => {
            return (
                filterOptions?.includes(product.productSeries.series)
            )
        })
        setFilteredProducts(filterProducts2);
        setSortedProducts(filteredProducts);

        let filteredListTemp = []
        for (let i = 0; i < filteredList.length; i++) {
            filteredListTemp[i] = filteredList[i][0]
        }
        setFilterOptions(filteredListTemp);

    };


    useEffect(() => {
        const filteredProducts = products.filter(product => product.groupId === groupId);
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
                    products={sortedProducts}
                    filterOptions={filterOptions}
                    filterType="series"
                />
            </div>
            {sortedProducts.map(product => (
                <div key={product.id}>{product.name}</div>
            ))}
        </div>
    );
};

export default TypesPage;
