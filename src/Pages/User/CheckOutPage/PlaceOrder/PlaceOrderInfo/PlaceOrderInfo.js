import './style.scss'

const PlaceOrderInfo = ({ shippingForm, items }) => {

    return (
        <div className="PlaceOrderInfo">
            <div className='PlaceOrderInfo__wrapper'>
                <div className='PlaceOrderInfo__wrapper--title'>
                    SHIPPING
                </div>
                <div className='PlaceOrderInfo__wrapper--address'>
                    Address: {shippingForm.address}, {shippingForm.city}, {shippingForm.country}
                </div>
            </div>
            <div className='PlaceOrderInfo__wrapper'>
                <div className='PlaceOrderInfo__wrapper--title'>
                    PAYMENT METHOD
                </div>
                <div className='PlaceOrderInfo__wrapper--method'>Method: PayPal</div>
            </div>
            <div className='PlaceOrderInfo__wrapper'>
                <div className='PlaceOrderInfo__wrapper--title'>
                    ORDER ITEMS
                </div>
                {items.map(item => (
                    <div key={item.id} className='PlaceOrderInfo__wrapper--item'>
                        <div>
                            <img src={item.itemCartInfo.images[0].url} />
                        </div>
                        <h3>{item.itemCartInfo.name}</h3>
                        <h3>{item.quantity} x ${item.price} = $ {item.quantity * item.price}</h3>
                    </div>

                ))}
            </div>
        </div>
    )
}
export default PlaceOrderInfo