import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import './style.scss'
const ProductDetailInfo = ({ product }) => {
    return (
        <div className="ProductDetailInfo">
            <div className='ProductDetailInfo__name'>
                {product.name}
            </div>
            <div className='ProductDetailInfo__rating'>
                <span className='ProductDetailInfo__rating--stars'><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /></span>
                <span className='ProductDetailInfo__rating--reviews'>{product.numOfReviews} reviews</span>
            </div>
            <div className='ProductDetailInfo__price'>
                Price: <span>${product.price}.99</span>
            </div>
            <div className='ProductDetailInfo__description'>
                Description: {product.description}
            </div>
        </div>
    )
}
export default ProductDetailInfo