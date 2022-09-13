import { API } from './index'

export const register = ({ username, email, password }) => API.post(`/auth/register`, { username, email, password })
export const login = ({ email, password }) => API.post('/auth/login', { email, password, "deviceId": `deviceId-${email}` })
export const logout = (refreshToken) => API.post('/auth/logout', { refreshToken, "deviceId": "deviceId-hieuvt22@gmail.com" })
export const getNewToken = (refreshToken) => API.post(`/auth/refresh-tokens`, { refreshToken, "deviceId": "deviceId-hieuvt22@gmail.com" })
export const forgotPassword = (email) => API.post('/auth/forgot-password', { email })
export const sendVerifiEmail = (deviceId) => API.post('/auth/send-verification-email', { "deviceId": "deviceId-hieuvt22@gmail.com" })
export const verifyEmail = (token) => API.post(`/auth/verify-email?token=${token}`, { "deviceId": "deviceId-hieuvt22@gmail.com" })