import React from 'react'
import './Register.scss'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaKey } from "react-icons/fa";
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className="register-page">
        <form action="" className='register'>
            <h1>Register Page</h1>
            <div className="input-box1">
                <label htmlFor="name">Name</label>
                <div className="input-icon">
                    <input id='name' placeholder='Enter Name' type="name" required  />
                    <FaUser className='icon' />
                </div>
            </div>
            <div className="input-box2">
                <label htmlFor="Email">Email</label>
                <div className="input-icon">
                    <input id='Email' placeholder='Enter Email' type="email" required   />
                    <MdEmail className='icon' />
                </div>
            </div>
            <div className="input-box3">
                <label htmlFor="password">Password</label>
                <div className="input-icon">
                    <input id='password' placeholder='Enter Password' type="password" required />
                    <RiLockPasswordFill className='icon' />

                </div>
            </div>
            <div className="input-box4">
                <label htmlFor="confirm">Confirm Password</label>
                <div className="input-icon">
                    <input type="password" placeholder='Confirm Password' id='confirm' required />
                    <FaKey className='icon' />

                </div>
            </div>
            <button type='submit'>Submit</button>
            <p>Have An Acount <Link to={'/login'} >Login</Link></p>
        </form>
    </div>
  )
}
