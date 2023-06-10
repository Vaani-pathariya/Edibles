import React from "react";
import "../cssFiles/Signup.css"
import { Link } from "react-router-dom";
const Signup=()=>{
    return (
        <>
        <div className="signup">
            <div className="signup-box">
                <div className="head-signup">Signup</div>
                <br />
                <input placeholder="email"></input>
                <input placeholder="password"></input>
                <input placeholder="confirm password"></input>
                
                <button>Sign Up</button><br />
                <div>Already have an account? </div>
                <div >
                    <Link className="link-login" to="../login">Login</Link>
                </div>
            </div>
        </div>
        </>
    )
}
export default Signup;