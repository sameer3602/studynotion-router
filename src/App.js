import {Routes,Route} from "react-router-dom";
import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Dash from "./pages/Dash";
import Sign from "./pages/Sign";
import Log from "./pages/Log";
import Start from "./pages/Start";
function App() {
  const [isLoggedin, setIsLoggedIn]= useState(false);
  return (
  <div>
    <Navbar isLoggedin={isLoggedin} setIsLoggedIn={setIsLoggedIn}/> 
    <Routes>
      <Route path="/" element= {<Start/>}/>
      <Route path="/login" element= {<Log/>}/>
      <Route path="/signup" element= {<Sign/>}/>
      <Route path="/dashboard" element= {<Dash/>}/>
    </Routes>
  </div>
  )
}

export default App;
