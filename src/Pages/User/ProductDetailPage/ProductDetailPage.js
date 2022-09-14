import './style.scss'
import ProductDetailInfo from './ProductDetailInfo/ProductDetailInfo'
import ProductDetailAddToCart from './ProductDetailAddToCart/ProductDetailAddToCart'
import ProductDetailReviews from './ProductDetailReviews/ProductDetailReviews'
import ProductDetailWriteReview from './ProductDetailWriteReview/ProductDetailWriteReview'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getProduct } from '../../../api/product'
import LoadingSpinner from '../../../Components/LoadingSpinner/LoadingSpinner'
const ProductDetailPage = () => {
    const { productId } = useParams()
    const [product, setProduct] = useState({})
    const [reviews, setReviews] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const getproduct = async function (id) {
            try {
                const { data: { data } } = await getProduct(id)
                console.log(data)
                setProduct(data.product)
                setReviews(data.reviews.result)
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }
        if (productId) {
            getproduct(productId)
        }
    }, [])
    return (
        <div className="ProductDetailPage">
            {loading ? <LoadingSpinner /> :
                <>
                    <div className='ProductDetailPage__imgWrapper'>
                        <img src={product.images && product?.images[0]?.url || 'null'} />

                    </div>
                    <ProductDetailInfo product={product} />
                    <ProductDetailAddToCart product={product} />
                    <ProductDetailReviews reviews={reviews} />
                    <ProductDetailWriteReview product={product} />
                </>
            }
        </div>
    )
}
export default ProductDetailPage