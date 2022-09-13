import { API } from './index'

export const getAllProducts = ({ page, size, sortBy, order }) => API.get(`/products?page=${page}&size=${size}&sortBy=${sortBy}&order=${order}`)
export const createProduct = (productInfo) => API.post(`/products`, productInfo)
export const getProduct = (productId) => API.get(`/products/${productId}`)
export const updateProduct = (productId, productInfo) => API.patch(`/products/${productId}`, productInfo)
export const createReview = (productId, review) => API.post(`/products/${productId}/reviews`, review)
export const deleteProduct = (productId) => API.delete(`/products/${productId}`)
export const updateMedia = (mediaId, url) => API.patch(`/media/${mediaId}`, { url })
export const upload = (image) => API.post(`/uploads`, { image })
export const searchProducts = (keyword) => API.get(`/search?keyword=${keyword}`)
export const getAllCategories = () => API.get(`/products/get-all-categories`)
