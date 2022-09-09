import './style.scss'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

const ProductDetailReviews = () => {
    return (
        <div className='ProductDetailReviews'>
            <h3 className='ProductDetailReviews__header'>REVIEWS</h3>
            <div className='ProductDetailReviews__review'>
                <h4 className='ProductDetailReviews__review--author'>
                    John Doe
                </h4>
                <div className='ProductDetailReviews__review--stars'>
                    <BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill />
                </div>
                <div className='ProductDetailReviews__review--date'>
                    2022-01-17
                </div>
                <div className='ProductDetailReviews__review--comment'>
                    Good product!
                </div>
            </div>
        </div>
    )
}
export default ProductDetailReviews