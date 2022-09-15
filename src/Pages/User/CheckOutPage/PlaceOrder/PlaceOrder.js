import './style.scss'
import PlaceOrderInfo from './PlaceOrderInfo/PlaceOrderInfo'
import PlaceOrderSummary from './PlaceOrderSummary/PlaceOrderSummary'
const PlaceOrder = ({ shippingForm, items }) => {
    return (
        <div className="PlaceOrder">
            <PlaceOrderInfo shippingForm={shippingForm} items={items} />
            <PlaceOrderSummary items={items} shippingForm={shippingForm} />
        </div>
    )
}
export default PlaceOrder