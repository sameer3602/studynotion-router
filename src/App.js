import {Routes,Route} from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Dash from "./pages/Dash";
import Sign from "./pages/Sign";
import Log from "./pages/Log";
import Start from "./pages/Start";
import Contact from "./pages/Contact";
function App() {
  const [isLoggedin, setIsLoggedIn]= useState(false);
  return (
  <div className="appdiv">
    <Navbar isLoggedin={isLoggedin} setIsLoggedIn={setIsLoggedIn}/> 
    <Routes>
      <Route path="/" element= {<Start/>}/>
      <Route path="/login" element= {<Log setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path="/signup" element= {<Sign setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path="/dashboard" element= {<Dash/>}/>
      <Route path="/contact" element= {<Contact/>}/>
    </Routes>
  </div>
  )
}

export default App;
