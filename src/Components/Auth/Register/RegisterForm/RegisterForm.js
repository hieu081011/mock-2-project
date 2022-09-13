import './style.scss'
import { useFormik } from 'formik'
import * as Yup from 'yup'
const RegisterForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('This field is require').min(4, 'must be 4 character or more'),
            email: Yup.string().required('This field is require').matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email'),
            password: Yup.string().required('This field is require'),
            confirmPassword: Yup.string().required('This field is require').oneOf([Yup.ref('password'), null], "Password must match")
        }),
        onSubmit: (value) => {
            console.log(value)
        },


    })

    return (

        <form className='RegisterForm' onSubmit={formik.handleSubmit}>
            <h2>Sign Up</h2>
            <div className='RegisterForm__field'>

                <label>Name</label>
                <input type='text' name='name' placeholder='Enter name' value={formik.values.name} onChange={formik.handleChange} />
                <div className='RegisterForm__field--error'>{formik.errors.name}</div>
            </div>
            <div className='RegisterForm__field'>
                <label>Email Address</label>
                <input type='text' name='email' placeholder='Enter email' value={formik.values.email} onChange={formik.handleChange} />
                <div className='RegisterForm__field--error'>{formik.errors.email}</div>
            </div>
            <div className='RegisterForm__field'>
                <label>Password</label>
                <input type='text' name='password' placeholder='Enter password' value={formik.values.password} onChange={formik.handleChange} />
                <div className='RegisterForm__field--error'>{formik.errors.password}</div>
            </div>
            <div className='RegisterForm__field'>
                <label>Confirm Password</label>
                <input type='text' name='confirmPassword' placeholder='Confirm password' value={formik.values.confirmPassword} onChange={formik.handleChange} />
                <div className='RegisterForm__field--error'>{formik.errors.confirmPassword}</div>
            </div>
            <button type='submit'>Register</button>

            <label>Have an Account? <a>Login</a></label>

        </form>

    )
}
export default RegisterForm