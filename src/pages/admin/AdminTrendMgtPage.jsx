import React from 'react';
import DummyImageLarge from '../../layouts/components/DummyImageLarge';
import SearchBar from '../../components/SearchBar';
import Button from '../../components/Button';
import { useEffect } from 'react';
import { fetchAllProduct } from '../../store/slices/productSlice';
import ProductCard from '../../layouts/components/ProductCard';
import { useState } from 'react';
import * as productApi from "../../api/product"
import { toast } from 'react-toastify';
import Spinner from '../../components/Spinner';
import { useRef } from 'react';
import * as landingApi from "../../api/landingPageImage";

export default function AdminTrendMgtPage() {
  const [productArr, setProductArr] = useState([]);
  const [initProducts, setInitProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState({ imageFile: null, product: null });
  const [landing, setLanding] = useState([]);
  const [error, setError] = useState(false);
  const [onFetch, setOnfetch] = useState(false);

  const landingImageEl = useRef(null);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        // FETCH ALL PRODUCT
        const { data } = await productApi.fetchAllProduct();
        const products = data.resultAllProduct;
        setProductArr(products);
        setInitProduct(products);

        // FETCH REMAINING LANDING PAGE IMAGE
        const { data: landingImage } = await landingApi.fetchLanding();
        setLanding(landingImage.resultLanding);
        console.log(landingImage.resultLanding);

      } catch (error) {
        toast.error(error.response?.data?.message)
      } finally {
        setLoading(false);
      }
    })()
  }, [onFetch]);

  const handleAddLandingImage = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!input.imageFile || !input.product) return setError(true); e.stopPropagation();
      const formData = new FormData();
      formData.append("image", input.imageFile);
      await landingApi.createLanding(formData, input.product.id);
    } catch (error) {
      toast.error(error.response?.data?.message)
    } finally {
      setOnfetch(c => !c);
      // setLoading(c => { setOnfetch(c => !c); return false });
      setLoading(false);
      return setError(true);
    } else {
      try {
        const formData = new FormData();
        formData.append("image", input.imageFile);
        await landingApi.createLanding(formData, input.product.id);
      } catch (error) {
        toast.error(error.response?.data?.message)
      } finally {
        // setLoading(c => { setOnfetch(c => !c); return false });
        setOnfetch(c => !c);
        setLoading(false);
      }
    }

  }

  const handleDeleteLandingImage = async (e, landingId) => {
    e.preventDefault();
    if (confirm("Are you sure to delete this landing image?")) {
      setLoading(true);
      try {
        await landingApi.deleteLanding(landingId);
      } catch (error) {
        toast.error(error.response?.data?.message)
      } finally {
        setOnfetch(c => !c);
        setLoading(false);
      }
    }
  }

  const searchProductByName = (searchText) => {
    // console.log(searchText);
    const searchedProduct = initProducts.filter(el => el.productName.trim().toLowerCase().includes(searchText.trim().toLowerCase()));
    console.log(searchedProduct);
    setProductArr(searchedProduct);
  }

  if (loading) return <Spinner />

  return (
    <div className='flex flex-col gap-8'>
      <div className='font-semibold'>Landing Page Management</div>
      <Button color="white" bg="red" onClick={() => document.getElementById('my_modal_2').showModal()}>Add Landing Page Image</Button>
      {/* =========== Modal For Add Landing Page Image =========== */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box max-w-4xl p-10">
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-4'>
              {error && <div className='text-redHero'>you does'n t select landing image or linked product yet</div>}
              <Button color="white" bg="red" type="button" onClick={(e) => handleAddLandingImage(e)}>CREATE LANDING IMAGE</Button>
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
                  <button type="button" className="btn absolute top-4 right-4 font-black text-redHero"
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
      {/* =========== CURRENTLY LANDING PAGE IMAGE =========== */}
      {landing?.map((el, index) => (
        <div
          key={el.id}
          className="relative flex justify-between bg-red-100 rounded-xl p-8 gap-4"
        >
          <img src={el.image} alt="landingImage" className='w-[70%]' />
          <ProductCard productObj={el.products} />
          <button type="button" className="absolute top-4 right-4 font-black text-gray-400"
            onClick={e => {
              e.stopPropagation();
              handleDeleteLandingImage(e, el.id);
            }}
          >&#10005;</button>
        </div >
      ))
      }
    </div >
  );
}

