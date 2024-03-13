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
        <div className='signuptype'>
            <button className='studentbtn'>
                Student
            </button>
            <button className='instructorbtn'>
                Instructor
            </button>
        </div>
        <form onSubmit={submithandler}>
            <div className='firstlast'>
                <label>
                    <p className='signuplabel'>First Name<sup>*</sup></p>
                    <input
                        className='signupfirstnameinput'
                        required
                        type='text'
                        name="Firstname"
                        onChange={changehandler}
                        placeholder='   Enter First Name'
                        value={Formdata.Firstname}
                    />
                </label>
                <label>
                    <p className='signuplabel'>Last Name<sup>*</sup></p>
                    <input
                        required
                        className='signuplastnameinput'
                        type='text'
                        name="Lastname"
                        onChange={changehandler}
                        placeholder='    Enter Last Name'
                        value={Formdata.Lastname}
                    />
                </label>
            </div>
            <label>
                <p className='signuplabel'>Email<sup>*</sup></p>
                <input
                    className='signupemailinput'
                    required
                    type='text'
                    name="email"
                    onChange={changehandler}
                    placeholder='    Enter email address'
                    value={Formdata.email}
                />
            </label>
            <div className='passconfirm'>
                <label>
                    <p className='signuplabel'> Create Password<sup>*</sup></p>
                    <input 
                        className='signuppasswordinput'
                        type={showpass ?('text'):('password')} 
                        required
                        value={Formdata.password} 
                        onChange={changehandler} 
                        placeholder='   Enter Password:'
                        name="password"/>
                    <span className="signupicon" onClick={()=> setshowpass((prev)=>!prev)}> 
                        {showpass ? (<FaRegEye />):(<FaEyeSlash />)}
                    </span>
                </label>
                <label>
                    <p className='signuplabel'>Confirm Password<sup>*</sup></p>
                    <input 
                        className='signupconfirmpasswordinput'
                        type={confirmshowpass ?('text'):('password')} 
                        required
                        value={Formdata.confirmpassword} 
                        onChange={changehandler} 
                        placeholder='   Confirm Password:'
                        name="confirmpassword"/>
                    <span className="signupicon" onClick={()=> confirmsetshowpass((prev)=>!prev)}> 
                        {confirmshowpass ? (<FaRegEye />):(<FaEyeSlash />)}
                    </span>
                </label>
            </div>
            <button className='createAcc'>
                Create Account
            </button>
        </form> 
    </div>
  )
}

export default SignupForm