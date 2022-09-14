import './style.scss'
import { IoMdRemove, IoMdAdd } from 'react-icons/io'
import { useState } from 'react'
const ProductDetailAddToCart = ({ product }) => {
    const [quaility, setQuaility] = useState(1)
    return (
        <div className="ProductDetailAddToCart">
            <div className='ProductDetailAddToCart__wrapper'>
                <div className='ProductDetailAddToCart__wrapper--key'>
                    Price:
                </div>
                <div className='ProductDetailAddToCart__wrapper--value'>
                    ${product.price}.99
                </div>


            </div>
            <div className='ProductDetailAddToCart__wrapper'>
                <div className='ProductDetailAddToCart__wrapper--key'>
                    Status:
                </div>
                <div className='ProductDetailAddToCart__wrapper--value'>
                    {product.countInStock} In Stock
                </div>
            </div>
            <div className='ProductDetailAddToCart__wrapper'>
                <div className='ProductDetailAddToCart__wrapper--key'>
                    Qty
                </div>
                <div className='ProductDetailAddToCart__wrapper--value'>
                    <div>
                        <button onClick={() => setQuaility(quaility - 1)}><IoMdRemove /></button>
                        <input type='text' value={quaility} />
                        <button onClick={() => setQuaility(quaility + 1)}><IoMdAdd /></button>

                    </div>
                </div>

            </div>
            <div className='ProductDetailAddToCart__button'>
                <button>ADD TO CART</button>
            </div>
        </div>
    )
}
export default ProductDetailAddToCart