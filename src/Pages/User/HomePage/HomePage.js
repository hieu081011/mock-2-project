import HomeSlider from "./HomeSlider/HomeSlider"
import './style.scss'
import HomeProduct from "./Product/HomeProduct"
const HomePage = () => {
    return (
        <div className="HomePage">
            <HomeSlider />
            <HomeProduct />
        </div>
    )
}
export default HomePage