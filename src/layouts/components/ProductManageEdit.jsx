import React, { useState } from 'react';
import BackIcon from '../../assets/icon/BackIcon';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DummyImageSmall from './DummyImageSmall';
import DummyImageLarge from './DummyImageLarge';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createProduct, fetchAllProduct, fetchProductById } from '../../store/slices/productSlice';
import { fetchGroups } from '../../store/slices/groupSlice';
import { fetchSeries } from '../../store/slices/seriesSlice';
import { onChangeProduct } from '../../store/slices/productSlice';
import { useRef } from 'react';
import ProductEdit from './ProductEdit';
import { toast } from 'react-toastify';
import Spinner from '../../components/Spinner';
import { validateAddProduct } from '../../features/product/validations/validate-product';
import Button from '../../components/Button';
import * as apiProduct from "../../api/product"

export default function ProductManageEdit() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, product } = useSelector(store => store.products);
    const [loadingUpdateProduct, setLoadingUpdateProduct] = useState(false);
    const [onFetch, setOnfetch] = useState(false);
    const coverProductEl = useRef(null);
    const poster1El = useRef(null);
    const poster2El = useRef(null);
    const poster3El = useRef(null);
    const poster4El = useRef(null);
    const poster5El = useRef(null);
    const imageProductEl = useRef(null);
    const [images, setImages] = useState({
        coverProduct: null,
        poster1: null,
        poster2: null,
        poster3: null,
        poster4: null,
        poster5: null,
        imageProduct: []
    });
    const productId = +localStorage.getItem('productId');

    useEffect(() => {
        dispatch(fetchAllProduct());
        dispatch(fetchGroups());
        dispatch(fetchSeries());

        dispatch(fetchProductById(productId));
        // setImages(c => { return { ...c, coverProduct: product.productCover?.[0]?.cover } })
    }, [images, onFetch])

    const handleSubmitFormEditProduct = async e => {
        e.preventDefault();
        if (confirm("Are you sure to update this product details?")) {
            try {
                setLoadingUpdateProduct(true);
                const { id,
                    createdAt,
                    isNew,
                    isHot,
                    isSoldOut,
                    isActive,
                    productSeries,
                    productGroup,
                    productCover,
                    productImages,
                    productPosters,
                    ...tempProduct } = product;
                const validationError = validateAddProduct(tempProduct);
                tempProduct.launchDate = new Date(tempProduct.launchDate);
                console.log(tempProduct);
                await apiProduct.updateProductDetails(tempProduct, product.id);
                toast.success("update product details success");
            } catch (err) {
                // console.log(err.details)
                if (err.details[0]) {
                    toast.error(err?.details[0]?.message);
                } else if (err.response) {
                    toast.error(err.response?.data.message);
                }
                else {
                    toast.error(err);
                }
            } finally {
                setLoadingUpdateProduct(false);
                setOnfetch(c => !c);
            }
        }
    }

    const onChangeAndUpdateImage = async (e, imageKey) => {
        if (confirm("Are you sure to update this image?")) {
            try {
                setLoadingUpdateProduct(true);
                const formData = new FormData();
                formData.append(imageKey, e.target.files[0])
                await apiProduct.updateCoverImage(formData, product.productCover?.[0]?.id)
                toast.success("cover product is successfully changed")
            } catch (error) {
                console.log(error.response.data);
                toast.error(error.response?.data.message);
            } finally {
                setLoadingUpdateProduct(false);
                setOnfetch(c => !c);
            }
        }
    }

    if (loading || loadingUpdateProduct) {
        return (
            <div>
                <div>IN-PROCESS ...</div>
                <Spinner />
            </div>
        )
    }

    return (
        <form className='flex gap-4' onSubmit={(e) => handleSubmitFormEditProduct(e)}>
            <button type="button" className="flex items-start" onClick={() => { localStorage.removeItem('productId'); navigate(-1); }}><BackIcon /></button>
            <div className="hero h-full ">
                <div className="flex gap-8">
                    <div className="w-full lg:w-1/2">
                        <div className="lg:flex lg:justify-start gap-1 mb-4">
                            <div className="lg:order-2 flex flex-col justify-center w-[40rem]">
                                <input
                                    type="file"
                                    className="hidden"
                                    ref={coverProductEl}
                                    onChange={e => onChangeAndUpdateImage(e, "image")}
                                />
                                {product.productCover?.[0]?.cover ?
                                    <div
                                        className="relative flex justify-center"
                                        onClick={() => { coverProductEl.current.click() }}
                                        role="button"
                                    >
                                        <img src={product.productCover?.[0]?.cover} alt="coverProduct" />
                                    </div>
                                    :
                                    <button
                                        type="button"
                                        onClick={() => coverProductEl.current.click()}
                                    >
                                        <DummyImageLarge />
                                    </button>}
                            </div>
                            <div className="w-1/4">
                                <div className="flex flex-row items-start lg:flex-col">
                                    <div>(MAX 4)</div>
                                    <input
                                        type="file"
                                        multiple
                                        className="hidden"
                                        ref={imageProductEl}
                                        onChange={e => {
                                            if (e.target.files[0]) {
                                                // console.log([...e.target.files]);
                                                if (e.target.files.length > 4) {
                                                    toast.error("the maximum images are 4")
                                                } else {
                                                    setImages(c => { return { ...c, imageProduct: [...e.target.files] } })
                                                }
                                            }
                                        }}
                                    />
                                    <button
                                        type="button"
                                        className="flex-0 aspect-square mb-3 h-20 overflow-hidden text-center"
                                        onClick={() => imageProductEl.current.click()}
                                    >
                                        {/* <img className="h-full w-full object-cover" src={"#"} alt="#" /> */}
                                        <DummyImageSmall />
                                    </button>
                                    {images.imageProduct.map((el, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="relative flex aspect-square mb-3 h-20 overflow-hidden"
                                                onClick={() => { imageProductEl.current.click() }}
                                                role="button"
                                            >
                                                <img key={index} className="h-full w-full" src={URL.createObjectURL(el)} alt="imageProduct" />
                                                <button className="absolute top-2 right-2 font-black text-gray-400 h-6 w-6"
                                                    onClick={e => {
                                                        e.stopPropagation();
                                                        setImages(c => {
                                                            const imageProductTemp = [...c.imageProduct];
                                                            imageProductTemp.splice(index, 1)
                                                            return { ...c, imageProduct: imageProductTemp }
                                                        });
                                                        imageProductEl.current.value = "";
                                                    }}
                                                >&#10005;</button>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            {/* ============= POSTER1 ============ */}
                            <input
                                type="file"
                                className="hidden"
                                ref={poster1El}
                                onChange={e => {
                                    if (e.target.files[0]) {
                                        setImages(c => { return { ...c, poster1: e.target.files[0] } })
                                    }
                                }}
                            />
                            {images.poster1 ?
                                <div
                                    className="relative flex justify-center"
                                    onClick={() => { poster1El.current.click() }}
                                    role="button"
                                >
                                    <img src={URL.createObjectURL(images.poster1)} alt="poster1" />
                                    <button type="button" className="absolute top-2 right-2 font-black text-gray-400 h-6 w-6"
                                        onClick={e => {
                                            e.stopPropagation();
                                            setImages(c => { return { ...c, poster1: null } });
                                            poster1El.current.value = "";
                                        }}
                                    >&#10005;</button>
                                </div>
                                :
                                <button
                                    type="button"
                                    onClick={() => poster1El.current.click()}
                                >
                                    <DummyImageLarge />
                                </button>}
                            {/* ============= POSTER2 ============ */}
                            <input
                                type="file"
                                className="hidden"
                                ref={poster2El}
                                onChange={e => {
                                    if (e.target.files[0]) {
                                        setImages(c => { return { ...c, poster2: e.target.files[0] } })
                                    }
                                }}
                            />
                            {images.poster2 ?
                                <div
                                    className="relative flex justify-center"
                                    onClick={() => { poster2El.current.click() }}
                                    role="button"
                                >
                                    <img src={URL.createObjectURL(images.poster2)} alt="poster2" />
                                    <button type="button" className="absolute top-2 right-2 font-black text-gray-400 h-6 w-6"
                                        onClick={e => {
                                            e.stopPropagation();
                                            setImages(c => { return { ...c, poster2: null } });
                                            poster2El.current.value = "";
                                        }}
                                    >&#10005;</button>
                                </div>
                                :
                                <button
                                    type="button"
                                    onClick={() => poster2El.current.click()}
                                >
                                    <DummyImageLarge />
                                </button>}
                            {/* ============= POSTER3 ============ */}
                            <input
                                type="file"
                                className="hidden"
                                ref={poster3El}
                                onChange={e => {
                                    if (e.target.files[0]) {
                                        setImages(c => { return { ...c, poster3: e.target.files[0] } })
                                    }
                                }}
                            />
                            {images.poster3 ?
                                <div
                                    className="relative flex justify-center"
                                    onClick={() => { poster3El.current.click() }}
                                    role="button"
                                >
                                    <img src={URL.createObjectURL(images.poster3)} alt="poster3" />
                                    <button type="button" className="absolute top-2 right-2 font-black text-gray-400 h-6 w-6"
                                        onClick={e => {
                                            e.stopPropagation();
                                            setImages(c => { return { ...c, poster3: null } });
                                            poster3El.current.value = "";
                                        }}
                                    >&#10005;</button>
                                </div>
                                :
                                <button
                                    type="button"
                                    onClick={() => poster3El.current.click()}
                                >
                                    <DummyImageLarge />
                                </button>}
                            {/* ============= POSTER4 ============ */}
                            <input
                                type="file"
                                className="hidden"
                                ref={poster4El}
                                onChange={e => {
                                    if (e.target.files[0]) {
                                        setImages(c => { return { ...c, poster4: e.target.files[0] } })
                                    }
                                }}
                            />
                            {images.poster4 ?
                                <div
                                    className="relative flex justify-center"
                                    onClick={() => { poster4El.current.click() }}
                                    role="button"
                                >
                                    <img src={URL.createObjectURL(images.poster4)} alt="poster4" />
                                    <button type="button" className="absolute top-2 right-2 font-black text-gray-400 h-6 w-6"
                                        onClick={e => {
                                            e.stopPropagation();
                                            setImages(c => { return { ...c, poster4: null } });
                                            poster4El.current.value = "";
                                        }}
                                    >&#10005;</button>
                                </div>
                                :
                                <button
                                    type="button"
                                    onClick={() => poster4El.current.click()}
                                >
                                    <DummyImageLarge />
                                </button>}
                            {/* ============= POSTER5 ============ */}
                            <input
                                type="file"
                                className="hidden"
                                ref={poster5El}
                                onChange={e => {
                                    if (e.target.files[0]) {
                                        setImages(c => { return { ...c, poster5: e.target.files[0] } })
                                    }
                                }}
                            />
                            {images.poster5 ?
                                <div
                                    className="relative flex justify-center"
                                    onClick={() => { poster5El.current.click() }}
                                    role="button"
                                >
                                    <img src={URL.createObjectURL(images.poster5)} alt="poster4" />
                                    <button type="button" className="absolute top-2 right-2 font-black text-gray-400 h-6 w-6"
                                        onClick={e => {
                                            e.stopPropagation();
                                            setImages(c => { return { ...c, poster5: null } });
                                            poster5El.current.value = "";
                                        }}
                                    >&#10005;</button>
                                </div>
                                :
                                <button
                                    type="button"
                                    onClick={() => poster5El.current.click()}
                                >
                                    <DummyImageLarge />
                                </button>}
                        </div>
                    </div>
                    <div>
                        <div className="collapse bg-base-200">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium px-10">
                                Click Here to <span className='text-redHero'>Edit</span> Product Details
                            </div>
                            <div className="collapse-content">
                                <ProductEdit productObj={product} handleOnChange={onChangeProduct} confirmWord="SAVE" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>

    )
}
