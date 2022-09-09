import './style.scss'
const PaymentScreen = () => {
    return (
        <div className="PaymentScreen">
            <div className="PaymentScreen__header"></div>
            <div className="PaymentScreen__select">
                Select Method
            </div>
            <div className="PaymentScreen__methods">
                <div className="PaymentScreen__methods--method">
                    <input type='radio' />
                    <label>Paypal or Credit Cart</label>
                </div>
            </div>
            <button>Continue</button>
        </div>
    )
}
export default PaymentScreen