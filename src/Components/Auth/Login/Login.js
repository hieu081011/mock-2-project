import './style.scss'
import LoginForm from './LoginForm/LoginForm'
import { useAuth } from '../../../context/ContextProvider'
import { Navigate } from 'react-router-dom'
const Login = () => {
    const { auth } = useAuth()
    if (auth?.user?.role === 'admin') {
        return (<Navigate to='/admin' />)
    }
    return (
        <div className="Login">
            <LoginForm />
        </div>
    )
}
export default Login