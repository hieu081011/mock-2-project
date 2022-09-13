import './style.scss'
import { BsFillCartFill, BsFillPersonFill, BsFillCaretDownFill } from 'react-icons/bs'
import { RiProfileFill, RiLogoutBoxRLine } from 'react-icons/ri'
import { useState } from 'react'
import { useAuth } from '../../../context/ContextProvider'

const Header = () => {
    const [showSetting, setShowSetting] = useState(false)
    const { auth } = useAuth()

    if (auth?.user?.role === 'admin')
        return (<></>)
    return (
        <div className="Header">
            <div className='Header__left'>
                <a className='Header__left--logo'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWECCty22pifDJvSyBny-IkOwpjDgkR1NiJA&usqp=CAU' /></a>
                <div className='Header__left--search'>
                    <input type='search' placeholder='Search Products...' />
                    <button>Search</button>
                </div>
            </div>
            <div className='Header__right'>
                <a className='Header__right--cart'><span><BsFillCartFill /></span>CART</a>
                <a className='Header__right--sign in'><span><BsFillPersonFill /></span>SIGN IN</a>
                <div className='Header__right--user' onClick={() => setShowSetting(!showSetting)}>John Wick<span><BsFillCaretDownFill /></span></div>
                {showSetting &&
                    <div className='Header__right--dropDown'>
                        <a>Profile<span><RiProfileFill /></span></a>
                        <a>Log Out<span><RiLogoutBoxRLine /></span></a>
                    </div>
                }
            </div>
        </div>
    )
}
export default Header