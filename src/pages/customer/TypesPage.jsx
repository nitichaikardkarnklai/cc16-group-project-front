import React, { useEffect, useState } from 'react'
import ProductsContainer from '../../layouts/components/ProductsContainer'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchAllProduct } from '../../store/slices/productSlice'


export default function TypesPage() {

    const { products } = useSelector(store => store.product) || {}
    const dispatch = useDispatch();
    const [filter, setFilter] = useState({})
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState("")
    const [category, setCategory] = useState("")
    const [types, setTypes] = useState([])
    const [type, setType] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [typesList, setTypesList] = useState([])

    useEffect(() => {
        dispatch(fetchAllProduct({
            page,
            search,
            sort,
            category,
            types
        }))
    }, [page, search, sort, category, types])



    return (
        <div className=' hero '>
            <div className=' m-auto  text-center  '>
                <ProductsContainer title="Types"
                    types={typesList}
                    type={type}
                    typesList={typesList}
                    setTypesList={setTypesList}
                    setTypes={setTypes}
                    setCategory={setCategory}
                    setSort={setSort}
                />
                <div className="carousel-item">
                    {typesList.map((type, index) => (
                        <div key={index} className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{type.name}</h2>
                                <p>{type.description}</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}
