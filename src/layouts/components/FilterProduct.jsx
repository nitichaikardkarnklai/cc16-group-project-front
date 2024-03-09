import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProduct } from "../../store/slices/productSlice";
import Button from "../../components/Button";

export default function FilterProduct({ onFilterChange }) {
    const dispatch = useDispatch();
    const { products } = useSelector((store) => store.product) || {};
    const [selectedFilters, setSelectedFilters] = useState({
        mega100: false,
        mega400: false,
        mega1000: false,
        collaborations: false,
        figure: false,
        actionFigure: false,
        phoneAccessories: false,
        plushToys: false,
        bags: false,
    });

    useEffect(() => {
        dispatch(fetchAllProduct());
    }, []);

    const handleCheckboxChange = (filterName) => {
        setSelectedFilters((prevFilters) => ({
            ...prevFilters,
            [filterName]: !prevFilters[filterName],
        }));
    };

    useEffect(() => {
        onFilterChange(selectedFilters);
    }, [selectedFilters, onFilterChange]);

    const checkboxes = [
        { name: 'mega100', label: 'MEGA 100%' },
        { name: 'mega400', label: 'MEGA 400%' },
        { name: 'mega1000', label: 'MEGA 1000%' },
        { name: 'collaborations', label: 'Collaborations' },
        { name: 'figure', label: 'Figure' },
        { name: 'actionFigure', label: 'Action Figure' },
        { name: 'phoneAccessories', label: 'Phone Accessories' },
        { name: 'plushToys', label: 'Plush Toys' },
        { name: 'bags', label: 'Bags' },
    ];

    return (
        <div>
            <div className="flex flex-col justify-start text-left items-start">
                <h2 className="text-2xl py-3">Category</h2>
                <div>
                    {checkboxes.map((checkbox) => (
                        <div className="form-control" key={checkbox.name}>
                            <label className="cursor-pointer">
                                <input
                                    type="checkbox"
                                    defaultChecked={selectedFilters[checkbox.name]}
                                    className="checkbox"
                                    onChange={() => handleCheckboxChange(checkbox.name)}
                                />
                                <span className="label-text text-xl px-3">{checkbox.label}</span>
                            </label>
                        </div>
                    ))}
                </div>
                <div className="divider"></div>
                <div className="form-control">
                    <Button color="white" bg="darkGray" onClick={() => { dispatch(fetchAllProduct()) }}>Apply</Button>
                </div>
            </div>
        </div>
    );
}
