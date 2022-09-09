import './style.scss'
const PlaceOrderInfo = () => {
    return (
        <div className="PlaceOrderInfo">
            <div className='PlaceOrderInfo__wrapper'>
                <div className='PlaceOrderInfo__wrapper--title'>
                    SHIPPING
                </div>
                <div className='PlaceOrderInfo__wrapper--address'>
                    Address: Hanoi, Hanoi 100000. Viet nam
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
                <div className='PlaceOrderInfo__wrapper--item'>
                    <div>
                        <img src='data:image/jpeg;base64,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' />
                    </div>
                    <h3>iPhone 11 Pro 256GB Memory</h3>
                    <h3>1 x $599.99 = $ 599.99</h3>
                </div>
            </div>
        </div>
    )
}
export default PlaceOrderInfo