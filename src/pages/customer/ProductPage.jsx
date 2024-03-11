import React, { useState } from 'react';
import Button from '../../components/Button';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import * as productApi from '../../api/product';
import * as cartApi from '../../api/cart';
import {
  addWishlist,
  removeWishlist,
  fetchWishlist,
} from '../../store/slices/wishlistSlice';
import { fetchCart } from '../../store/slices/cartSlice';
import HeartIcon from '../../assets/icon/HeartIcon';
import Spinner from '../../components/Spinner';
import { toast } from 'react-toastify';
import useAuth from '../../hooks/use-auth';
import { useNavigate } from 'react-router-dom';

const initialCartItem = {
  productId: null,
  quantity: null,
  price: null,
};

export default function ProductPage() {
  const dispatch = useDispatch();
  const { wishlistItems, newWishlist } = useSelector(
    (store) => store.wishlists
  );
  const { itemsInCart } = useSelector((store) => store.cart);
  const [selectedImage, setSelectedImage] = useState('');
  const [isWishlist, setIsWishlist] = useState(false);
  const [wishlistId, setWishlistId] = useState('');
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [newCartItem, setNewCartItem] = useState(initialCartItem);
  const [isLaunch, setIsLaunch] = useState(true);
  const { authUser } = useAuth();

  const navigate = useNavigate();

  const productId = +localStorage.getItem('productId');

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        dispatch(fetchCart());

        const data = await productApi.fetchProductById(productId);
        setProduct(data.data.resultProductById);
        setNewCartItem({
          productId: productId,
          quantity: count,
          price: data.data.resultProductById.price,
        });
        isItLaunch(data.data.resultProductById.launchDate);
      } catch (error) {
        setLoading(false);
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
    dispatch(fetchWishlist());
    numberInCart();
  }, []);

  useEffect(() => {
    isInWishlist();
    setNewCartItem({
      productId: productId,
      quantity: count,
      price: product.price,
    });
  }, [wishlistItems, count]);

  useEffect(() => {}, []);

  console.log('product', product);

  //------------------------------------image zone

  //change image
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  //------------------------------------time manipulate zone

  const isItLaunch = (date) => {
    console.log('launchTime', date);
    console.log('Now', new Date().toISOString());

    const now = new Date().toISOString();

    if (date > now) {
      console.log('more than');
      setIsLaunch(false);
    } else {
      console.log('less than');
      setIsLaunch(true);
    }
  };

  //------------------------------------counter zone

  //counter function increment
  const increment = () => {
    if (count < 99 && count < product?.stockQuantity) {
      setCount(count + 1);
    } else {
      toast.error('limit on stock');
      return count;
    }
  };

  //counter function decrement
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    } else return count;
  };

  //------------------------------------cart zone

  //check is item in cart and amount of items in cart
  const numberInCart = () => {
    const found = itemsInCart.find((el) => el.productId === productId);
    if (found) {
      setCount(found.quantity);
    } else {
      setCount(1);
    }
  };

  //add to cart function
  const onAddTOCart = async () => {
    try {
      console.log('price', product.price);
      console.log('newCartItem', newCartItem);
      await cartApi.upsertIntoCart(newCartItem);
    } catch (err) {
      console.log(err);
    } finally {
      toast.success('Add to cart Success');
    }
  };

  //------------------------------------wishlist zone

  // check is item is in wishlist
  const isInWishlist = () => {
    const foundWishlist = wishlistItems.find(
      (el) => el.productId === productId
    );
    // console.log('wishlist', wishlistItems);
    // console.log('found', foundWishlist);
    if (foundWishlist) {
      setIsWishlist(true);
      setWishlistId(foundWishlist.id);
    } else {
      setIsWishlist(false);
      setWishlistId(null);
    }
  };

  //add item to wishlist
  const onAddWishlist = async () => {
    try {
      console.log('add to wishlist', productId);
      const action = await dispatch(addWishlist(productId));
      console.log('action', action);

      setIsWishlist(true);
    } catch (err) {
      console.log(err);
    } finally {
    }
  };

  //remove item from wishlist
  const onRemoveWishlist = async () => {
    try {
      if (!wishlistId) {
        console.log('remove from wishlist', newWishlist);
        dispatch(removeWishlist(newWishlist.id));
        setIsWishlist(false);
      } else {
        console.log('remove from wishlist', wishlistId);
        dispatch(removeWishlist(wishlistId));
        setIsWishlist(false);
        setWishlistId(null);
      }
    } catch (err) {
      console.log(err);
    } finally {
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className='hero '>
      <div className=' m-auto w-3/4  '>
        <section className='pt-12 sm:pt-16'>
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
                  {authUser?.role === 'USER' ? (
                    <div className='btn bg-transparent border-none shadow-none hover:bg-transparent'>
                      {isWishlist ? (
                        <HeartIcon
                          onClick={onRemoveWishlist}
                          size='32px'
                          fill='red'
                          stroke='none'
                        />
                      ) : (
                        <HeartIcon onClick={onAddWishlist} size='32px' />
                      )}
                    </div>
                  ) : null}
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

                {isLaunch || product?.stockQuantity == 0 ? (
                  authUser?.role !== 'ADMIN' ? (
                    <div className='mt-10 flex flex-col items-center justify-start gap-4 space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0'>
                      <Button
                        onClick={() => {
                          if (authUser?.role === 'USER') {
                            return onAddTOCart();
                          } else if (!authUser) {
                            return navigate('/login');
                          }
                        }}
                        bg='red'
                        type='submit'
                        color='white'
                      >
                        ADD TO CART
                      </Button>
                      <Button
                        onClick={() => {
                          if (authUser?.role === 'USER') {
                            onAddTOCart();
                            return navigate('/cart-page');
                          } else if (!authUser) {
                            return navigate('/login');
                          }
                        }}
                        bg='black'
                        type='submit'
                        color='white'
                      >
                        BUY NOW
                      </Button>
                    </div>
                  ) : null
                ) : (
                  <div>
                    <Button color='white' bg='black' width='full'>
                      Product is not available
                    </Button>
                  </div>
                )}
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
        <div className='flex flex-col w-[835px] mx-auto justify-center items-center'>
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
