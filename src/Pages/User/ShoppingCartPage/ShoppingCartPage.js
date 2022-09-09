import './style.scss'
import CartItems from './CartItem/CartItems'
import SubTotal from './SubTotal/SubTotal'
const ShoppingCartPage = () => {
    return (
        <div className='ShoppingCartPage'>
            <CartItems />
            <SubTotal />
        </div>
    )
}
export default ShoppingCartPage