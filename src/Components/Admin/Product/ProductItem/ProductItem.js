import React from 'react'
import './style.scss'
import { RiDeleteBin6Line, RiDraftLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import { deleteProduct } from '../../../../api/product'
import { countingStars } from '../../../../features/coutingStars'
const ProductItem = ({ id, name, brand, category, countInStock, price, rating, images }) => {
    const navigate = useNavigate()
    const handleDelete = async () => {
        try {
            await deleteProduct(id)
            alert('Delete product success')
            window.location.reload()
        } catch (error) {
            alert('Delete product failed')
        }
    }
    return (
        <>
            <div className='ProductItem'>
                <div className='ProductItem__id'>1</div>
                <div className='ProductItem__product'>
                    <div>
                        <img src={images[0]?.url} />
                    </div>
                    <div>
                        <h3>{name}</h3>
                        <h4>ID: {id}</h4>
                    </div>
                </div>
                <div className='ProductItem__brand'>
                    {brand}
                </div>
                <div className='ProductItem__category'>
                    {category}
                </div>
                <div className='ProductItem__stock'>
                    {countInStock} items
                </div>
                <div className='ProductItem__price'>
                    ${price}
                </div>
                <div className='ProductItem__rating'>
                    {countingStars(rating)}
                </div>
                <div className='ProductItem__buttons'>
                    <button onClick={() => navigate(`/admin/product/update/${id}`)}><RiDraftLine /></button>
                    <button onClick={handleDelete}><RiDeleteBin6Line /></button>
                </div>
            </div>
        </>
    )
}
export default ProductItem