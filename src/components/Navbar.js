import React from 'react'
import {Link} from 'react-router-dom'
import logo from "../assets/Logo.svg"
import toast from 'react-hot-toast'

export const Navbar = (props) => {
  let isLoggedin=props.isLoggedin;
  let setIsLoggedIn=props.setIsLoggedIn;
  return (
    <div className="mynav">
        <Link to="/">
            <img className='image' src={logo} alt="logo" width={160} height={32} loading='lazy'/>
        </Link>
        <nav className='routes'>
          <ul className='routes'>
            <li >
              <Link to="/" className='list'>Home</Link>
            </li>
            <li>
              <Link to="/dashboard" className='list'>About</Link>
            </li>
            <li>
              <Link to="/contact" className='list'>Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="buttons">
          { !isLoggedin &&
            <Link to="/login">
              <button className="navbtn" onClick={()=>{
                  setIsLoggedIn(true);
                  toast.success("Logged in");
                }}>Login</button>
            </Link>
          }

          { !isLoggedin &&
            <Link to="/signup">
              <button className="navbtn">Sign up
              </button>
            </Link>
          }

          { isLoggedin &&
            <Link to="/">
              <button className="navbtn" onClick={()=>{
                setIsLoggedIn(false);
                toast.success("Logged out")
              }}>Log Out</button>
            </Link>
          }

          { isLoggedin &&
            <Link to="/dashboard">
              <button className="navbtn">Dashboard</button>
            </Link>
          }
        </div>
    </div>
  )
}
export default Navbar;