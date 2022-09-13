import React, { useEffect, useState } from 'react'
import './style.scss'
import Table from '../../../Components/Admin/Table/Table'
import { useQuery } from '../../../hooks/useQuery'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../../../features/product/productSlice'
const ProductPage = () => {
    const query = useQuery()
    const dispatch = useDispatch()
    const { result } = useSelector(state => state.product.current)

    const [displayOptions, setDisplayOptions] = useState({
        sortBy: 'id',
        order: 'asc',
        size: 5,
    })
    const page = query.get('page') || 1
    console.log(page)

    useEffect(() => {
        dispatch(getProducts({ page, ...displayOptions }))
    }, [displayOptions, page])
    return (
        <>
            <div className='ProductPage'>
                <Table type={'product'} page={page} display={displayOptions} setDisplayOptions={setDisplayOptions} data={result} />
            </div>
        </>
    )
}
export default ProductPage