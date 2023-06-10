import React from "react";
import "../cssFiles/PostCard.css"
const PostCard=(props)=>{
    return(
        <div className="card-flp">
        <div className="card-lp">
            {/* <img src="/" alt={props.imgtit} /> */}
            <div className="card-title">{props.title}</div>
            <div className=" design design1"></div>
            <div className=" design design2"></div>
            <div className=" design design3"></div>
            <div className=" design design4"></div>
            <div className=" design design5"></div>
        </div>
        </div>
    )
}
export default PostCard;