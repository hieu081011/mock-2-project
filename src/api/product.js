import { API } from './index'

export const getAllProducts = ({ page, size, sortBy, order }) => API.get(`/products?page=${page}&size=${size}&sortBy=${sortBy}&order=${order}`)
export const createProduct = (productInfo) => API.post(`/products`, productInfo)
export const getProduct = (productId) => API.get(`/products/${productId}`)
export const updateProduct = (productId, { name, brand, category, description, price, rating, countInStock, imageUrls }) => API.patch(`/products/${productId}`, { name, brand, category, description, price, rating, countInStock })
export const createReview = ({ productId, rating, content }) => API.post(`/products/${productId}/reviews`, { productId, rating, content })
export const deleteProduct = (productId) => API.delete(`/products/${productId}`)
export const updateMedia = (mediaId, url) => API.patch(`/media/${mediaId}`, { url })
export const upload = (image) => API.post(`/uploads`, { image })
export const searchProducts = ({ keyword, page, size, sortBy, order }) => API.get(`/search?keyword=${keyword}&page=${page}&size=${size}&sortBy=${sortBy}&order=${order}`)
export const getAllCategories = () => API.get(`/products/get-all-categories`)
