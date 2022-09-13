import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../../api/user.js'
export const getUsers = createAsyncThunk('/user/getUsers', async ({ page, size }) => {
    try {
        const { data: { data } } = await api.queryUser({ page, size, })
        return data
    } catch (error) {
        return error
    }
})

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        current: {}
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.loading = false
                state.current = action.payload
                console.log(action.payload)
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.loading = false
                console.log(action.payload)
            })
    }
})
const { reducer: userReducer } = userSlice

export default userReducer