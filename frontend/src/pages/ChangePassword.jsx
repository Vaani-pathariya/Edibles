import React from "react";
import { Link } from "react-router-dom";
const ChangePassword=()=>{
    return(
        <div className="signup">
        <div className="signup-box">
            <h2>Change Password</h2>
            <input placeholder="enter email"></input>
            <button>OK</button>
            <input placeholder="Enter the OTP received on your Email"></input>
            <input placeholder="New Password"></input>
            <input placeholder="Confirm Password"></input>
            <button>Change Password</button>
            <br />
            <h6>Already have an account? <span><Link to="../login" className="link-login">Login?</Link></span></h6>
        </div>
    </div>
    )
}
export default ChangePassword;