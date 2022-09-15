import './style.scss'
import { createOrder } from '../../../../../api/order'
import { useAuth } from '../../../../../context/ContextProvider'
import { useNavigate } from 'react-router-dom'
import Paypal from './Paypal/Paypal'
const PlaceOrderSummary = ({ shippingForm, items, type, orderId, setPaid }) => {
    const itemPrice = items?.reduce((prev, current) => { return prev + current.price * current.quantity }, 0) || 10
    const shipPrice = itemPrice > 500 ? 0 : 10
    const { auth } = useAuth()
    const navigate = useNavigate()
    const handleClickOrder = async () => {
        try {
            const { data: { data } } = await createOrder({
                paymentMethod: "Online",
                address: `${shippingForm.address}, ${shippingForm.city}, ${shippingForm.country}`,
                contact: '0326174848',
                totalPrice: itemPrice + shipPrice + 90,
                userId: auth.user.id
            }, items.map(item => {
                return {
                    productId: item.itemCartInfo.id,
                    quantity: item.quantity,
                    price: item.price,
                    total: item.total
                }
            }))
            console.log(data)
            alert('Success create order')
            navigate('/order', { state: { data } })
        } catch (error) {
            alert('Falied to create order')
        }
    }

    return (
        <div className="PlaceOrderSummary">
            <div className='PlaceOrderSummary__title'>
                Order summary
            </div>
            <div className='PlaceOrderSummary__field'>
                <div className='PlaceOrderSummary__field--name'>
                    Items
                </div>
                <div className='PlaceOrderSummary__field--price'>
                    ${itemPrice}
                </div>
            </div>
            <div className='PlaceOrderSummary__field'>
                <div className='PlaceOrderSummary__field--name'>
                    Shipping
                </div>
                <div className='PlaceOrderSummary__field--price'>
                    ${shipPrice}
                </div>
            </div>
            <div className='PlaceOrderSummary__field'>
                <div className='PlaceOrderSummary__field--name'>
                    Tax
                </div>
                <div className='PlaceOrderSummary__field--price'>
                    $90.00
                </div>
            </div>
            <div className='PlaceOrderSummary__field'>
                <div className='PlaceOrderSummary__field--name'>
                    Total
                </div>
                <div className='PlaceOrderSummary__field--price'>
                    ${shipPrice + itemPrice + 90}
                </div>
            </div>
            <div className='PlaceOrderSummary__button'>
                {type === 'order' ?
                    <Paypal orderId={orderId} setPaid={setPaid} /> :
                    <button onClick={handleClickOrder}>Place order</button>
                }
            </div>
        </div>
    )
}
export default PlaceOrderSummary