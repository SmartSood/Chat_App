import  express  from "express";
import {z} from "zod"
import 'dotenv/config'

const bcrypt=require("bcrypt")
const router=express.Router();

// Import the user controller
console.log(process.env.SALT_ROUNDS)