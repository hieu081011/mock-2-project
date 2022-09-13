import React, { useState } from 'react'
import './style.scss'
import { MdClear } from 'react-icons/md'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { createProduct, getProduct, updateProduct } from '../../../../api/product'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import LoadingSpinner from '../../../LoadingSpinner/LoadingSpinner'
const CreateProduct = ({ type }) => {
    const [tags, setTags] = useState([])
    const [input, setInput] = useState('')
    const { productId } = useParams()
    const [isLoading, setIsLoading] = useState(false)
    const initialValues = {
        name: '',
        brand: '',
        category: '',
        description: '',
        price: 0,
        rating: 1,
        countInStock: 0,
    }
    const handleSubmit = async (value, { resetForm }) => {

        try {
            if (type) {
                await updateProduct(productId, { ...value, imageUrls: [...tags] })
                alert(`Update product success`)
            } else {
                await (createProduct({ ...value, imageUrls: [...tags] }))
                alert(`Create product success`)
            }

        } catch (error) {
            console.log(error)
            alert(`${type || 'Create'} product error`)
        }
        if (type) {
            console.log('vao')
            window.location.replace('http://localhost:3000/admin/product')
            return
        }
        setTags([])
        setInput('')
        resetForm()

    }
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: Yup.object({
            name: Yup.string().required('Please enter your email'),
            brand: Yup.string().required('Please enter password'),
            name: Yup.string().required('Please enter name'),
            brand: Yup.string().required('Please enter brand'),
            category: Yup.string().required('Please enter category'),
            description: Yup.string().required('Please enter description'),
            price: Yup.string().required('Please enter price]'),
            rating: Yup.string().required('Please enter rating'),
            countInStock: Yup.string().required('Please enter stock'),
        }),
        onSubmit: handleSubmit

    })
    useEffect(() => {
        async function getProductById(id) {
            try {
                setIsLoading(true)
                const { data: { data } } = await getProduct(id)
                formik.setValues(data.product)
                setTags(data.product.images.map((image) => image.url))
            } catch (error) {
                console.log(error)
            }
            setIsLoading(false)
        }
        if (productId) {
            getProductById(productId)
        }
    }, [])
    return (<>
        <form style={{ display: `${isLoading ? `block` : 'grid'}` }} className='CreateProduct' onSubmit={formik.handleSubmit}>

            {isLoading ? <LoadingSpinner /> :
                <>
                    <div className='CreateProduct__error'>{formik.errors.brand || formik.errors.category || formik.errors.countInStock || formik.errors.description || formik.errors.name || formik.errors.price || formik.errors.rating}</div>
                    <button type="submit" className='CreateProduct__button'>
                        {type === 'update' ? 'Update' : 'Create'} Product
                    </button>
                    <div className='CreateProduct__basicInfomation'>
                        <h3 className='CreateProduct__basicInfomation--header'>
                            Basic information
                        </h3>
                        <div className='CreateProduct__basicInfomation--content'>
                            <h4>Name</h4>
                            <input type='text' name='name' value={formik.values.name} onChange={formik.handleChange} />
                            <h4>Description </h4>
                            <textarea name='description' value={formik.values.description} onChange={formik.handleChange}></textarea>
                            <div>
                                <div>
                                    <h4>Price</h4>
                                    <input type='number' name='price' value={formik.values.price} onChange={formik.handleChange} />
                                </div>
                                <div>
                                    <h4>Discount Percent</h4>
                                    <input type='number'></input>
                                </div>
                            </div>
                            <h4>Brand </h4>
                            <input type='text' name='brand' value={formik.values.brand} onChange={formik.handleChange}></input>
                            <h4>Stock quantity </h4>
                            <input type='text' name='countInStock' value={formik.values.countInStock} onChange={formik.handleChange}></input>
                        </div>
                    </div>
                    <div className='CreateProduct__images'>
                        <h3 className='CreateProduct__images--header'>
                            Category
                        </h3>
                        <div>
                            <input name='category' placeholder={'category'} value={formik.values.category} onChange={formik.handleChange} />
                        </div>
                    </div>
                    <div className='CreateProduct__categories'>
                        <h3 className='CreateProduct__categories--header'>
                            Images
                        </h3>
                        <div className='CreateProduct__categories--content'>
                            <div>
                                <ul>
                                    {
                                        tags.map((tag, index) => (
                                            <li key={index}>
                                                <span onClick={() => setTags(tags.filter((item) => item !== tag))}><MdClear /></span>
                                                <span>{tag}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <input placeholder='Add image' type='text' value={input} onChange={(e) => { setInput(e.target.value) }}></input>
                                <button type="button" onClick={() => setTags([...tags, input])}>Add Image</button>
                            </div>
                        </div>
                    </div>
                    <div className='CreateProduct__rating'>
                        <h3 className='CreateProduct__rating--header'>
                            Raing
                        </h3>
                        <div className='CreateProduct__rating--content'>
                            <select name='rating' value={formik.values.rating} onChange={formik.handleChange}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>
                </>
            }
        </form>
    </>)
}
export default CreateProduct