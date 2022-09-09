import React, { useState } from 'react'
import './style.scss'
import { BsEyeSlashFill, BsEyeFill } from 'react-icons/bs'
const CreateUser = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showPassword1, setShowPassword1] = useState(false)
    return (<>
        <div className='CreateUser'>
            <div className='CreateUser__userInfomation'>
                <h3>User Infomation</h3>
                <div className='CreateUser__userInfomation--content'>
                    <h4>Name</h4>
                    <input type='text'></input>
                    <h4>Email</h4>
                    <input type='text'></input>
                    <h4>Password</h4>
                    <div>
                        <input type={showPassword ? 'text' : 'password'}></input>
                        <span onClick={() => { setShowPassword(!showPassword) }}>{showPassword ? <BsEyeFill /> : <BsEyeSlashFill />}</span>
                    </div>

                    <h4>Retype Password</h4>
                    <div>
                        <input type={showPassword1 ? 'text' : 'password'}></input>
                        <span onClick={() => { setShowPassword1(!showPassword1) }}>{showPassword1 ? <BsEyeFill /> : <BsEyeSlashFill />}</span>
                    </div>
                    <h4>Role</h4>
                    <select>
                        <option>Admin</option>
                        <option>User</option>
                    </select>
                </div>
            </div>
            <div className='CreateUser__Avatar'>
                <h3>Avatar</h3>
                <div></div>
            </div>
            <div className='CreateUser__anotherInfo'>
                <h3>Another Info</h3>
                <div className='CreateUser__anotherInfo--content'>
                    <h4>Contact</h4>
                    <input type='text' value='+84'></input>
                    <div>
                        <div>Status</div>
                        <div><input type='radio'></input><label>Active</label></div>
                        <div><input type='radio'></input><label>Disabled</label></div>
                        <div>Verify Email</div>
                        <div><input type='radio'></input><label>Yes</label></div>
                        <div><input type='radio'></input><label>No</label></div>
                        <div>Verify Contact</div>
                        <div><input type='radio'></input><label>Yes</label></div>
                        <div><input type='radio'></input><label>No</label></div>
                    </div>
                </div>
            </div>

        </div>
    </>)
}
export default CreateUser