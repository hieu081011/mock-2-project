import React from 'react'
import './style.scss'
import Table from '../../../Components/Admin/Table/Table'
const ProductPage = () => {
    return (
        <>
            <div className='ProductPage'>
                <Table type={'product'} />
            </div>
        </>
    )
}
export default ProductPage