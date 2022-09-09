import './style.scss'
import Shipping from './Shipping/Shipping'
import PaymentScreen from './PaymentScreen/PaymentScreen'
import PlaceOrder from './PlaceOrder/PlaceOrder'
const CheckOutPage = () => {
    return (
        <div className="CheckOutPage">
            <Shipping />
            <PaymentScreen />
            <PlaceOrder />
        </div>
    )
}
export default CheckOutPage
