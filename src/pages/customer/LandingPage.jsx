import React from 'react';
import ProductCard from '../../layouts/components/ProductCard';
import { useSelector } from 'react-redux';
import { fetchAllProduct } from '../../store/slices/productSlice';
import { fetchSeries } from '../../store/slices/seriesSlice';
import { fetchGroups } from '../../store/slices/groupSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Carousel } from "@material-tailwind/react";
import * as landingApi from "../../api/landingPageImage";
import { useState } from 'react';

export default function LandingPage() {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.products);
  const [landing, setLanding] = useState([]);
  const [loading, setLoading] = useState(true);

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
        toast.error(error.response?.data?.message)
      } finally {
        setLoading(false);
      }
    })()
  }, []);

  const handleOnClick = (e) => {
    console.log(e.id);
    localStorage.setItem('productId', e.id);
  };

  return (
    <div>
      <div className=''></div>
      <div>
        <div className='hero mb-8'>
          <Carousel className="">
            <img
              src="https://prod-global-static.oss-us-east-1.aliyuncs.com/globalAdmin/1709176171572.jpg?x-oss-process=image/format,webp"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <img
              src="https://prod-global-static.oss-us-east-1.aliyuncs.com/globalAdmin/1709176750218.jpg?x-oss-process=image/format,webp"
              alt="image 2"
              className="h-full w-full object-cover"
            />
            <img
              src="https://prod-global-static.oss-us-east-1.aliyuncs.com/globalAdmin/1709177133802.jpg?x-oss-process=image/format,webp"
              alt="image 3"
              className="h-full w-full object-cover"
            />
            <img
              src="https://prod-global-static.oss-us-east-1.aliyuncs.com/globalAdmin/1709176918193.jpg?x-oss-process=image/format,webp"
              alt="image 4"
              className="h-full w-full object-cover"
            />
          </Carousel>
        </div>

        <div className='w-3/4 m-auto '>
          <h1 className='text-2xl text-red-500 font-semibold'>New Arrivals</h1>
        </div>
        <div className='flex flex-col justify-center items-center '>
          <div className='hero '>
            <div className='  carousel w-3/4 m-auto   py-5'>
              <div className='carousel h-2/4 gap-4 carousel-end  rounded-box'>
                <div className='carousel-item'>
                  {products.map((el, index) => (
                    <ProductCard
                      key={el.id}
                      productObj={el}
                      onClick={handleOnClick}
                    />
                  ))}
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
        <div className='flex flex-col justify-center items-center '>
          <div className='hero '>
            <div className='  carousel w-3/4 m-auto   py-5'>
              <div className='carousel h-2/4 gap-4 carousel-end  rounded-box'>
                <div className='carousel-item'>
                  {products.map((el, index) => (
                    <ProductCard key={el.id} productObj={el} />
                  ))}
                </div>
              </div>
            </div>

            <div></div>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center '>
          <div className='hero '>
            <div className='  carousel w-3/4 m-auto   py-5'>
              <div className='carousel h-2/4 gap-4 carousel-end  rounded-box'>
                <div className='carousel-item'>
                  <ProductCard />
                </div>
                <div className='carousel-item'>
                  <ProductCard />
                </div>
                <div className='carousel-item'>
                  <ProductCard />
                </div>
                <div className='carousel-item'>
                  <ProductCard />
                </div>
                <div className='carousel-item'>
                  <ProductCard />
                </div>
                <div className='carousel-item'>
                  <ProductCard />
                </div>
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
