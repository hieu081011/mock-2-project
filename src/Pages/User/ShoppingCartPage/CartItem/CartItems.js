import './style.scss'

import CartItem from './CartItem/CartItem'

const CartItems = ({ items }) => {


    return (
        <div className='CartItems'>
            <h2 className='CartItems__header'>
                Shopping cart
            </h2>
            {items && items.map((item) =>
                <CartItem item={item} />
            )}
            {items && items.length === 0 && <div>There is nothing in your cart!</div>}
        </div>
    )
}
export default CartItems