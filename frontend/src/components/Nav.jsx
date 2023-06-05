import React from "react";
import logo from '../assets/logo.png'
import "../style.css"
const Navbar=()=>{
    return (
        <div className="landing_page">
            <div className="logo">
            <img src={logo}></img>
            <h1>Edibles</h1>
            </div>
            <ul>
                <li>Home</li>
                <li>Browse</li>
                <li>Community</li>
                <li>Post</li>
                <li>Signup/Login</li>
            </ul>
        </div>
    )
}
export default Navbar;