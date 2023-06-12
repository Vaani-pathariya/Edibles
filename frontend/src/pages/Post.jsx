import React, { useState } from "react";
import axios from "axios"
import Nav from "../components/Nav.jsx";
const Post=()=>{

    const [post,setPost]=useState({
        tagline:"",name:"",ingredients:"",recipe:""
    })
    const handleFieldChange=(e)=>{
        const{tagline,name,ingredients,recipe}=e.target;
        // setPost({...post,[name]:[value]});
    }
    const createpost=async(e)=>{
        e.prevent.Default();
        const res=await axios.post("http://localhost:4000/post",post);
        setPost({
            tagline:res.data.tagline,
            name:res.data.name,
            ingredients:res.data.ingredients,
            recipe:res.data.recipe,
        })
    }

    return (
        <div>
            <Nav/>
            <form onSubmit={createpost} className="post-form">
            <input onChange={handleFieldChange} value={post.tagline} placeholder="Tagline"></input>
            <input  onChange={handleFieldChange} value={post.name} placeholder="Name of the recipie"></input>
            <input  onChange={handleFieldChange} value={post.ingredients} placeholder="Ingredients"></input>
            <input  onChange={handleFieldChange} value={post.recipe} placeholder="Recipie"></input>
            {/* <input placeholder="video/audio"></input>
            <input placeholder="pic please"></input> */}
            <button type="submit">Post</button>
            </form>
        </div>
    )
}
export default Post;