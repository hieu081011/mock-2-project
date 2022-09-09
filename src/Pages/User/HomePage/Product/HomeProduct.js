import './style.scss'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
const HomeProduct = () => {
    return (
        <div className="HomeProduct">
            <div className='HomeProduct__imgWrapper'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdOIrIuTEoAN2JlZusrzwU4Is9TlKLeXqpB_oxi9Pt0A&s' />

            </div>
            <div className='HomeProduct__content'>
                <a className='HomeProduct__content--name'>Airpods Wireless Bluetooth</a>
                <div className='HomeProduct__content--rating'>
                    <BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill />
                </div>
                <div className='HomeProduct__content--review'>12 reviews</div>

                <div className='HomeProduct__content--price'><span>$</span>29.99</div>
            </div>
        </div>
    )
}
export default HomeProduct