import  express  from "express";
import {z} from "zod"
import 'dotenv/config'

const bcrypt=require("bcrypt")
const router=express.Router();

// Import the user controller


router.post('/signup',(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const email=req.body.email;
    const phone_number=req.body.phone_number;



})