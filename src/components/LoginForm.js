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
        <label>
            <p>Email Address<sup>*</sup></p>
            <input 
                type='email' 
                required
                value={Formdata.email} 
                onChange={changehandler} 
                placeholder='Enter Email id:'
                name="email" />
        </label>
        <label>
            <p>Password<sup>*</sup></p>
            <input 
                type={showpass ?('text'):('password')} 
                required
                value={Formdata.password} 
                onChange={changehandler} 
                placeholder='Enter Password:'
                name="password"/>
            <span onClick={()=> setshowpass((prev)=>!prev)}> 
                {showpass ? (<FaRegEye />):(<FaEyeSlash />)}
            </span>
            <Link to="#">
                <p>Forgot password?</p>
            </Link>
        </label>
        <button>
            Sign in
        </button>
    </form>
  )
}

export default LoginForm