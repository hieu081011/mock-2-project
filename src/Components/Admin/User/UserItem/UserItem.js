import React from 'react'
import './style.scss'
import { RiDeleteBin6Line, RiDraftLine, RiStarFill, RiStarLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const UserItem = () => {
    return (
        <>
            <div className='UserItem'>
                <div className='UserItem__id'>1</div>
                <div className='UserItem__user'>
                    <div>
                        <img src='data:image/jpeg;base64,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'></img>
                    </div>
                    <div className='UserItem__user--info'>
                        <Link to='/user/123' />
                        <div>Lady Gaga <div>Admin</div></div>
                        <h4>ladygaga@gmail.com</h4>
                    </div>
                </div>
                <div className='UserItem__contact'>
                    0981727271
                </div>
                <div className='UserItem__status'>
                    Active
                </div>
                <div className='UserItem__verifyEmail'>
                    No
                </div>
                <div className='UserItem__verifyContact'>
                    Yes
                </div>

                <div className='UserItem__buttons'>
                    <button><RiDraftLine /></button>
                    <button><RiDeleteBin6Line /></button>
                </div>
            </div>
        </>
    )
}
export default UserItem