import './style.scss'
import { IoMdRemove, IoMdAdd } from 'react-icons/io'
import { useState } from 'react'
import { createItem } from '../../../../api/cart'
const ProductDetailAddToCart = ({ product }) => {
    const [quantity, setQuantity] = useState(1)
    const handleAddToCart = async () => {
        try {
            await createItem({ cartId: 630, productId: product.id, quantity, price: product.price, total: product.price * quantity })
            alert('added success')
        } catch (error) {
            console.lor(error)
        }
    }
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
                        <button onClick={() => setQuantity(quantity - 1)}><IoMdRemove /></button>
                        <input type='text' value={quantity} />
                        <button onClick={() => setQuantity(quantity + 1)}><IoMdAdd /></button>

                    </div>
                </div>

            </div>
            <div className='ProductDetailAddToCart__button'>
                <button onClick={handleAddToCart}>ADD TO CART</button>
            </div>
        </div>
    )
}
export default ProductDetailAddToCart