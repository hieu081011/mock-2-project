import { API } from './index'
export const createCart = (cart, itemArr) => API.post('/cart', { cart, itemArr })
export const createItem = ({ cartId, productId, quantity, price, total }) => API.post('/cart/create-item', { cartId, productId, quantity, price, total })
export const getMyCart = () => API.get('/cart/my-carts')
export const getCart = (cartId) => API.get(`/cart/${cartId}`)
export const updateCart = (cartId, totalPrice) => API.post(`/cart/${cartId}`, { totalPrice })
export const updateItem = (itemId, quantity) => API.patch(`/cart/manage-item/${itemId}`, { quantity })
export const deleteItem = (itemId) => API.delete(`/cart/manage-item/${itemId}`)
export const deleteCart = (cartId, quantity) => API.post(`cart/${cartId}`, { quantity })

