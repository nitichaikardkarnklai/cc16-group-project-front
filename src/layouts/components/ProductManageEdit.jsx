import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import BackIcon from '../../assets/icon/BackIcon';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TextArea from '../../components/TextArea';
import FileIcon from '../../assets/icon/FileIcon';
import DummyImageSmall from './DummyImageSmall';
import DummyImageLarge from './DummyImageLarge';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createProduct, fetchAllProduct, resetNewProductInput } from '../../store/slices/productSlice';
import { fetchGroups } from '../../store/slices/groupSlice';
import { fetchSeries } from '../../store/slices/seriesSlice';
import { onChangeNewProduct } from '../../store/slices/productSlice';
import { useRef } from 'react';
import ProductEdit from './ProductEdit';
import { toast } from 'react-toastify';
import Spinner from '../../components/Spinner';
import { validateAddProduct } from '../../features/product/validations/validate-product';
import { addProduct } from '../../api/product';


export default function ProductManageEdit() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { series } = useSelector(store => store.series);
    const { groups } = useSelector(store => store.group);
    const { newProduct, loading } = useSelector(store => store.products);
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

    useEffect(() => {
        dispatch(fetchAllProduct());
        dispatch(fetchGroups());
        dispatch(fetchSeries());
    }, [])

    const handleSubmitFormAddProduct = async e => {
        e.preventDefault();
        console.log("submit");
        try {
            const validationError = validateAddProduct(newProduct);
            // console.log(validationError);
            if (!images.coverProduct) { return toast.error("cover image is required"); }

            const formData = new FormData();
            Object.keys(newProduct).forEach(key => {
                // console.log(newProduct[key])
                formData.append(key, newProduct[key]);
            })
            Object.keys(images).forEach(key => {
                if (key !== "imageProduct") {
                    if (images[key]) {
                        formData.append(key, images[key]);
                    }
                } else {
                    images[key].forEach(file => {
                        if (file) {
                            formData.append(key, file);
                        }
                    })
                }
            })
            Object.keys(newProduct).forEach(key => {
                console.log(key, formData.getAll(key));
            })
            console.log("coverProduct", formData.getAll("coverProduct"));
            console.log("imageProduct", formData.getAll("imageProduct"));
            console.log("poster1", formData.getAll("poster1"));

            await dispatch(createProduct(formData));
            toast.success("create product success")
        } catch (err) {
            console.log(err.details)
            if (err.details[0]) {
                toast.error(err?.details[0]?.message);
            } else if (err.response) {
                toast.error(err.response?.data.message);
            }
            else {
                toast.error(err);
            }
        } finally {
        }
    }

    if (loading) {
        return (
            <div>
                <div>IN-PROCESS ...</div>
                <Spinner />
            </div>
        )
    }

    return (
        <form className='flex gap-4' onSubmit={(e) => handleSubmitFormAddProduct(e)}>
            <button type="button" className="flex items-start" onClick={() => { dispatch(resetNewProductInput()); navigate(-1) }}><BackIcon /></button>
            <div className="hero h-full ">
                <div className="flex">
                    <div className="w-full lg:w-1/2">
                        <div className="lg:flex lg:justify-start gap-1 mb-4">
                            <div className="lg:order-2 flex flex-col justify-center w-[40rem]">
                                <input
                                    type="file"
                                    className="hidden"
                                    ref={coverProductEl}
                                    onChange={e => {
                                        if (e.target.files[0]) {
                                            setImages(c => { return { ...c, coverProduct: e.target.files[0] } })
                                        }
                                    }}
                                />
                                {images.coverProduct ?
                                    <div
                                        className="relative flex justify-center"
                                        onClick={() => { coverProductEl.current.click() }}
                                        role="button"
                                    >
                                        <img src={URL.createObjectURL(images.coverProduct)} alt="coverProduct" />
                                        <button className="absolute top-2 right-2 font-black text-gray-400 h-6 w-6"
                                            onClick={e => {
                                                e.stopPropagation();
                                                setImages(c => { return { ...c, coverProduct: null } });
                                                coverProductEl.current.value = "";
                                            }}
                                        >&#10005;</button>
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
                                    <div>MAX 4</div>
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
                    <ProductEdit productObj={newProduct} handleOnChange={onChangeNewProduct} />
                </div>
            </div>
        </form>

    )
}
