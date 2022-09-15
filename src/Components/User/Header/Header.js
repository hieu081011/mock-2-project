import './style.scss'
import { BsFillCartFill, BsFillPersonFill, BsFillCaretDownFill } from 'react-icons/bs'
import { RiProfileFill, RiLogoutBoxRLine } from 'react-icons/ri'
import { useState } from 'react'
import { useAuth } from '../../../context/ContextProvider'
import { Link } from 'react-router-dom'
import { logout } from '../../../api/auth'
const Header = () => {
    const [showSetting, setShowSetting] = useState(false)
    const { auth, setAuth } = useAuth()
    const handleLogout = async () => {
        const refreshToken = localStorage.getItem('refresh_token')
        try {
            await logout(refreshToken)
        } catch (error) {
            console.log(error)
        }
        localStorage.clear()
        setShowSetting(false)
        setAuth({})
    }
    if (auth?.user?.role === 'admin')
        return (<></>)
    return (
        <div className="Header">
            <div className='Header__left'>
                <Link to='/' className='Header__left--logo'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWECCty22pifDJvSyBny-IkOwpjDgkR1NiJA&usqp=CAU' /></Link>
                <div className='Header__left--search'>
                    <input type='search' placeholder='Search Products...' />
                    <button>Search</button>
                </div>
            </div>
            <div className='Header__right'>
                <Link to='/cart' className='Header__right--cart'><span><BsFillCartFill /></span>CART</Link>
                {auth?.user?.role === 'user' ?
                    <div className='Header__right--user' onClick={() => setShowSetting(!showSetting)}>{auth.user.username}<span><BsFillCaretDownFill /></span></div>
                    :
                    <Link to='/login' className='Header__right--signin'><span><BsFillPersonFill /></span>SIGN IN</Link>
                }


                {showSetting &&
                    <div className='Header__right--dropDown'>
                        <h2>Profile<span><RiProfileFill /></span></h2>
                        <h2 onClick={handleLogout}>Log Out<span><RiLogoutBoxRLine /></span></h2>
                    </div>
                }
            </div>
        </div>
    )
}
export default Header