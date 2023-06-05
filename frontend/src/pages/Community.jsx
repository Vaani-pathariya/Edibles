import React from "react";
import PostCard from "../components/PostCard";
const Community=()=>{
    return (
        <div>
            <h1>Trending posts and blogs</h1>
            <div>
                {
                    <PostCard/>
                }
            </div>
        </div>
    )
}
export default Community;