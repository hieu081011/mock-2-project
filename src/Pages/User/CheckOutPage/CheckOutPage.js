import './style.scss'
import Shipping from './Shipping/Shipping'
import PaymentScreen from './PaymentScreen/PaymentScreen'
import PlaceOrder from './PlaceOrder/PlaceOrder'
import { useState } from 'react'
import LoadingSpinner from '../../../Components/LoadingSpinner/LoadingSpinner'
import { Navigate, useLocation } from 'react-router-dom'

const CheckOutPage = () => {
    const location = useLocation()

    const items = location.state?.items

    const [indicator, setIndicator] = useState('shipping')
    const [shippingForm, setShippingForm] = useState({ address: '', city: '', postalCode: '', country: '' })
    if (location.state?.from !== '/cart') {
        return <Navigate to='/cart' />
    }
    return (
        <div className="CheckOutPage">
            <div className='CheckOutPage__navigator'>
                <button className='active'>Sign In</button>
                <button className='active' >Shipping</button>
                <button className={indicator !== 'shipping' ? 'active' : null} >Payment</button>
                <button className={indicator === 'placeorder' ? 'active' : null} >Place Order</button>
            </div>
            {indicator === 'shipping' && <Shipping shippingForm={shippingForm} setShippingForm={setShippingForm} setIndicator={setIndicator} />}
            {indicator === 'method' && <PaymentScreen setIndicator={setIndicator} />}
            {indicator === 'placeorder' && <PlaceOrder items={items} setIndicator={setIndicator} shippingForm={shippingForm} />}

        </div>
    )
}
export default CheckOutPage
