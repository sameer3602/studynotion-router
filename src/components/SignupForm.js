import React from 'react'
import { FaEyeSlash,FaRegEye  } from "react-icons/fa";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
const SignupForm = ({setIsLoggedIn}) => {
    const [Formdata,setFormdata]=useState({Firstname:"",Lastname:"",email:"",password:"",confirmpassword:""})
    const [showpass,setshowpass]=useState(false)
    const [confirmshowpass,confirmsetshowpass]=useState(false)
    const navigate=useNavigate();
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
        if (Formdata.password != Formdata.confirmpassword){
            toast.error("Password not Match");
            return;
        }
        else{
            setIsLoggedIn(true);
            toast.success("Account Created")
            navigate("/dashboard");
        }
        console.log(Formdata);
    }
  return (
    <div>
        <div>
            <button>
                Student
            </button>
            <button>
                Instructor
            </button>
        </div>
        <form onSubmit={submithandler}>
            <div className='firstlast'>
                <label>
                    <p>First Name<sup>*</sup></p>
                    <input
                        required
                        type='text'
                        name="Firstname"
                        onChange={changehandler}
                        placeholder='Enter First Name'
                        value={Formdata.Firstname}
                    />
                </label>
                <label>
                    <p>Last Name<sup>*</sup></p>
                    <input
                        required
                        type='text'
                        name="Lastname"
                        onChange={changehandler}
                        placeholder='Enter Last Name'
                        value={Formdata.Lastname}
                    />
                </label>
            </div>
            <label>
                <p>email<sup>*</sup></p>
                <input
                    required
                    type='text'
                    name="email"
                    onChange={changehandler}
                    placeholder='Enter email address'
                    value={Formdata.email}
                />
            </label>
            <div className='passconfirm'>
                <label>
                    <p> Create Password<sup>*</sup></p>
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
                </label>
                <label>
                    <p>Confirm Password<sup>*</sup></p>
                    <input 
                        type={confirmshowpass ?('text'):('password')} 
                        required
                        value={Formdata.confirmpassword} 
                        onChange={changehandler} 
                        placeholder='Confirm Password:'
                        name="confirmpassword"/>
                    <span onClick={()=> confirmsetshowpass((prev)=>!prev)}> 
                        {confirmshowpass ? (<FaRegEye />):(<FaEyeSlash />)}
                    </span>
                </label>
            </div>
            <button>
                Create Account
            </button>
        </form> 
    </div>
  )
}

export default SignupForm