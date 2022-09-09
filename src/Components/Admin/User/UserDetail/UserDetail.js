import React from 'react'
import './style.scss'
import { BsCheck2 } from 'react-icons/bs'
const UserDetail = () => {
    return (
        <div className='UserDetail'>
            <div className='UserDetail__top'>
                <div className='UserDetail__top--avatar'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr7uUQCPN7lnbXiGu3yjuW82-8lVqCSlsQrg&usqp=CAU' />
                </div>
                <h2 className='UserDetail__top--name'>Lady GaGa</h2>
                <h3 className='UserDetail__top--email'>ladygaga@gmail.com</h3>
                <h4 className='UserDetail__top--phone'>09454545322</h4>
            </div>
            <div className='UserDetail__bottom'>
                <div><h3>Role:</h3><span className='role'>Admin</span></div>
                <div><h3>Status:</h3><span className='role'>Active</span></div>
                <div><h3>Verify Email:</h3><span className='check'><BsCheck2 /></span></div>
                <div><h3>Verify Contact:</h3><span className='check'><BsCheck2 /></span></div>
            </div>
        </div>
    )
}
export default UserDetail