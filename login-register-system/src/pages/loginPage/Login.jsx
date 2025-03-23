import React from 'react'
import './Login.scss'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className="login-page">
        <form action="" className='login'>
            <h1>Login Page</h1>
            <div className="input-box1">
                <label htmlFor="Email">Email</label>
                <div className="input-icon">
                    <input id='Email' placeholder='Enter Email' type="email" required   />
                    <MdEmail className='icon' />
                </div>
            </div>
            <div className="input-box2">
                <label htmlFor="password">Password</label>
                <div className="input-icon">
                    <input id='password' placeholder='Enter Password' type="password" required />
                    <RiLockPasswordFill className='icon' />
                </div>
            </div>
            <div className="remember-forgot">
                <label htmlFor="remember"><input id='remember' type="checkbox" /> Remember Me</label>
                <Link to={'*'} className='forgot'>Forgot Password</Link>
            </div>
            <button type='submit'>Login</button>
            <p>Don't Have An Acount <Link to={'/register'} >Register</Link></p>
        </form>
    </div>
  )
}

