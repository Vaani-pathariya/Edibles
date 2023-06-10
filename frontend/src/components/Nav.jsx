import React from "react";
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";
import "../cssFiles/Nav.css"
const Navbar=()=>{
    return (
        <div className="landing_page">
            <div className="logo">
            <img src={logo}></img>
            <h1>Edibles</h1>
            </div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="../browse">Browse</a></li>
                <li><a href="/">Community</a></li>
                <li><a href="/post">Post</a></li>
                <li><Link to="/signup">Signup/Login</Link></li>
            </ul>
        </div>
    )
}
export default Navbar;