import  express  from "express";
import {z} from "zod"
import 'dotenv/config'
import User_router from "./routes/user_routes";
import { authmiddleware } from "./middleware/authmiddleware";

const bcrypt=require("bcrypt")




const app=express();

app.use(express.json());

app.use("/user",User_router);
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})