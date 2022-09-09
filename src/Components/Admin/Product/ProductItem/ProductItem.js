import React from 'react'
import './style.scss'
import { RiDeleteBin6Line, RiDraftLine, RiStarFill, RiStarLine } from 'react-icons/ri'

const ProductItem = () => {
    return (
        <>
            <div className='ProductItem'>
                <div className='ProductItem__id'>1</div>
                <div className='ProductItem__product'>
                    <div>
                        <img src='data:image/jpeg;base64,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'></img>
                    </div>
                    <div>
                        <h3>Adidas shoes</h3>
                        <h4>ID: 213</h4>
                    </div>
                </div>
                <div className='ProductItem__brand'>
                    Adidas
                </div>
                <div className='ProductItem__category'>
                    Sport shoes
                </div>
                <div className='ProductItem__stock'>
                    9 items
                </div>
                <div className='ProductItem__price'>
                    $275
                </div>
                <div className='ProductItem__rating'>
                    <span><RiStarFill /></span>
                    <span><RiStarFill /></span>
                    <span><RiStarFill /></span>
                    <span><RiStarLine /></span>
                    <span><RiStarLine /></span>
                </div>
                <div className='ProductItem__buttons'>
                    <button><RiDraftLine /></button>
                    <button><RiDeleteBin6Line /></button>
                </div>
            </div>
        </>
    )
}
export default ProductItem