import React, { useEffect, useState } from 'react'
import './style.scss'
import { BsCheck2, BsArrowLeftSquareFill } from 'react-icons/bs'
import { useNavigate, useParams } from 'react-router-dom'
import { getUser } from '../../../../api/user'
import LoadingSpinner from '../../../LoadingSpinner/LoadingSpinner'
const UserDetail = () => {
    const [user, setUser] = useState({})
    const navigate = useNavigate()
    const { userId } = useParams()
    useEffect(() => {
        async function getuser() {
            try {
                const { data: { data } } = await getUser(userId)
                setUser(data)
            } catch (error) {
                console.log(error)
            }
        }
        if (userId) {
            getuser()
        }
    }, [])

    return (
        <div className='UserDetail'>
            {user?.role ?
                <>
                    <div className='UserDetail__backButton'><button onClick={() => navigate('/admin/user')}><BsArrowLeftSquareFill /> Back</button></div>
                    <div className='UserDetail__top'>
                        <div className='UserDetail__top--avatar'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr7uUQCPN7lnbXiGu3yjuW82-8lVqCSlsQrg&usqp=CAU' />
                        </div>
                        <h2 className='UserDetail__top--name'>{user.username}</h2>
                        <h3 className='UserDetail__top--email'>{user.email}</h3>
                        <h4 className='UserDetail__top--phone'>{user.contact}</h4>
                    </div>
                    <div className='UserDetail__bottom'>
                        <div><h3>Role:</h3><span className='role'>{user.role}</span></div>
                        <div><h3>Status:</h3><span className='role'>Active</span></div>
                        <div><h3>Verify Email:</h3><span className='check'><BsCheck2 /></span></div>
                        <div><h3>Verify Contact:</h3><span className='check'><BsCheck2 /></span></div>
                    </div>
                </>
                : <LoadingSpinner />}

        </div>
    )
}
export default UserDetail