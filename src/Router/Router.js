import { Routes, Route, Navigate } from "react-router-dom";
import Login from '../Components/Auth/Login/Login'
import Register from "../Components/Auth/Register/Register";
import Error from "../Pages/Error";
import PrivateRoute from "./PrivateRoute";
import { routes } from "./routerSetting";
const Router = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Navigate to='/login' />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
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