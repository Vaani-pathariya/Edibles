import React, { useState } from "react";
import axios from "axios"
import Nav from "../components/Nav.jsx";
const Post=()=>{

    const [tagline,setTagline]=useState("");
    const [name,setName]=useState("");
    const [ingredients,setIng]=useState("");
    const [recipe,setRecipe]=useState("");
    const handleTagline=(e)=>{
        setTagline(e.target.value);
    }
    const handleName=(e)=>{
        setName(e.target.value);
    }
    const handleIng=(e)=>{
        setIng(e.target.value);
    }
    const handleRecipe=(e)=>{
        setRecipe(e.target.value);
    }
    const createpost=async(e)=>{
        e.preventDefault()
        const body={
            tagline: tagline,
            name:name,
            ingredients:ingredients,
            recipe:recipe
        }
        const sendingPost=async()=>{
            try{
                const response=await axios.post("localhost:4000/post",body);
                console.log(response);
            }catch(error){
                console.log(error);
            }
        }
    }
    return (
        <div>
            <Nav/>
            <form className="post-form">
            <input onChange={handleTagline}  placeholder="Tagline" type="text"></input>
            <input type="text" onChange={handleName} placeholder="Name of the recipie"></input>
            <input type="text" onChange={handleIng} placeholder="Ingredients"></input>
            <input type="text" onChange={handleRecipe} placeholder="Recipie"></input>
            {/* <input placeholder="video/audio"></input>
            <input placeholder="pic please"></input> */}
            <button onClick={createpost}>Post</button>
            </form>
        </div>
    )
}
export default Post;