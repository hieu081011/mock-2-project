import React from 'react'
import './style.scss'
import { FaBell, FaSearch, FaBars } from 'react-icons/fa'
const AppBar = () => {
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
                            <h3>Nam Nguyen</h3>
                            <h4>Admin</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppBar