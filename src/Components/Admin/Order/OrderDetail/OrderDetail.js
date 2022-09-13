import React, { useState, useEffect } from 'react'
import './style.scss'
import { MdCalendarToday, MdEditCalendar } from 'react-icons/md'
import { BsTruck, BsArrowLeftSquareFill } from 'react-icons/bs'
import { RiUser3Line } from 'react-icons/ri'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { useParams, useNavigate } from 'react-router-dom'
import LoadingSpinner from '../../../LoadingSpinner/LoadingSpinner'
import { getOrder } from '../../../../api/order'
const OrderDetail = () => {
    const [order, setOrder] = useState({})
    const navigate = useNavigate()
    const { orderId } = useParams()
    useEffect(() => {
        async function getorder() {
            try {
                const { data: { data } } = await getOrder(orderId)
                console.log(data)
                setOrder(data.order)
            } catch (error) {
                console.log(error)
            }
        }
        if (orderId) {
            getorder()
        }
    }, [])

    return (<>
        <div className='OrderDetail'>

            {
                order?.id ? <>
                    <div className='OrderDetail__backButton'>

                        <button onClick={() => navigate('/admin/order')}><BsArrowLeftSquareFill /> Back</button>
                    </div>
                    <div className='OrderDetail__firstSection'>
                        <div className='OrderDetail__firstSection-left'>
                            <div>
                                <span><MdCalendarToday /></span>
                                <h4>Created at: {order.createAt}</h4>
                            </div>
                            <div>
                                <span ><MdEditCalendar /></span>
                                <h4>Updated at: {order.updateAt}</h4>
                            </div>
                            <h3>Order ID : {order.id}</h3>
                        </div>
                        <div className='OrderDetail__firstSection-right'>
                            <div>
                                <label>Status</label>
                                <select>
                                    <option>Processing</option>
                                    <option>Shipping</option>
                                </select>
                            </div>
                            <div>
                                <label>Paided</label>
                                <select>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                            <button>Update order</button>
                        </div>
                    </div>
                    <div className='OrderDetail__secondSection'>
                        <div className='OrderDetail__secondSection--item'>
                            <span className='OrderDetail__secondSection--logo'><RiUser3Line /></span>
                            <div className='OrderDetail__secondSection--info'>
                                <h3>Customer</h3>
                                <h4>Name: Lady Gaga</h4>
                                <h4>Email: ladygaga@gmail.com</h4>
                                <h4>Phone: 0981717272</h4>
                            </div>
                        </div>
                        <div className='OrderDetail__secondSection--item'>
                            <span className='OrderDetail__secondSection--logo'><BsTruck /></span>
                            <div className='OrderDetail__secondSection--info'>
                                <h3>Order Info</h3>
                                <h4>Status: {order.status}</h4>
                                <h4>Pay method: {order.paymentMethod}</h4>
                                <h4>Paided: {order.isPaid ? "Yes" : "No"}</h4>
                            </div>
                        </div>
                        <div className='OrderDetail__secondSection--item'>
                            <span className='OrderDetail__secondSection--logo'><RiUser3Line /></span>
                            <div className='OrderDetail__secondSection--info'>
                                <h3>Deliver to</h3>
                                <h4>Address: Ha Noi</h4>
                                <h4>Contact: 0987126251</h4>
                                <h4>Shipper: GHTK</h4>
                            </div>
                        </div>
                    </div>
                    <div className='OrderDetail__thirdSection'></div>
                </> :
                    <LoadingSpinner />
            }

        </div>
    </>)
}
export default OrderDetail