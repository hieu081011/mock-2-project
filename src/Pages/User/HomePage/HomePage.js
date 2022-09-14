import HomeSlider from "./HomeSlider/HomeSlider"
import './style.scss'
import HomeProducts from "./HomeProducts/HomeProducts"
const HomePage = () => {
    return (
        <div className="HomePage">
            <HomeSlider />
            <HomeProducts />
        </div>
    )
}
export default HomePage