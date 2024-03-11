import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../layouts/components/ProductCard';
import { useSelector } from 'react-redux';
import { fetchAllProduct } from '../../store/slices/productSlice';
import { fetchSeries } from '../../store/slices/seriesSlice';
import { fetchGroups } from '../../store/slices/groupSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Carousel } from '@material-tailwind/react';
import * as landingApi from '../../api/landingPageImage';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function LandingPage() {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.products);
  const [landing, setLanding] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchAllProduct());
    dispatch(fetchGroups());
    dispatch(fetchSeries());

    setLoading(true);
    (async () => {
      try {
        // FETCH REMAINING LANDING PAGE IMAGE
        const { data: landingImage } = await landingApi.fetchLanding();
        setLanding(landingImage.resultLanding);
      } catch (error) {
        toast.error(error.response?.data?.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleOnClick = (e) => { };

  const handleOnclickLanding = (e, productId) => {
    localStorage.setItem('productId', productId);
    navigate('/product');
  };
  const newProducts = products.filter((product) => product.isNew).slice(0, 8); // แสดงสินค้าไม่เกิน 6 รายการ
  const topSellingProducts = products
    .filter((product) => product.isHot)
    .slice(0, 8); // แสดงสินค้าไม่เกิน 6 รายการ
  const topSellingProducts2 = products
    .filter((product) => product.isHot)
    .slice(9, 16); // แสดงสินค้าไม่เกิน 6 รายการ

  return (
    <div>
      <div>
        <div className='hero mb-8 px-8'>
          <Carousel>
            {landing.map((el, index) => {
              // console.log(el.image);
              return (
                <button key={el.id} onClick={(e) => handleOnclickLanding(e, el.products.id)}>
                  <img
                    src={el.image}
                    alt="landingImage"
                    className="h-full w-full object-cover"
                  />
                </button>
              )
            })}
          </Carousel>
        </div>

        <div className='w-3/4 m-auto '>
          <h1 className='text-2xl text-red-500 font-semibold'>New Arrivals</h1>
        </div>
        <div className='flex flex-col justify-center items-center '>
          <div className='hero '>
            <div className='carousel w-3/4 m-auto py-5'>
              <div className='carousel h-2/4 gap-4 carousel-end rounded-box relative'>
                <div className='carousel-item gap-4'>
                  {newProducts.map((el, index) => (
                    <ProductCard
                      key={el.id}
                      productObj={el}
                      onClick={handleOnClick}
                    />
                  ))}
                  <div className='flex align-middle items-center'>
                    <Link
                      to='/new-arrivals'
                      className='btn btn-circle bg-gray-100'
                    >
                      &gt;
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div></div>
          </div>
        </div>
        <br />
        <div className='w-3/4 m-auto  '>
          <h1 className='text-2xl  font-semibold text-red-600'>Tops Selling</h1>
        </div>
        <div className='flex flex-col justify-center items-center ' >
          <div className="hero ">
            <div className="carousel w-3/4 m-auto py-5">
              <div className="carousel h-2/4 gap-4 carousel-end rounded-box">
                <div className="carousel-item gap-4">
                  {topSellingProducts.map((el, index) => <ProductCard key={el.id} productObj={el} />)}
                  <div className="flex align-middle items-center">
                    <Link to="/top-selling" className="btn btn-circle bg-gray-100">&gt;</Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center ' >
          <div className="hero ">
            <div className="carousel w-3/4 m-auto py-5">
              <div className="carousel h-2/4 gap-4 carousel-end rounded-box">
                <div className="carousel-item gap-4">
                  {topSellingProducts2.map((el, index) => <ProductCard key={el.id} productObj={el} />)}
                  <div className="flex align-middle items-center">
                    <Link to="/top-selling" className="btn btn-circle bg-gray-100">&gt;</Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
