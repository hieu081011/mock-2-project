import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../../api/order.js'
export const getOrders = createAsyncThunk('/order/getOrders', async ({ page, size, sortBy, order }) => {
    try {
        const { data: { data: { orders } } } = await api.getOrders({ page, size, sortBy, order })
        return orders
    } catch (error) {
        return error
    }
})

export const orderSlice = createSlice({
    name: 'order',
    initialState: {
        loading: false,
        current: {}
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getOrders.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getOrders.fulfilled, (state, action) => {
                state.loading = false
                state.current = action.payload
                console.log(action.payload)
            })
            .addCase(getOrders.rejected, (state, action) => {
                state.loading = false
                console.log(action.payload)
            })
    }
})
const { reducer: orderReducer } = orderSlice

export default orderReducer