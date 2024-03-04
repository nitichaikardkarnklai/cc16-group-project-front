import React from 'react';
import ProductCard from '../../layouts/components/ProductCard';

export default function LandingPage() {
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

            <div className="  carousel w-3/4 m-auto   py-5">
              <div className="carousel h-2/4 gap-4 carousel-end  rounded-box">
                <div className="carousel-item">
                  <ProductCard />
                </div>
                <div className="carousel-item">
                  <ProductCard />
                </div>
                <div className="carousel-item">
                  <ProductCard />
                </div>
                <div className="carousel-item">
                  <ProductCard />
                </div>
                <div className="carousel-item">
                  <ProductCard />
                </div>
                <div className="carousel-item">
                  <ProductCard />
                </div>



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

            <div className="  carousel w-3/4 m-auto   py-5">
              <div className="carousel h-2/4 gap-4 carousel-end  rounded-box">
                <div className="carousel-item">
                  <ProductCard />
                </div>
                <div className="carousel-item">
                  <ProductCard />
                </div>
                <div className="carousel-item">
                  <ProductCard />
                </div>
                <div className="carousel-item">
                  <ProductCard />
                </div>
                <div className="carousel-item">
                  <ProductCard />
                </div>
                <div className="carousel-item">
                  <ProductCard />
                </div>



              </div>

            </div>

            <div>
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center ' >

          <div className="hero ">

            <div className="  carousel w-3/4 m-auto   py-5">
              <div className="carousel h-2/4 gap-4 carousel-end  rounded-box">
                <div className="carousel-item">
                  <ProductCard />
                </div>
                <div className="carousel-item">
                  <ProductCard />
                </div>
                <div className="carousel-item">
                  <ProductCard />
                </div>
                <div className="carousel-item">
                  <ProductCard />
                </div>
                <div className="carousel-item">
                  <ProductCard />
                </div>
                <div className="carousel-item">
                  <ProductCard />
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