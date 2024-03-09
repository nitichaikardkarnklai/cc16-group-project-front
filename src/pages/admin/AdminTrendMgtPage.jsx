import React from 'react';
import DummyImageLarge from '../../layouts/components/DummyImageLarge';
import SearchBar from '../../components/SearchBar';
import Button from '../../components/Button';
import { useEffect } from 'react';
import { fetchAllProduct } from '../../store/slices/productSlice';
import ProductCard from '../../layouts/components/ProductCard';
import { useState } from 'react';
import * as apiProduct from "../../api/product"
import { toast } from 'react-toastify';
import Spinner from '../../components/Spinner';
import { useRef } from 'react';
// import { dataRippleLight } from "@material-tailwind/react";

export default function AdminTrendMgtPage() {
  const [productArr, setProductArr] = useState([]);
  const [initProducts, setInitProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState({ imageFile: null, product: null });

  const landingImageEl = useRef(null);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const { data } = await apiProduct.fetchAllProduct();
        const products = data.resultAllProduct;
        setProductArr(products);
        setInitProduct(products)
      } catch (error) {
        // toast.error(res)
      } finally {
        setLoading(false);
      }
    })()
  }, []);

  const searchProductByName = (searchText) => {
    // console.log(searchText);
    const searchedProduct = initProducts.filter(el => el.productName.trim().toLowerCase().includes(searchText.trim().toLowerCase()));
    console.log(searchedProduct);
    setProductArr(searchedProduct);
  }

  if (loading) return <Spinner />

  return (
    <div className='flex flex-col gap-4'>
      <div className='font-semibold'>Landing Page Management</div>
      <Button color="white" bg="red" onClick={() => document.getElementById('my_modal_2').showModal()}>Add Landing Page Image</Button>
      {/* Modal For Add Landing Page Image */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box max-w-4xl p-10">
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-4'>
              <Button color="white" bg="red">CREATE LANDING IMAGE</Button>
              <input
                type="file"
                className="hidden"
                ref={landingImageEl}
                onChange={e => {
                  if (e.target.files[0]) {
                    setInput(c => { return { ...c, imageFile: e.target.files[0] } })
                  }
                }}
              />
              {input.imageFile ?
                <div
                  className="relative flex justify-center"
                  onClick={() => { landingImageEl.current.click() }}
                  role="button"
                >
                  <img src={URL.createObjectURL(input.imageFile)} alt="landingImage" />
                  <button type="button" className="btn absolute top-0 right-4 font-black text-redHero"
                    onClick={e => {
                      e.stopPropagation();
                      setInput(c => { return { ...c, imageFile: null } });
                      landingImageEl.current.value = "";
                    }}
                  >Clear Image</button>
                </div>
                :
                <button onClick={() => landingImageEl.current.click()}>
                  <DummyImageLarge />
                </button>
              }
              {input?.product ?
                <ProductCard
                  productObj={input.product}
                />
                :
                <div className='w-36 h-48 self-center border-2 rounded-lg border-grayBg200 flex items-center justify-center'>
                  <div>Linked Product</div>
                </div>
              }
              <SearchBar placeholder='Search Product by Name ...' onClick={searchProductByName} />
              <div>Please <span className='text-redHero font-semibold'>Choose</span> A Product to Link with the Landing Image</div>
              <div className='flex gap-8 flex-wrap'>
                {productArr?.map((el, index) => (
                  <button
                    key={index}
                    onClick={() => setInput(c => { return { ...c, product: el } })}
                  >
                    <ProductCard
                      // key={el.id}
                      productObj={el}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

    </div>
  );
}
