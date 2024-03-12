import React from 'react'
import Template from '../components/Template';
import loginImg from '../assets/login.png';
export const Log = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Welcome Back"
      desc1="Build Skills for today,tomorrow, and Beyond"
      desc2="Education to future-proof your career."
      image={loginImg}
      formtype="Login"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}
export default Log;