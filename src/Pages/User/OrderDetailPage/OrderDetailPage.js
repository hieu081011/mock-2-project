import './style.scss'
import PlaceOrderSummary from '../CheckOutPage/PlaceOrder/PlaceOrderSummary/PlaceOrderSummary'
import { useLocation, Navigate } from 'react-router-dom'
import { useAuth } from '../../../context/ContextProvider'
import { useState } from 'react'
const OrderDetailPage = () => {
    const location = useLocation()
    const { auth } = useAuth()
    const [paid, setPaid] = useState(false)
    if (!location.state?.data) {
        return <Navigate to='/login' />
    }
    function createDate() {
        let today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;
        return today
    }
    console.log(location.state.data)
    const { address, id, } = location.state.data.order
    const items = location.state.data.items
    return (
        <div className="OrderDetailPage">
            <div className='OrderDetailPage__content'>
                <div className='OrderDetailPage__content--header'>
                    ORDER {id}
                </div>
                <div className='OrderDetailPage__content--field'>
                    <div>Shipping </div>
                    <h3>Name: {auth.user.username}</h3>
                    <h3>Email: {auth.user.email}</h3>
                    <h3>Address: {address}</h3>
                    <div className='errorStatus'>Not deliverd</div>
                </div>
                <div className='OrderDetailPage__content--field'>
                    <div>Payment method</div>
                    <h3>Method: Paypal</h3>
                    {!paid ?
                        <div className='errorStatus'>Not Paid</div> :
                        <div className='successStatus'>Paided on {createDate()}</div>
                    }
                </div>
                <div className='OrderDetailPage__content--field'>
                    <div>Payment method</div>
                    <h3>Method: Paypal</h3>
                    {items.map((item) =>
                    (
                        <div key={item.id} className='OrderDetailPage__content--field-item'>
                            <div>
                                <img src={item.itemInfo.images[0].url} />
                            </div>
                            <h3>{item.itemInfo.name}</h3>
                            <h3>{item.quantity} x ${item.price} = $ {item.total}</h3>
                        </div>
                    )
                    )}

                </div>
            </div>
            <PlaceOrderSummary type='order' orderId={id} setPaid={setPaid} />
        </div>
    )
}
export default OrderDetailPage