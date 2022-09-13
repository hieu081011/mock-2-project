import React from 'react'
import './style.scss'
import ReactPaginate from 'react-paginate';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { useQuery } from '../../../hooks/useQuery';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Pagination = () => {
    const navigate = useNavigate()
    const query = useQuery()
    const page = query.get('page') || 1
    const location = useLocation()
    const path = location.pathname.split('/')[2]
    const { totalPages } = useSelector(state => state[path].current)
    return (
        <>
            <div className='Pagination'>
                <ReactPaginate

                    nextLabel={<FaAngleRight />}
                    previousLabel={<FaAngleLeft />}
                    forcePage={Number(page) - 1 || 0}
                    pageCount={Number(totalPages) || 0}
                    activeClassName='active'
                    renderOnZeroPageCount={null}
                    onClick={(clickEvent) => {
                        !isNaN(clickEvent.nextSelectedPage) && navigate(`${location.pathname}?page=${clickEvent.nextSelectedPage + 1}`)
                    }}
                />
            </div>
        </>
    )
}
export default Pagination