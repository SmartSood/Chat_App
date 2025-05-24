import  express  from "express";
import {z} from "zod"
import 'dotenv/config'
import prisma from "../PrismaClient/PrismaClientGenerate";
import { Request,Response,NextFunction } from "express";
import jwt  from "jsonwebtoken";
// use `prisma` in your application to read and write data in your DB
const Auth_router=express.Router();
import bcrypt from "bcrypt";
// defining the registeration scemma

const userSchema=z.object({
    username:z.string().min(3).max(20),
    password:z.string().min(8).max(100),
    email:z.string().email(),
    phoneNumber:z.string()
})

const loginScemma=z.object({
    email:z.string().email()
})

//@ts-ignore
Auth_router.post('/signup',async (req:Request,res:Response)=>{

    // Validating the request body against the schema

    const validation= userSchema.safeParse(req.body);
    if (!validation.success) {
        return res.status(400).json({ error: validation.error.errors });
    }
   
    const {username,password,email,phoneNumber}=validation.data;
    const SALT_ROUNDS= Number(process.env.SALT_ROUNDS)||10


    const hashed_password=await bcrypt.hash(password,SALT_ROUNDS);





    // Checking if the user already exists
    const find_user=await prisma.user.findFirst({


        where:{
                
                OR:[
                    {username:username},
                    {email:email},
                    {phoneNumber:phoneNumber}
                ]
        }
    })

    if(find_user?.email==email){

        return res.status(400).json({ error: "Email already exists Please Login!" });
    }
    if(find_user?.username==username){

        return res.status(400).json({ error: "Username already exists Try using different one " });
    }
    if(find_user?.phoneNumber==phoneNumber){

        return res.status(400).json({ error: "Phone number already exists Please Login!" });
    }
    
    const user=await prisma.user.create({
        data:{
            username,
            password:hashed_password,
            email,
            //@ts-ignore
            phoneNumber
        }
    })
    await prisma.$disconnect();
    res.json({
        user:user,
        mssg:"User Created"
    })
})

//@ts-ignore
Auth_router.post("/signin",async (req:Request,res:Response)=>{
    try{
        const validation= await loginScemma.safeParse(req.body);
        if(!validation){
            return res.status(400).json({mssg:"enter valid email"});
        }

        const {email,password}=req.body;
        const find_user=await prisma.user.findFirst({
            where:{
                email:email
            }
        })

        if(!find_user){
            return res.status(400).json({error:"User not found"});
        }
        const isPasswordValid=await bcrypt.compare(password,find_user.password);

        if(!isPasswordValid){
            return res.status(400).json({error:"Invalid Password"});
        }
        // Generate JWT token
        const token=jwt.sign({id:find_user.id},process.env.JWT_SECRET_KEY as string, { expiresIn: '1d' });

        
     await prisma.user.update({
            where:{
                id:find_user.id
            },
            data:{
                lastSeen:new Date(),
                isOnline:true,
                updatedAt:new Date(),

            }
        })




        res.json({
            user: {
                id: find_user.id,
                username: find_user.username,
                email: find_user.email,
                phoneNumber: find_user.phoneNumber
            },
            token: token,
            message: "Login successful"
        })
    }
    catch(e){
        return res.status(400).json({error:e});
    }
   
})
export default Auth_router;