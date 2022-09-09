import React from 'react'
import './style.scss'
import Table from '../../../Components/Admin/Table/Table'
const UserPage = () => {
    return (
        <>
            <div className='UserPage'>
                <Table type={'user'} />
            </div>
        </>
    )
}
export default UserPage