import './style.scss'
import PlaceOrderInfo from './PlaceOrderInfo/PlaceOrderInfo'
import PlaceOrderSummary from './PlaceOrderSummary/PlaceOrderSummary'
const PlaceOrder = () => {
    return (
        <div className="PlaceOrder">
            <PlaceOrderInfo />
            <PlaceOrderSummary />
        </div>
    )
}
export default PlaceOrder