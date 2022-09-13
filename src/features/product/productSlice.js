import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../../api/product.js'
export const getProducts = createAsyncThunk('/product/getProducts', async ({ page, size, sortBy, order }) => {
    try {
        const { data: { data } } = await api.getAllProducts({ page, size, sortBy, order })
        return data
    } catch (error) {
        return error
    }
})

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        loading: false,
        current: {}
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.loading = false
                state.current = action.payload
                console.log(action.payload)
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.loading = false
                console.log(action.payload)
            })
    }
})
const { reducer: productReducer } = productSlice

export default productReducer