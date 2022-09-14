import React, { useEffect, useState } from 'react'
import './style.scss'
import Table from '../../../Components/Admin/Table/Table'
import { useQuery } from '../../../hooks/useQuery'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts, searchProducts } from '../../../features/product/productSlice'
import { useLocation, useParams } from 'react-router-dom'
const ProductPage = () => {
    const query = useQuery()
    const dispatch = useDispatch()
    const location = useLocation()
    const { searchId } = useParams()
    const { result } = useSelector(state => state.product.current)

    const [search, setSearch] = useState('')
    const [displayOptions, setDisplayOptions] = useState({
        sortBy: 'id',
        order: 'asc',
        size: 5,
    })

    const page = query.get('page') || 1

    useEffect(() => {
        if (location.pathname === '/admin/product') {
            dispatch(getProducts({ page, ...displayOptions }))
        }
        if (location.pathname.match('/admin/product/search')) {
            dispatch(searchProducts({ keyword: searchId, page, ...displayOptions }))
        }
    }, [displayOptions, page, location])

    return (
        <>
            <div className='ProductPage'>
                <Table type={'product'} page={page} display={displayOptions} setDisplayOptions={setDisplayOptions} data={result} search={search} setSearch={setSearch} />
            </div>
        </>
    )
}
export default ProductPage