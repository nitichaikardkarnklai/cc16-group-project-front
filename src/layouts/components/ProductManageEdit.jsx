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
    const imageProductAddEl = useRef(null);

    const productId = +localStorage.getItem('productId');

    useEffect(() => {
        dispatch(fetchAllProduct());
        dispatch(fetchGroups());
        dispatch(fetchSeries());

        dispatch(fetchProductById(productId));
    }, [onFetch])

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

    const onChangeAndUpdateImage = async (e, imageKey = "image", imageType, imageId = "") => {
        if (confirm("Are you sure to update this image?")) {
            try {
                setLoadingUpdateProduct(true);
                const formData = new FormData();
                formData.append(imageKey, e.target.files[0])
                if (imageType === "coverProduct") {
                    await apiProduct.updateCoverImage(formData, product.productCover?.[0]?.id)
                } else if (imageType === "imageProductEdit") {
                    await apiProduct.updateProductImage(formData, imageId)
                } else if (imageType === "imageProductAdd") {
                    console.log("add product image");
                    await apiProduct.addProductImage(formData, product.id);
                } else { // "posterX"
                    await apiProduct.updatePosterImage(formData, product.productPosters?.[0]?.id, imageType) // posterX
                }
                toast.success("image is successfully changed");
            } catch (error) {
                console.log(error.response.data);
                toast.error(error.response?.data.message);
            } finally {
                setLoadingUpdateProduct(false);
                setOnfetch(c => !c);
            }
        }
    }

    const onDeletePosterImage = async (posterId, posterX) => {
        if (confirm("Are you sure to delete this image?")) {
            try {
                setLoadingUpdateProduct(true);
                await apiProduct.deletePosterImage(posterId, posterX);
                toast.success("image is successfully deleted")
            } catch (error) {
                console.log(error.response.data);
                toast.error(error.response?.data.message);
            } finally {
                setLoadingUpdateProduct(false);
                setOnfetch(c => !c);
            }
        }
    }

    const onDeleteProductImage = async (imageId) => {
        if (confirm("Are you sure to delete this image?")) {
            try {
                setLoadingUpdateProduct(true);
                await apiProduct.deleteProductImage(imageId);
                toast.success("image is successfully deleted")
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
                                {/* ================= Cover Image ===================== */}
                                <input
                                    type="file"
                                    className="hidden"
                                    ref={coverProductEl}
                                    onChange={e => onChangeAndUpdateImage(e, "image", "coverProduct")}
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
                            {/* ================= Product Image ===================== */}
                            <div className="w-1/4">
                                <div className="flex flex-row items-start lg:flex-col">
                                    <div>(MAX 4)</div>
                                    {product.productImages?.map((el, index) => {
                                        return (
                                            <div key={el.id}>
                                                <input
                                                    type="file"
                                                    multiple
                                                    className="hidden"
                                                    ref={imageProductEl}
                                                    onChange={e => {
                                                        onChangeAndUpdateImage(e, "image", "imageProductEdit", el.id)
                                                    }}
                                                />
                                                <div
                                                    key={index}
                                                    className="relative flex aspect-square mb-3 h-20 overflow-hidden"
                                                    onClick={() => { imageProductEl.current.click() }}
                                                    role="button"
                                                >
                                                    <img className="object-cover h-full w-full" src={el.images} alt="imageProduct" />
                                                    <button className="absolute top-2 right-2 font-black text-gray-400 h-6 w-6"
                                                        onClick={e => {
                                                            e.stopPropagation();
                                                            onDeleteProductImage(el.id);
                                                            imageProductEl.current.value = "";
                                                        }}
                                                    >&#10005;</button>
                                                </div>
                                            </div>
                                        )
                                    })}
                                    <input
                                        type="file"
                                        multiple
                                        className="hidden"
                                        ref={imageProductAddEl}
                                        onChange={e => {
                                            onChangeAndUpdateImage(e, "image", "imageProductAdd")
                                        }}
                                    />
                                    {product.productImages?.length >= 4 || <button
                                        type="button"
                                        className="flex-0 aspect-square mb-3 h-20 overflow-hidden text-center"
                                        onClick={() => imageProductAddEl.current.click()}
                                    >
                                        {/* <img className="h-full w-full object-cover" src={"#"} alt="#" /> */}
                                        <DummyImageSmall />
                                    </button>}
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            {/* ============= POSTER1 ============ */}
                            <input
                                type="file"
                                className="hidden"
                                ref={poster1El}
                                onChange={e => onChangeAndUpdateImage(e, "image", "poster1")}
                            />
                            {product.productPosters?.[0]?.posters1 ?
                                <div
                                    className="relative flex justify-center"
                                    onClick={() => { poster1El.current.click() }}
                                    role="button"
                                >
                                    <img src={product.productPosters?.[0]?.posters1} alt="poster1" />
                                    <button type="button" className="absolute top-2 right-2 font-black text-gray-400 h-6 w-6"
                                        onClick={e => {
                                            e.stopPropagation();
                                            onDeletePosterImage(product.productPosters?.[0]?.id, "poster1");
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
                                onChange={e => onChangeAndUpdateImage(e, "image", "poster2")}
                            />
                            {product.productPosters?.[0]?.posters2 ?
                                <div
                                    className="relative flex justify-center"
                                    onClick={() => { poster2El.current.click() }}
                                    role="button"
                                >
                                    <img src={product.productPosters?.[0]?.posters2} alt="poster2" />
                                    <button type="button" className="absolute top-2 right-2 font-black text-gray-400 h-6 w-6"
                                        onClick={e => {
                                            e.stopPropagation();
                                            onDeletePosterImage(product.productPosters?.[0]?.id, "poster2");
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
                                onChange={e => onChangeAndUpdateImage(e, "image", "poster3")}
                            />
                            {product.productPosters?.[0]?.posters3 ?
                                <div
                                    className="relative flex justify-center"
                                    onClick={() => { poster3El.current.click() }}
                                    role="button"
                                >
                                    <img src={product.productPosters?.[0]?.posters3} alt="poster3" />
                                    <button type="button" className="absolute top-2 right-2 font-black text-gray-400 h-6 w-6"
                                        onClick={e => {
                                            e.stopPropagation();
                                            onDeletePosterImage(product.productPosters?.[0]?.id, "poster3");
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
                                onChange={e => onChangeAndUpdateImage(e, "image", "poster4")}
                            />
                            {product.productPosters?.[0]?.posters4 ?
                                <div
                                    className="relative flex justify-center"
                                    onClick={() => { poster4El.current.click() }}
                                    role="button"
                                >
                                    <img src={product.productPosters?.[0]?.posters4} alt="poster4" />
                                    <button type="button" className="absolute top-2 right-2 font-black text-gray-400 h-6 w-6"
                                        onClick={e => {
                                            e.stopPropagation();
                                            onDeletePosterImage(product.productPosters?.[0]?.id, "poster4");
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
                                onChange={e => onChangeAndUpdateImage(e, "image", "poster5")}
                            />
                            {product.productPosters?.[0]?.posters5 ?
                                <div
                                    className="relative flex justify-center"
                                    onClick={() => { poster5El.current.click() }}
                                    role="button"
                                >
                                    <img src={product.productPosters?.[0]?.posters5} alt="poster5" />
                                    <button type="button" className="absolute top-2 right-2 font-black text-gray-400 h-6 w-6"
                                        onClick={e => {
                                            e.stopPropagation();
                                            onDeletePosterImage(product.productPosters?.[0]?.id, "poster5");
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
