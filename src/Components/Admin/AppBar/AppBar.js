import React from 'react'
import './style.scss'
import { FaBell, FaSearch, FaBars } from 'react-icons/fa'
import { useAuth } from '../../../context/ContextProvider'
import { FiLogOut } from 'react-icons/fi'
import { logout } from '../../../api/auth'
const AppBar = () => {
    const { auth, setAuth } = useAuth()
    const handleLogOut = async () => {
        const refreshToken = localStorage.getItem('refresh_token')
        try {
            await logout(refreshToken)
        } catch (error) {
            console.log(error)
        }
        localStorage.clear()
        setAuth({})
    }
    return (
        <>
            <div className='AppBar'>
                <div className='AppBar__left'>
                    <span className='AppBar__left--options'><FaBars /></span>
                    <div className='AppBar__left--searchBox'>
                        <span><FaSearch /></span>
                        <input type='text' placeholder='Search'></input>
                    </div>
                </div>
                <div className='AppBar__right'>
                    <div className='AppBar__right--notify'>
                        <span><FaBell /></span>
                        <span>3</span>
                    </div>
                    <div className='AppBar__right--info'>
                        <div>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnfoRLDgUkFrFW68UD_RvX0SXOF9L7jKxVaQ&usqp=CAU' />

                        </div>
                        <div>
                            <h3>{auth.user.username}</h3>
                            <h4>Admin</h4>
                        </div>
                        <div>
                            <button onClick={handleLogOut}><FiLogOut /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppBar