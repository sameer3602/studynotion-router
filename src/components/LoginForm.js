import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { FaEyeSlash,FaRegEye  } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
const LoginForm = ({setIsLoggedIn}) => {
    const navigate= useNavigate();
    const [Formdata,setFormdata]=useState({email:"",password:""})
    const [showpass,setshowpass]=useState(false)
    function changehandler(event){
        setFormdata(prevData => {
            return{
                ...prevData,
                [event.target.name]:event.target.value
            }
        });
    }
    function submithandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged in");
        navigate("/dashboard");
        console.log(Formdata);
    }
  return (
    <form onSubmit={submithandler}>
        <label className='emaillabel'>
            <p className='loginformemail'>Email Address<sup>*</sup></p>
            <input 
                className='loginemailinput'
                type='email' 
                required
                value={Formdata.email} 
                onChange={changehandler} 
                placeholder='   Enter Email id:'
                name="email" />
        </label>
        <label className='passwordlabel' htmlFor='password'>
            <p className='loginformpass'>Password<sup>*</sup></p>
            <div className='loginpassworddiv'>
                <input 
                    className='loginpasswordinput'
                    type={showpass ?('text'):('password')} 
                    required7
                    value={Formdata.password} 
                    onChange={changehandler} 
                    placeholder='  Enter Password:'
                    name="password"/>
                <span className='loginicon' onClick={()=> setshowpass((prev)=>!prev)}> 
                    {showpass ? (<FaRegEye />):(<FaEyeSlash />)}
                </span>
            </div>
            <Link to="#">
                <p className='forgotpass'>Forgot password?</p>
            </Link>
        </label>
        <button className='signbtn'> 
            Sign in
        </button>
    </form>
  )
}

export default LoginForm