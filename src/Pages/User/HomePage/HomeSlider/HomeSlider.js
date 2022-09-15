import { Splide, SplideSlide } from '@splidejs/react-splide';
import './style.scss'
import '@splidejs/react-splide/css';
const HomeSlider = () => {
    const options = {
        type: 'loop',
        perPage: 1,
        rewind: true,
        gap: '1rem',
        pagination: true,
        perMove: 1,
    }

    return (
        <div className="HomeSlider">

            <Splide options={{ ...options }} aria-label="My Favorite Images">

                <SplideSlide>
                    <div className='slide-detail'>
                        <img src='https://cdnimg.vietnamplus.vn/uploaded/xtsqr/2022_08_18/83ceb28dbf6445b69422898b4a5c5d1f24533000002ab74c2f751.jpg' alt='img2' />
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className='slide-detail'>

                        <img src="https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/147816/Originals/iPhone-14-Pro-1.JPG" alt="Image 1" />
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className='slide-detail'>

                        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="Image 2" />
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    )
}
export default HomeSlider