import React from 'react'
import signupImg from '../assets/signup.png';
import Template from '../components/Template';
export const Sign = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Welcome Back"
      desc1="Build Skills for today,tomorrow, and Beyond"
      desc2="Education to future-proof your career."
      image={signupImg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}
export default Sign;