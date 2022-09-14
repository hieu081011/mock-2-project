import React from 'react'
import './style.scss'
import { RiDraftLine, RiDeleteBin6Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
const OrderItem = ({ index, userId, createdAt, isPaid, status, price, address, contact, id }) => {
    return (
        <div className='OrderItem'>
            <div className='OrderItem__id'>1</div>
            <div className='OrderItem__orderid'>
                <Link to={`/admin/order/${id}`}>{userId}</Link></div>
            <div className='OrderItem__amount'>${price}</div>
            <div className='OrderItem__address'>{address}</div>
            <div className='OrderItem__contact'>{contact}</div>
            <div className='OrderItem__date'>{createdAt.substring(0, 10)}</div>
            <div className='OrderItem__paided'><span>{isPaid ? 'Yes' : 'No'}</span></div>
            <div className='OrderItem__status'>{status}</div>
            <div className='OrderItem__buttons'>
                <button><RiDraftLine /></button>
                <button><RiDeleteBin6Line /></button>
            </div>
        </div>
    )
}
export default OrderItem