import React from "react";
import { Link } from "react-router-dom";
import "../cssFiles/Signup.css"
const Login=()=>{
    return (
        <div className="signup">
            <div className="signup-box">
                <h1>Login</h1>
                <br />
                <input placeholder="email"></input>
                <input placeholder="password"></input>
                <button>Log In</button><br />
                <div>
                    <Link  className="link-login" to="../ChangePassword">Forgot Password?</Link>
                </div>
                <div>Don't have an account?</div>
                <div >
                <Link className="link-login" to="../Signup"> SignUp</Link>
                </div>
            </div>
        </div>
    )
}
export default Login;