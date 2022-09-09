import './style.scss'
import { IoMdRemove, IoMdAdd } from 'react-icons/io'
import { BsFillTrashFill } from 'react-icons/bs'
import { useState } from 'react'
const CartItems = () => {
    const [qty, setQty] = useState(1)
    return (
        <div className='CartItems'>
            <h2 className='CartItems__header'>
                Shopping cart
            </h2>
            <div className='CartItems__item'>
                <div className='CartItems__item--img'>
                    <img src='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT27W7pcLgTxFOiBmz-JNKUqjsCJnCTiP99WGHeC3o4oRyplSgRnTRdq8YMr39WdUa_1M6471xOw1rmjHB-B-0XOS3kAcBKkc270XYXqovfZjyTDbK0H_uTQg&usqp=CAc' />

                </div>
                <div className='CartItems__item--name'>
                    iPhone 11 Pro 256GB Memory
                </div>
                <div className='CartItems__item--price'>
                    $599.99
                </div>
                <div className='CartItems__item--addItem'>
                    <button onClick={() => setQty(qty - 1)}><IoMdRemove /></button>
                    <input type='text' value={qty} min={0} />
                    <button onClick={() => setQty(qty + 1)}><IoMdAdd /></button>
                </div>
                <div className='CartItems__item--deleteItem'>
                    <button><BsFillTrashFill /></button>
                </div>
            </div>
        </div>
    )
}
export default CartItems