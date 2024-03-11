import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProduct } from "../../store/slices/productSlice";
import Button from "../../components/Button";


export default function FilterProduct({ onFilterChange, filterType, filterOptions }) {
    const dispatch = useDispatch();
    const { products } = useSelector(store => store.products) || { products: [] };
    const [selectedFilters, setSelectedFilters] = useState({});
    const [options, setOptions] = useState([]);


    useEffect(() => {
        dispatch(fetchAllProduct());
    }, []);

    useEffect(() => {
        const uniqueOptions = [...new Set(products.map(product => {
            if (filterType === 'series') {
                return product.productSeries.series;
            } else if (filterType === 'group') {
                return product.productGroup.categories;
            }
        }))];
        setOptions(uniqueOptions.filter(option => option));
    }, [products, filterType]);


    const handleCheckboxChange = (option) => {
        setSelectedFilters(prevFilters => ({
            ...prevFilters,
            [option]: !prevFilters[option],
        }));
    };

    useEffect(() => {
        onFilterChange(selectedFilters);
    }, [selectedFilters, onFilterChange]);

    const handleApplyFilters = () => {
        onFilterChange(selectedFilters);
    };



    return (
        <div>
            <div className="flex flex-col justify-start text-left items-start">
                <h2 className="text-2xl py-3">{filterType === 'series' ? 'Series' : 'Categories'}</h2>
                <div>
                    {options.map((option, index) => (
                        <div className="form-control" key={index}>
                            <label className="cursor-pointer">
                                <input
                                    type="checkbox"
                                    defaultChecked={selectedFilters[option]}
                                    className="checkbox"
                                    onChange={() => handleCheckboxChange(option)}
                                />
                                <span className="label-text text-xl px-3">{option}</span>
                            </label>
                        </div>
                    ))}
                </div>
                <div className="divider"></div>
                <div className="form-control">
                    <Button color="white" bg="darkGray" onClick={handleApplyFilters}>Apply</Button>
                </div>
            </div>
        </div>
    );
}