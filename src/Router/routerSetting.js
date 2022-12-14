import ProductPage from '../Pages/Admin/ProductPage/ProductPage'
import CreateProduct from '../Components/Admin/Product/CreateProduct/CreateProduct'
import OrderDetail from '../Components/Admin/Order/OrderDetail/OrderDetail'
import OrderPage from '../Pages/Admin/OrderPage/OrderPage'
import UserPage from '../Pages/Admin/UserPage/UserPage'
import UserDetail from '../Components/Admin/User/UserDetail/UserDetail'
import CreateUser from '../Components/Admin/User/CreateUser/CreateUser'
import CheckOutPage from '../Pages/User/CheckOutPage/CheckOutPage'
import OrderDetailPage from '../Pages/User/OrderDetailPage/OrderDetailPage'
export const routes = [
    {
        path: '/checkout/',
        element: <CheckOutPage />,
        roles: ['user']
    },
    {
        path: '/order/:orderId',
        element: <OrderDetailPage />,
        roles: ['user']
    },
    {
        path: '/admin/',
        element: <></>,
        roles: ['admin']
    },
    {
        path: "/admin/product",
        element: <ProductPage />,
        roles: ["admin"],
    },
    {
        path: "/admin/product/search/:searchId",
        element: <ProductPage />,
        roles: ["admin"]
    },
    {
        path: "/admin/product/create",
        element: <CreateProduct />,
        roles: ["admin"],
    },
    {
        path: "/admin/product/update/:productId",
        element: <CreateProduct type='update' />,
        roles: ["admin"],
    },
    {
        path: "/admin/order",
        element: <OrderPage />,
        roles: ["admin"],
    },
    {
        path: "/admin/order/:orderId",
        element: <OrderDetail />,
        roles: ["admin"],
    },
    {
        path: "/admin/user",
        element: <UserPage />,
        roles: ["admin"],
    },
    {
        path: "/admin/user/:userId",
        element: <UserDetail />,
        roles: ["admin"],
    },
    {
        path: "/admin/user/create",
        element: <CreateUser />,
        roles: ["admin"],
    },

];