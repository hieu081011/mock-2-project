import './style.scss'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { countingStars } from '../../../../../features/coutingStars'
const HomeProduct = ({ name, numOfReviews, price, rating, id, images }) => {
    return (
        <div className="HomeProduct">
            <div className='HomeProduct__imgWrapper'>
                <img src={images} />

            </div>
            <div className='HomeProduct__content'>
                <Link to={`/product/${id}`} className='HomeProduct__content--name'>{name}</Link>
                <div className='HomeProduct__content--rating'>
                    {countingStars(rating)}
                </div>
                <div className='HomeProduct__content--review'>{numOfReviews} reviews</div>

                <div className='HomeProduct__content--price'><span>$</span>{price}.99</div>
            </div>
        </div>
    )
}
export default HomeProduct