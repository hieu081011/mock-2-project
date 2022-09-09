import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import './style.scss'
const ProductDetailInfo = () => {
    return (
        <div className="ProductDetailInfo">
            <div className='ProductDetailInfo__name'>
                Sony playstation 4 pro white version
            </div>
            <div className='ProductDetailInfo__rating'>
                <span className='ProductDetailInfo__rating--stars'><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /></span>
                <span className='ProductDetailInfo__rating--reviews'>1 reviews</span>
            </div>
            <div className='ProductDetailInfo__price'>
                Price: <span>$399.99</span>
            </div>
            <div className='ProductDetailInfo__description'>
                Description: The ultimate home entertainment center starts with PlayStation. Whether you are into Gaming. Hd movies, television, music.
            </div>
        </div>
    )
}
export default ProductDetailInfo