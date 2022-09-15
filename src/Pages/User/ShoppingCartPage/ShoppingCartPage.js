import './style.scss'
import CartItems from './CartItem/CartItems'
import SubTotal from './SubTotal/SubTotal'
import { useAuth } from '../../../context/ContextProvider'
import { Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getCart } from '../../../api/cart'
import LoadingSpinner from '../../../Components/LoadingSpinner/LoadingSpinner'
const ShoppingCartPage = () => {
    const { auth } = useAuth()
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])
    const [cart, setCart] = useState({})
    useEffect(() => {
        async function getcart() {
            try {
                const { data: { data } } = await getCart(630)
                setCart(data.cart)
                setItems(data.items)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }
        getcart()
    }, [])

    if (!auth?.user?.role)
        return <Navigate to='/login' state={{ from: '/cart' }} />
    return (
        <div className='ShoppingCartPage'>
            {loading ? <LoadingSpinner /> :
                <>
                    <CartItems items={items} />
                    <SubTotal cart={cart} length={items.length} items={items} />
                </>
            }
        </div>
    )
}
export default ShoppingCartPage