import './style.scss'
import { useAuth } from '../../../../context/ContextProvider'
import { createReview } from '../../../../api/product'
import { useState } from 'react'
const ProductDetailWriteReview = ({ product }) => {
    const { auth } = useAuth()
    const [content, setContent] = useState('')
    const [rating, setRating] = useState(1)
    const handleSubmitReview = async () => {
        if (!rating || !content) {
            alert('please fill content before submit')
            return;
        }
        try {
            const { data } = await createReview({ content, rating, productId: product.id })
            console.log(data)
            alert('Added review')
            window.location.reload()
        } catch (error) {
            alert('Failed to create review')
        }
    }
    return (
        <div className='ProductDetailWriteReview'>

            <h2 className='ProductDetailWriteReview__header'>
                write a customer review
            </h2>
            {auth?.user?.role === 'user' ? <>
                <h3 className='ProductDetailWriteReview__title'>Rating</h3>
                <select placeholder='Select...' value={rating} onChange={(e) => setRating(e.target.value)}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <h3 className='ProductDetailWriteReview__title'>Comment</h3>
                <textarea rows="4" cols="50" value={content} onChange={(e) => setContent(e.target.value)} />
                <button className='ProductDetailWriteReview__button' onClick={handleSubmitReview}>SUBMIT</button>
            </> :
                <div className='ProductDetailWriteReview__error'>Please sign in to write a review</div>
            }



        </div>
    )
}
export default ProductDetailWriteReview