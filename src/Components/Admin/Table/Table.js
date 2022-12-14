import React, { useMemo } from 'react'
import './style.scss'
import { FaSort } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import ProductItem from '../Product/ProductItem/ProductItem'
import UserItem from '../User/UserItem/UserItem'
import OrderItem from '../Order/OrderItem/OrderItem'
import Pagination from '../Pagination/Pagination'
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

function displayOptions(type) {
    if (type === 'product') {
        return {
            filterOptions: ['ID', 'Product', 'Brand', 'Category', 'Stock', 'Price', 'Rating'],
            grid: 'productGrid',
            query: 'Search products',
            mapCallback: (item) => <ProductItem name={item.name} key={item.id} id={item.id} brand={item.brand} category={item.category} countInStock={item.countInStock} price={item.price} rating={item.rating} images={item.images} />
        }
    }
    if (type === 'user') {
        return {
            filterOptions: ['ID', 'User', 'Contact', 'Status', 'Verify Email', 'Verify Contact'],
            grid: 'userGrid',
            query: 'Search user',
            mapCallback: (item) => <UserItem role={item.role} name={item.username} email={item.email} avatar={item.avatar} contact={item.contact} isEmailVerified={item.isEmailVerified} key={item.id} id={item.id} />
        }
    }
    if (type === 'order') {
        return {
            filterOptions: ['ID', 'User ID', 'Amount', 'Address', 'Contact', 'Date', 'Paided', 'Status'],
            grid: 'orderGrid',
            query: 'Search order',
            mapCallback: (item) => <OrderItem id={item.id} address={item.address} userId={item.userId} status={item.status} contact={item.contact} isPaid={item.isPaid} key={item.id} createdAt={item.createdAt} price={item.totalPrice} />
        }
    }
}
const Table = ({ type, setDisplayOptions, display, data, search, setSearch }) => {
    const location = useLocation()
    const navigate = useNavigate()
    const tableType = useMemo(() => displayOptions(type), [])
    const path = location.pathname.split('/')[2]
    const { loading } = useSelector(state => state[path])
    const handleSearch = () => {
        if (search) navigate(`/admin/${type}/search/${search}`)
    }
    return (<>
        <div className='Table'>
            <div className='Table__searchSection'>
                <div className='Table__searchSection--searchBox'>
                    <span onClick={handleSearch}><FiSearch /></span>
                    <input type='text' placeholder={tableType.query} value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
            </div>
            <div className={`Table__displayOptions ${tableType.grid}`}>
                {
                    tableType.filterOptions.map((item) => (
                        <div onClick={() => setDisplayOptions((state) => ({ ...state, sortBy: item.toLowerCase() }))} key={item}>
                            {item}
                            <span><FaSort /></span>
                        </div>
                    ))
                }
            </div>
            <div className='Table__content'>
                {!loading ? data && data.map(
                    tableType.mapCallback
                ) :
                    <LoadingSpinner />
                }
                {
                    !loading && data?.length === 0 && <div className='Table__content--empty'>No items found!</div>
                }
            </div>

            <div className='Table__paginate'>
                <Pagination />
                <div >
                    <div>Items per page</div>
                    <select value={display?.size} onChange={(e) => {
                        setDisplayOptions((state) => ({ ...state, size: e.target.value }));
                        navigate(`${location.pathname}`)
                    }}>

                        <option>5</option>
                        <option>7</option>
                        <option>10</option>
                    </select>
                </div>
            </div>
        </div>
    </>)
}
export default Table