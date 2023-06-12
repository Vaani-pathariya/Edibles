const mongoose=require("mongoose");
require("dotenv").config();
const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{
        console.log("DB connected successfully")
    })
    .catch((err)=>{
        console.log("Db connection issue");
        console.log(err);
        process.exit();
    })
}
module.exports=dbConnect;