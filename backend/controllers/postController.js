const Post=require("../models/Post");

exports.post=async(req,res)=>{
    try{
        const{tagline,name,ingredients,recipe}=req.body;
        const post=await Post.create({
            tagline,name,ingredients,recipe
        })
        res.json({post});
    }
    catch(err){
        res.json({
            "success":"failed",
            "message":"cannot create post with this content"
        })
    }
}
