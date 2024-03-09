import axios from '../config/axios';

// ======================= ADD PRODUCT ======================
export const addProduct = (formData) => axios.post("product/create", formData);
export const fetchAllProduct = () => axios.get('/product');
export const fetchProductById = (productId) => axios.get(`/product/${productId}`);

// ======================= EDIT PRODUCT ======================
// EDIT PRODUCT DETAILS
export const updateProductDetails = (data, productId) => axios.patch(`product/update/${productId}`, data);
//====================
// EDIT COVER IMAGE
export const updateCoverImage = (formData, coverId) => axios.post(`product/update_cover/${coverId}`, formData);
//====================
// EDIT POSTER IMAGE
export const updatePosterImage = (formData, productId, posterX) => axios.patch(`product/upload_${posterX}/${productId}`, formData);
// DELETE POSTER IMAGE
export const deletePosterImage = (posterId, posterX) => axios.patch(`product/delete_${posterX}/${posterId}`);
//====================
// ADD PRODUCT IMAGE
export const addProductImage = (formData, productId) => axios.post(`product/add_image/${productId}`, formData);
// EDIT PRODUCT IMAGE
export const updateProductImage = (formData, imageId) => axios.patch(`product/update_image/${imageId}`, formData);
// DELETE PRODUCT IMAGE
export const deleteProductImage = (imageId) => axios.delete(`product/delete_image/${imageId}`);

// ========================== DELETE PRODUCT (SOFT) ===============
// DELETE PRODUCT
export const deleteProduct = (productId) => axios.patch(`product/inactive/${productId}`);
