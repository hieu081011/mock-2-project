import './style.scss'
import LoginForm from './LoginForm/LoginForm'
import { useAuth } from '../../../context/ContextProvider'
import { Navigate, useLocation } from 'react-router-dom'
const Login = () => {
    const { auth } = useAuth()
    const location = useLocation()
    if (auth?.user?.role === 'admin') {
        return (<Navigate to='/admin' />)
    }
    if (auth?.user?.role === 'user') {
        if (location?.state?.from)
            return <Navigate to={`${location.state.from}`} />
        return (<Navigate to='/' />)
    }
    return (
        <div className="Login">
            <LoginForm />
        </div>
    )
}
export default Login