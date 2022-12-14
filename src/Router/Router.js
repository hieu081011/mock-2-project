import { Routes, Route, Navigate } from "react-router-dom";
import Login from '../Components/Auth/Login/Login'
import Register from "../Components/Auth/Register/Register";
import Error from "../Pages/Error";
import PrivateRoute from "./PrivateRoute";
import HomePage from '../Pages/User/HomePage/HomePage'
import { routes } from "./routerSetting";
import ProductDetailPage from '../Pages/User/ProductDetailPage/ProductDetailPage'
import ShoppingCartPage from '../Pages/User/ShoppingCartPage/ShoppingCartPage'
import OrderDetailPage from "../Pages/User/OrderDetailPage/OrderDetailPage";
const Router = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/product/:productId" element={<ProductDetailPage />} />
                <Route path='/cart' element={<ShoppingCartPage />} />
                <Route path='/order' element={<OrderDetailPage />} />
                {routes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={
                            <PrivateRoute roles={route.roles}>{route.element}</PrivateRoute>
                        }
                    />
                ))}
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    );
};
export default Router;