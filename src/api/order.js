import { API } from "./index";

export const createOrder = (order, itemArr) => API.post('/orders', { order, itemArr })
export const getMyOrder = () => API.get('/orders/my-orders')
export const getOrders = ({ page, size, sortBy, order }) => API.get(`/orders?page=${page}&size=${size}&sortBy=${sortBy}&order=${order}`)
export const getOrder = (orderId) => API.get(`/orders/${orderId}`)
export const updateIsPaid = (orderId) => API.patch(`/orders/paid/${orderId}`)
export const updateOrder = (orderId) => API.patch(`/orders/${orderId}`, { status: 'Shipping', isPaid: true })
