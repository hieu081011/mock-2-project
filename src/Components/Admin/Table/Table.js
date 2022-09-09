import React, { useMemo } from 'react'
import './style.scss'
import { FaSort } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import ProductItem from '../Product/ProductItem/ProductItem'
import UserItem from '../User/UserItem/UserItem'
import OrderItem from '../Order/OrderItem/OrderItem'
import Pagination from '../Pagination/Pagination'

function displayOptions(type) {
    if (type === 'product') {
        return {
            filterOptions: ['ID', 'Product', 'Brand', 'Category', 'Stock', 'Price', 'Rating'],
            item: <ProductItem />,
            query: 'Search products'
        }
    }
    if (type === 'user') {
        return {
            filterOptions: ['ID', 'User', 'Contact', 'Status', 'Verify Email', 'Verify Contact'],
            item: <UserItem />,
            query: 'Search user'
        }
    }
    if (type === 'order') {
        return {
            filterOptions: ['ID', 'User ID', 'Amount', 'Address', 'Contact', 'Date', 'Paided', 'Status'],
            item: <OrderItem />,
            query: 'Search order'
        }
    }
}
const Table = ({ type }) => {
    // const displayOptions = ['ID', 'User', 'Contact', 'Status', 'Verify Email', 'Verify Contact']
    const tableType = useMemo(() => displayOptions(type), [])
    return (<>
        <div className='Table'>
            <div className='Table__searchSection'>
                <div className='Table__searchSection--searchBox'>
                    <span><FiSearch /></span>
                    <input type='text' placeholder={tableType.query}></input>
                </div>
            </div>
            <div className='Table__displayOptions'>
                {
                    tableType.filterOptions.map((item) => (
                        <div key={item}>
                            {item}
                            <span><FaSort /></span>

                        </div>
                    ))
                }

            </div>
            <div className='Table__content'>
                {tableType.item}
                {tableType.item}
                {tableType.item}



            </div>
            <div className='Table__paginate'>
                <Pagination />
                <div >
                    <div>Items per page</div>
                    <select>
                        <option>10</option>
                        <option>12</option>
                    </select>
                </div>
            </div>
        </div>
    </>)
}
export default Table