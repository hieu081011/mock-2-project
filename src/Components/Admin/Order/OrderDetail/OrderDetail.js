import React from 'react'
import './style.scss'
import { MdCalendarToday, MdEditCalendar } from 'react-icons/md'
import { BsTruck } from 'react-icons/bs'
import { RiUser3Line } from 'react-icons/ri'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { useParams } from 'react-router-dom'
const OrderDetail = () => {
    const name = useParams()
    console.log(name)
    return (<>
        <div className='OrderDetail'>
            <div className='OrderDetail__firstSection'>
                <div className='OrderDetail__firstSection-left'>
                    <div>
                        <span><MdCalendarToday /></span>
                        <h4>Created at: 09/03/2022</h4>
                    </div>
                    <div>
                        <span ><MdEditCalendar /></span>
                        <h4>Updated at: 09/03/2022</h4>
                    </div>
                    <h3>Order ID : 789</h3>
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
                        <h4>Status: Processing</h4>
                        <h4>Pay method: Online</h4>
                        <h4>Paided: Yes</h4>
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
        </div>
    </>)
}
export default OrderDetail