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
                    <img src="https://static.remove.bg/remove-bg-web/37843dee2531e43723b012aa78be4b91cc211fef/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg" alt="Image 1" />
                </SplideSlide>
                <SplideSlide>
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="Image 2" />
                </SplideSlide>
            </Splide>
        </div>
    )
}
export default HomeSlider