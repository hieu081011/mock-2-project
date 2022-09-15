import './style.scss'
import { useNavigate } from 'react-router-dom'
const SubTotal = ({ cart, length, items }) => {
    const navigate = useNavigate()
    const handleToCheckOut = () => {
        if (length !== 0) {
            navigate('/checkout', { state: { from: '/cart', items, cart } })
        }
    }
    return (
        <div className='SubTotal'>
            <div className='SubTotal__top'>
                <div className='SubTotal__top--itemCount'>subtotal ({length}) items</div>
                <div className='SubTotal__top--totalPrice'>
                    ${cart.totalPrice}
                </div>
            </div>
            <div className='SubTotal__button'>
                <button onClick={handleToCheckOut}>Proceed to checkout</button>
            </div>
        </div>
    )
}
export default SubTotal