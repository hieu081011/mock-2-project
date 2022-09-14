import './style.scss'
import ReactPaginate from 'react-paginate'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const HomeProductPaginate = ({ page, totalPages }) => {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <div className='HomeProductPaginate'>
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
    )
}
export default HomeProductPaginate