const express=require("express");
const app=express();
const postController=require("./controllers/postController");


require('dotenv').config();
const PORT=process.env.PORT;

app.use(express.json());
const dbConnect=require("./config/database");
dbConnect();

// router 
app.post("/post",postController.post);

// activate the server
app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}`);
})