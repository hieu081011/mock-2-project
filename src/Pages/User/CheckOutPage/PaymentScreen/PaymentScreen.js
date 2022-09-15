import './style.scss'
import { BsCircle, BsCircleFill } from 'react-icons/bs'
const PaymentScreen = ({ setIndicator }) => {
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
            <button onClick={() => setIndicator('placeorder')}>Continue</button>
        </div>
    )
}
export default PaymentScreen