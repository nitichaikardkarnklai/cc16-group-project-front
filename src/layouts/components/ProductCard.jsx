import React from 'react';
import Button from '../../components/Button';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchAllProduct, fetchProductById } from '../../store/slices/productSlice';
import * as apiProduct from "../../api/product";
import { toast } from "react-toastify"

export default function ProductCard({ productObj, location = '', onClick = () => { } }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDeleteProduct = async () => {
    if (confirm("Are you sure to delete this product?")) {
      try {
        await apiProduct.deleteProduct(productObj.id);
        toast.success("product is successfully deleted");
      } catch (error) {
        console.log(error.response.data);
        toast.error(error.response?.data.message);
      } finally {
        dispatch(fetchAllProduct());
      }
    }
  }

  return (
    <div className='relative w-[250px] flex flex-col gap-2 mx-auto'>
      <div
        onClick={(c) => location === "/admin/admin-product-edit-form" || onClick(productObj)}
        className='overflow-hidden border-none w-[250px] h-[320px] bg-grayBg100 flex justify-center items-center'
      >
        {productObj?.productCover ? (
          <img src={productObj.productCover[0]?.cover}></img>
        ) : (
          ''
        )}
      </div>
      <div className='flex flex-col w-full items-start'>
        <div className=' font-semibold text-goldToyMart'>
          {productObj?.brand}
        </div>
        <div className='font-medium text-lg'>{productObj?.productName}</div>
        <div className='font-medium text-xl mt-2 text-redHero flex justify-between w-full items-center'>
          {(+productObj?.price).toLocaleString()} Baht
          {location?.pathname === '/admin/admin-product-mgt-page' && (
            <div className='flex gap-2'>
              <Button onClick={() => { localStorage.setItem('productId', productObj.id); navigate("/admin/admin-product-edit-form"); }} color='white' bg='darkGray'>
                Edit
              </Button>
              <Button onClick={() => handleDeleteProduct()} color='white' bg='red'>
                DELETE
              </Button>
            </div>
          )}
        </div>
      </div>
      <div className='absolute top-2 left-2 flex gap-2'>
        {productObj?.isNew ? (
          <div className='text-xs bg-yellowNew px-2 pt-1 font-semibold text-white'>
            NEW
          </div>
        ) : (
          ''
        )}
        {productObj?.isHot ? (
          <div className='text-xs bg-redHero px-2 pt-1 font-semibold text-white'>
            HOT
          </div>
        ) : (
          ''
        )}
        {productObj?.isSoldOut ? (
          <div className='text-xs bg-grayBg200 px-2 pt-1 font-semibold text-white'>
            SOLD OUT
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
