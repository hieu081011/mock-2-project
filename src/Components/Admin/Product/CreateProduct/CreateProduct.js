import React, { useState } from 'react'
import './style.scss'
import { MdClear } from 'react-icons/md'
const CreateProduct = () => {
    const [tags, setTags] = useState(['tag1', 'tag2', 'tag3', 'tag4'])
    const [input, setInput] = useState('')
    return (<>
        <div className='CreateProduct'>
            <div className='CreateProduct__basicInfomation'>
                <h3 className='CreateProduct__basicInfomation--header'>
                    Basic information
                </h3>
                <div className='CreateProduct__basicInfomation--content'>
                    <h4>Name</h4>
                    <input type='text'></input>
                    <h4>Description </h4>
                    <textarea></textarea>
                    <div>
                        <div>
                            <h4>Price</h4>
                            <input type='number'></input>
                        </div>
                        <div>
                            <h4>Discount Percent</h4>
                            <input type='number'></input>
                        </div>
                    </div>
                    <h4>Brand </h4>
                    <input type='text'></input>
                    <h4>Stock quantity </h4>
                    <input type='text'></input>
                </div>
            </div>
            <div className='CreateProduct__images'>
                <h3 className='CreateProduct__images--header'>
                    Images
                </h3>
                <div className='CreateProduct__images--content'></div>
            </div>
            <div className='CreateProduct__categories'>
                <h3 className='CreateProduct__categories--header'>
                    Categories
                </h3>
                <div className='CreateProduct__categories--content'>
                    <div>
                        <ul>
                            {
                                tags.map((tag) => (
                                    <li>
                                        <span onClick={() => setTags(tags.filter((item) => item !== tag))}><MdClear /></span>
                                        <span>{tag}</span>
                                    </li>
                                ))
                            }
                        </ul>
                        <input placeholder='Add category' type='text' value={input} onChange={(e) => { setInput(e.target.value) }}></input>
                        <button onClick={() => setTags([...tags, input])}>Add Category</button>
                    </div>
                </div>
            </div>
            <div className='CreateProduct__rating'>
                <h3 className='CreateProduct__rating--header'>
                    Raing
                </h3>
                <div className='CreateProduct__rating--content'>
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
            </div>
        </div>
    </>)
}
export default CreateProduct