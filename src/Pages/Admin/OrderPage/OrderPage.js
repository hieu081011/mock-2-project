import React, { useState, useEffect } from 'react'
import './style.scss'
import Table from '../../../Components/Admin/Table/Table'
import { useQuery } from '../../../hooks/useQuery'
import { useSelector, useDispatch } from 'react-redux'
import { getOrders } from '../../../features/order/orderSlice'
const OrderPage = () => {
    const query = useQuery()
    const dispatch = useDispatch()
    const { result } = useSelector(state => state.order.current)
    const [displayOptions, setDisplayOptions] = useState({
        sortBy: 'id',
        order: 'asc',
        size: 5,
    })
    const page = query.get('page') || 1

    useEffect(() => {
        dispatch(getOrders({ page, ...displayOptions }))
    }, [displayOptions, page])
    return (
        <>
            <div className='OrderPage'>
                <Table type={'order'} page={page} display={displayOptions} setDisplayOptions={setDisplayOptions} data={result} />
            </div>
        </>
    )
}
export default OrderPage