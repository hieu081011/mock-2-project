import './style.scss'
const SubTotal = () => {
    return (
        <div className='SubTotal'>
            <div className='SubTotal__top'>
                <div className='SubTotal__top--itemCount'>subtotal (5) items</div>
                <div className='SubTotal__top--totalPrice'>
                    $1345.43
                </div>
            </div>
            <div className='SubTotal__button'>
                <button>Proceed to checkout</button>
            </div>
        </div>
    )
}
export default SubTotal