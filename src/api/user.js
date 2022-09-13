import { API } from './index'

export const getMyProfile = () => API.get(`/users/my-profile`)
export const createUser = (user) => API.post(`/users`, user)
export const queryUser = ({ size, page }) => API.get(`/users?size=${size}&page=${page}`)
export const changeContact = (contact) => API.patch(`/users/change-contact`, { contact })
export const changeEmail = (email) => API.patch(`/users/change-email`, { email })
export const changePassword = (oldPassword, newPassword) => API.patch(`/users/change-password`, { oldPassword, newPassword })
export const changeUsername = (username) => API.patch(`/users/change-username`, { username })
export const changeAvatar = (avatarUrl) => API.patch(`/users/change-avatar`, { "avatar": avatarUrl })
export const getUser = (userId) => API.get(`/users/${userId}`)
export const updateUser = (userId, { contact, username }) => API.patch(`/users/${userId}`, { contact, username })
export const deleteUser = (userId) => API.delete(`/users/${userId}`)
