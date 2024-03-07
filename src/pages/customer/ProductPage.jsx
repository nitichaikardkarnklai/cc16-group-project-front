import React, { useState } from 'react';
import Button from '../../components/Button';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import * as productApi from '../../api/product';
import { fetchProductById } from '../../store/slices/productSlice';
import {
  addWishlist,
  removeWishlist,
  fetchWishlist,
} from '../../store/slices/wishlistSlice';
import HeartIcon from '../../assets/icon/HeartIcon';
import Spinner from '../../components/Spinner';

export default function ProductPage() {
  const dispatch = useDispatch();
  // const { product } = useSelector((store) => store.products);
  const { wishlistItems } = useSelector((store) => store.wishlists);
  const [selectedImage, setSelectedImage] = useState('');
  const [isWishlist, setIsWishlist] = useState(false);
  const [wishlistId, setWishlistId] = useState('');
  const [count, setCount] = useState(0);
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  const productId = +localStorage.getItem('productId');

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await productApi.fetchProductById(productId);
        setProduct(data.data.resultProductById);
        dispatch(fetchWishlist());
      } catch (error) {
        setLoading(false);
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    isInWishlist();
  }, [wishlistItems]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  //find wishlist ID

  // check is item is in wishlist
  const isInWishlist = () => {
    const foundWishlist = wishlistItems.filter(
      (el) => el.productId === productId
    );
    console.log('wishlist', wishlistItems);
    console.log('found', foundWishlist);
    if (foundWishlist && foundWishlist.length != 0) {
      setIsWishlist(true);
      setWishlistId(foundWishlist?.[0]?.id);
    } else setIsWishlist(false);
  };

  const increment = () => {
    if (count < 99) {
      setCount(count + 1);
    } else return count;
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else return count;
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className='hero '>
      <div className=' m-auto w-3/4  '>
        <section className='py-12 sm:py-16'>
          <div className='container mx-auto px-4'>
            <div className='lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16'>
              <div className='lg:col-span-3 lg:row-end-1'>
                <div className='lg:flex lg:items-start'>
                  <div className='lg:flex lg:justify-start lg:gap-1'>
                    <div className='lg:order-2 flex flex-col justify-center w-auto'>
                      <div className=''>
                        <img
                          className='h-full w-full max-w-full object-cover'
                          src={
                            selectedImage === ''
                              ? product.productCover?.[0]?.cover
                              : selectedImage
                          }
                          alt=''
                        />
                      </div>
                    </div>
                    <div className=' w-full'>
                      <div className='flex flex-row items-start lg:flex-col'>
                        <button
                          type='button'
                          className='flex-0 aspect-square mb-3 h-20 overflow-hidden border-2 border-gray-200 text-center'
                          onClick={() =>
                            handleImageClick(product.productCover?.[0]?.cover)
                          }
                        >
                          <img
                            className='h-full w-full object-cover'
                            src={product.productCover?.[0]?.cover}
                            alt=''
                          />
                        </button>
                        {product?.productImages?.map((image, index) => (
                          <button
                            key={index}
                            type='button'
                            className='flex-0 aspect-square mb-3 h-20 overflow-hidden border-2 border-gray-200 text-center'
                            onClick={() => handleImageClick(image.images)}
                          >
                            <img
                              className='h-full w-full object-cover'
                              src={image.images}
                              alt=''
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='lg:col-span-2 lg:row-span-2 lg:row-end-2'>
                <h1 className='flex justify-start items-center gap-4 sm: text-2xl font-bold text-gray-900 sm:text-3xl'>
                  {product?.productName}{' '}
                  <div className='btn bg-transparent border-none shadow-none hover:bg-transparent'>
                    {isWishlist ? (
                      <HeartIcon
                        onClick={() => {
                          setIsWishlist(!isWishlist);
                          console.log('remove from wishlist');
                          dispatch(removeWishlist(wishlistId));
                        }}
                        size='32px'
                        fill='red'
                        stroke='none'
                      />
                    ) : (
                      <HeartIcon
                        onClick={() => {
                          setIsWishlist(!isWishlist);
                          console.log('add to wishlist');
                          dispatch(addWishlist(productId));
                        }}
                        size='32px'
                      />
                    )}
                  </div>
                </h1>

                <div className='mt-5 flex items-center'></div>
                <div className='flex items-end'>
                  <h1 className='text-2xl font-semibold text-red-500'>
                    {product.price} BTH
                  </h1>
                </div>

                <h2 className='mt-8 text-base text-gray-900'>QUANTITY</h2>
                <div className='mt-3 flex select-none flex-wrap items-center gap-1'>
                  <div
                    onClick={decrement}
                    className='btn border border-gray-300 dark:border-gray-600  p-2 cursor-pointer'
                  >
                    -
                  </div>
                  <div className='p-2'>{count}</div>
                  <div
                    onClick={increment}
                    className='btn border border-gray-300 dark:border-gray-600  p-2 cursor-pointer'
                  >
                    +
                  </div>
                </div>
                <div className='mt-3 flex select-none flex-wrap items-center gap-1'></div>

                <div className='mt-10 flex flex-col items-center justify-start gap-4 space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0'>
                  <Button bg='red' type='submit' color='white'>
                    ADD TO CART
                  </Button>
                  <Button bg='black' type='submit' color='white'>
                    BUY NOW
                  </Button>
                </div>
                <div className='collapse collapse-arrow '>
                  <input type='radio' name='my-accordion-2' />
                  <div className='collapse-title text-xl font-medium'>
                    ALL FIGURES
                  </div>
                  <div className='collapse-content'>
                    <p>
                      Brand: {product?.brand} <br />
                      Size: {product?.size} <br />
                      Material: {product?.material} <br />
                      {product?.customDetail}
                    </p>
                  </div>
                </div>
                <div className='collapse collapse-arrow '>
                  <input type='radio' name='my-accordion-2' />
                  <div className='collapse-title text-xl font-medium'>
                    SHIPPING & AFTER_SALES SERVICE
                  </div>
                  <div className='collapse-content'>
                    <p>
                      Standard Shipping (15-30 working days)
                      <br />
                      Expedited Shipping (3-7 working days)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ======POSTER====== */}
        <div className='w-[835px] mx-auto'>
          <img src={product?.productPosters?.[0].posters1} alt='' />
          <img src={product?.productPosters?.[0].posters2} alt='' />
          <img src={product?.productPosters?.[0].posters3} alt='' />
          <img src={product?.productPosters?.[0].posters4} alt='' />
          <img src={product?.productPosters?.[0].posters5} alt='' />
        </div>
      </div>
    </div>
  );
}
