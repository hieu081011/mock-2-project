import './style.scss'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import { countingStars } from '../../../../features/coutingStars'
const ProductDetailReviews = ({ reviews }) => {
    return (
        <div className='ProductDetailReviews'>
            <h3 className='ProductDetailReviews__header'>REVIEWS</h3>
            {reviews && reviews.map((review) =>
                <div className='ProductDetailReviews__review'>
                    <h4 className='ProductDetailReviews__review--author'>
                        {review.userReview.username}
                    </h4>
                    <div className='ProductDetailReviews__review--stars'>
                        {countingStars(Number(review.rating))}

                    </div>
                    <div className='ProductDetailReviews__review--date'>
                        {review.createdAt.substring(0, 10)}
                    </div>
                    <div className='ProductDetailReviews__review--comment'>
                        {review.content}
                    </div>
                </div>
            )}
        </div>
    )
}
export default ProductDetailReviews