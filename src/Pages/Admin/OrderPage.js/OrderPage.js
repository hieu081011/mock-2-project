import React from 'react'
import './style.scss'
import Table from '../../../Components/Admin/Table/Table'
const OrderPage = () => {
    return (
        <>
            <div className='OrderPage'>
                <Table type={'order'} />
            </div>
        </>
    )
}
export default OrderPage