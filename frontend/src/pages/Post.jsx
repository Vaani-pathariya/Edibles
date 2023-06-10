import React from "react";
import Nav from "../components/Nav.jsx";
const Post=()=>{
    return (
        <div>
            <Nav/>
            <div className="post-form">
            <input placeholder="Tagline"></input>
            <input placeholder="Name of the recipie"></input>
            <input placeholder="Ingredients"></input>
            <input placeholder="Recipie"></input>
            <input placeholder="video/audio"></input>
            <input placeholder="pic please"></input>
            <button>Post</button>
            </div>
        </div>
    )
}
export default Post;