import './style.scss'
const ProductDetailWriteReview = () => {
    return (
        <div className='ProductDetailWriteReview'>
            <h2 className='ProductDetailWriteReview__header'>
                write a customer review
            </h2>
            <h3 className='ProductDetailWriteReview__title'>Rating</h3>
            <select placeholder='Select...'>
                <option>45</option>
            </select>
            <h3 className='ProductDetailWriteReview__title'>Comment</h3>
            <textarea rows="4" cols="50" />
            <button className='ProductDetailWriteReview__button'>SUBMIT</button>
            <div className='ProductDetailWriteReview__error'>Please sign in to write a review</div>
        </div>
    )
}
export default ProductDetailWriteReview