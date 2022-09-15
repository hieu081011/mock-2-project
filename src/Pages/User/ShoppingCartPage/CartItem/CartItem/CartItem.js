import { useState } from "react"
import { IoMdRemove, IoMdAdd } from 'react-icons/io'
import { BsFillTrashFill, BsFileEarmarkCheckFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { updateItem, deleteItem } from "../../../../../api/cart"
const CartItem = ({ item }) => {
    const handleUpdateItem = async () => {
        try {
            await updateItem(item.id, qty)
            alert('update item sucess')
        } catch (error) {
            console.log(error)
        }
    }
    const handleDeleteItem = async () => {
        try {
            await deleteItem(item.id)
            alert('delete item succes')
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }
    const [qty, setQty] = useState(item.quantity)
    return (
        <div key={item.id} className='CartItems__item'>
            <div className='CartItems__item--img'>
                <img src={`${item.itemCartInfo.images[0].url}`} />
            </div>
            <Link to={`/product/${item.itemCartInfo.id}`} className='CartItems__item--name'>
                {item.itemCartInfo.name}
            </Link>
            <div className='CartItems__item--price'>
                ${item.price}
            </div>
            <div className='CartItems__item--addItem'>
                <button onClick={() => setQty(qty - 1)}><IoMdRemove /></button>
                <input type='text' value={qty} min={0} />
                <button onClick={() => setQty(qty + 1)}><IoMdAdd /></button>
            </div>
            <div className='CartItems__item--deleteItem'>
                <button onClick={handleUpdateItem}><BsFileEarmarkCheckFill /></button>
                <button onClick={handleDeleteItem}><BsFillTrashFill /></button>
            </div>
        </div>
    )
}
export default CartItem