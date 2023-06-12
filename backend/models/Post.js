const mongoose=require("mongoose");
const postSchema=new mongoose.Schema({
    tagline:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    ingredients:{
        type:String,
        required:true,
    },
    recipe:{
        type:String,
        required:true,
    }
})

module.exports=mongoose.model("post",postSchema);