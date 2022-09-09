import './style.scss'
const PlaceOrderSummary = () => {
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
                    $599.99
                </div>
            </div>
            <div className='PlaceOrderSummary__field'>
                <div className='PlaceOrderSummary__field--name'>
                    Shipping
                </div>
                <div className='PlaceOrderSummary__field--price'>
                    $0.00
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
                    $689.99
                </div>
            </div>
            <div className='PlaceOrderSummary__button'>
                <button>Place order</button>
            </div>
        </div>
    )
}
export default PlaceOrderSummary