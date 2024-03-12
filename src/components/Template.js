import React from 'react'
import frameImage from "../assets/frame.png"
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import { FcGoogle } from "react-icons/fc";
const Template = ({title,desc1,desc2,image,formtype,setIsLoggedIn}) => {
  return (
    <div className='Template'>
        <div className='description'>
            <h1 className='title'>{title}</h1>
            <p>
                <p className='desc1'>{desc1}</p>
                <p className='desc2'>{desc2}</p>
            </p>
            {formtype === "signup" ?
                (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
                (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}
            <div>
                <div className='underline'></div>
                <p className='ortext'>OR</p>
                <div className='underline'></div>
            </div>
            <button className='signgoogle'>
                <span className='googleicon'><FcGoogle /></span>
                Sign up with Google
            </button>
        </div>
        <div>
            <img src={frameImage} className='frame' loading='lazy' />
            <img src={image} className='loginimg' loading='lazy' />
        </div>

    </div>
  )
}

export default Template