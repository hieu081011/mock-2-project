import React from 'react'
import './style.scss'
import { RiDraftLine, RiDeleteBin6Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
const OrderItem = () => {
    return (
        <div className='OrderItem'>
            <div className='OrderItem__id'>1</div>
            <div className='OrderItem__userid'>102
                <Link to='/order/123'></Link></div>
            <div className='OrderItem__amount'>$1562</div>
            <div className='OrderItem__address'>Ha Noi</div>
            <div className='OrderItem__contact'>0204050604</div>
            <div className='OrderItem__date'>09/03/2022</div>
            <div className='OrderItem__paided'><span>No</span></div>
            <div className='OrderItem__status'>Processing</div>
            <div className='OrderItem__buttons'>
                <button><RiDraftLine /></button>
                <button><RiDeleteBin6Line /></button>
            </div>
        </div>
    )
}
export default OrderItem