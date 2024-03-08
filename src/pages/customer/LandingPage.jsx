import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../layouts/components/ProductCard';
import { useSelector } from 'react-redux';
import { fetchAllProduct } from '../../store/slices/productSlice';
import { fetchSeries } from '../../store/slices/seriesSlice';
import { fetchGroups } from '../../store/slices/groupSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function LandingPage() {
  const dispatch = useDispatch();
  const { products } = useSelector(store => store.products);

  useEffect(() => {
    dispatch(fetchAllProduct());
    dispatch(fetchGroups());
    dispatch(fetchSeries());
  }, [])

  const newProducts = products.filter(product => product.isNew).slice(0, 6); // แสดงสินค้าไม่เกิน 6 รายการ
  const topSellingProducts = products.filter(product => product.isHot).slice(0, 6); // แสดงสินค้าไม่เกิน 6 รายการ


  return (
    <div>
      <div className=""></div>
      <div>
        <div className="hero ">
          <div className="  carousel w-3/4 m-auto py-10    ">
            <div id="slide1" className="carousel-item relative w-full">
              <img src="https://prod-global-static.oss-us-east-1.aliyuncs.com/globalAdmin/1709176171572.jpg?x-oss-process=image/format,webp" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img src="https://prod-global-static.oss-us-east-1.aliyuncs.com/globalAdmin/1709176750218.jpg?x-oss-process=image/format,webp" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img src="https://prod-global-static.oss-us-east-1.aliyuncs.com/globalAdmin/1709177133802.jpg?x-oss-process=image/format,webp" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img src="https://prod-global-static.oss-us-east-1.aliyuncs.com/globalAdmin/1709176918193.jpg?x-oss-process=image/format,webp" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
              </div>
            </div>
          </div>
        </div>

        <div className='w-3/4 m-auto '>
          <h1 className='text-2xl text-red-500 font-semibold'>New arrivals</h1>
        </div>
        <div className='flex flex-col justify-center items-center ' >
          <div className="hero ">
            <div className="carousel w-3/4 m-auto py-5">
              <div className="carousel h-2/4 gap-4 carousel-end rounded-box relative">
                <div className="carousel-item">
                  {newProducts.map((el, index) => <ProductCard key={el.id} productObj={el} />)}
                </div>
                {newProducts.length > 6 && (
                  <div className="absolute flex justify-between items-center w-full bottom-2">
                    <a href="#previous-slide" className="btn btn-circle bg-gray-400">&lt;</a>
                    <Link to="/new-arrivals" className="btn btn-circle bg-gray-400">🢐</Link>
                    <a href="#next-slide" className="btn btn-circle bg-gray-400">&gt;</a>
                  </div>
                )}
              </div>
            </div>


            <div>
            </div>
          </div>
        </div>
        <br />
        <div className='w-3/4 m-auto  '>
          <h1 className='text-2xl  font-semibold text-red-600'>Tops selling</h1>
        </div>
        <div className='flex flex-col justify-center items-center ' >

          <div className="hero ">

            <div className="carousel w-3/4 m-auto py-5">
              <div className="carousel h-2/4 gap-4 carousel-end rounded-box">
                <div className="carousel-item">
                  {topSellingProducts.map((el, index) => <ProductCard key={el.id} productObj={el} />)}
                </div>
                {topSellingProducts.length > 6 && (
                  <div className="absolute flex justify-between items-center w-full bottom-2">
                    <a href="#previous-slide" className="btn btn-circle bg-gray-400">&lt;</a>
                    <Link to="/top-selling" className="btn btn-circle bg-gray-400">🢐</Link>
                    <a href="#next-slide" className="btn btn-circle bg-gray-400">&gt;</a>
                  </div>
                )}
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
                <div className="carousel-item">
                  {topSellingProducts.map((el, index) => <ProductCard key={el.id} productObj={el} />)}
                </div>
                {topSellingProducts.length > 6 && (
                  <div className="absolute flex justify-between items-center w-full bottom-2">
                    <a href="#previous-slide" className="btn btn-circle bg-gray-400">&lt;</a>
                    <Link to="/top-selling" className="btn btn-circle bg-gray-400">🢐</Link>
                    <a href="#next-slide" className="btn btn-circle bg-gray-400">&gt;</a>
                  </div>
                )}
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