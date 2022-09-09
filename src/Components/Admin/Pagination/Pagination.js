import React from 'react'
import './style.scss'
import ReactPaginate from 'react-paginate';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
const Pagination = () => {
    return (
        <>
            <div className='Pagination'>
                <ReactPaginate
                    pageCount={5}
                    nextLabel={<FaAngleRight />}
                    previousLabel={<FaAngleLeft />}
                    activeClassName='active'
                />
            </div>
        </>
    )
}
export default Pagination