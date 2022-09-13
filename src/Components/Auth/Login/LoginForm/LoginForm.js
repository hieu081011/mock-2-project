import './style.scss'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { login } from '../../../../api/auth'
import { useAuth } from '../../../../context/ContextProvider'
const LoginForm = () => {
    const { auth, setAuth } = useAuth()
    const handleSubmit = async (value) => {

        try {
            const { data: { data } } = await login(value);
            console.log(data)
            localStorage.setItem('auth', JSON.stringify(data))
            localStorage.setItem('access_token', data.tokens.access.token)
            localStorage.setItem('refresh_token', data.tokens.refresh.token)
            setAuth(data)
        } catch (error) {
            console.log(error)
        }
    }
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().required('Please enter your email').matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email'),
            password: Yup.string().required('Please enter password'),
        }),
        onSubmit: handleSubmit
    })
    return (
        <form className='LoginForm' onSubmit={formik.handleSubmit}>
            <h2>Login</h2>

            <div className='LoginForm__field'>
                <label>Email Address</label>
                <input type='text' name='email' placeholder='Enter email' value={formik.values.email} onChange={formik.handleChange} />
                {formik.errors.email &&
                    <div className='LoginForm__field--error'>{formik.errors.email}</div>
                }
            </div>
            <div className='LoginForm__field'>
                <label>Password</label>
                <input type='text' name='password' placeholder='Enter password' value={formik.values.password} onChange={formik.handleChange} />
                {formik.errors.password &&
                    <div className='LoginForm__field--error'>{formik.errors.password}</div>
                }
            </div>
            <button type='submit'>Login</button>
            <label>Need an Account? <a>Sign Up</a></label>

        </form>
    )
}
export default LoginForm