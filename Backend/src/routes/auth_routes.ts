import  express  from "express";
import {z} from "zod"
import 'dotenv/config'
import prisma from "../PrismaClient/PrismaClientGenerate";
import { Request,Response,NextFunction } from "express";
import jwt  from "jsonwebtoken";
import upload from '../middleware/upload';
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


Auth_router.post('/signup', upload.single('profilePic'), async (req: Request, res: Response) => {
    try {
      console.log('Uploaded file info:', req.file); // ✅ Log uploaded file info
  
      const validation = userSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({ error: validation.error.errors });
      }
  
      const { username, password, email, phoneNumber } = validation.data;
      const bio = req.body.bio || ''; // ✅ Optional bio from frontend
      const SALT_ROUNDS = Number(process.env.SALT_ROUNDS) || 10;
      const hashed_password = await bcrypt.hash(password, SALT_ROUNDS);
  
      // Check if user already exists
      const find_user = await prisma.user.findFirst({
        where: {
          OR: [
            { username: username },
            { email: email },
            { phoneNumber: phoneNumber }
          ]
        }
      });
  
      if (find_user) {
        if (find_user.email === email)
          return res.status(400).json({ error: "Email already exists. Please login!" });
        if (find_user.username === username)
          return res.status(400).json({ error: "Username already exists." });
        if (find_user.phoneNumber === phoneNumber)
          return res.status(400).json({ error: "Phone number already exists." });
      }
  
      // ✅ Store Cloudinary URL or fallback to "default"
      const profilePicUrl = req.file ? (req.file as any).path : 'default';
  
      // ✅ Create user in DB
      const user = await prisma.user.create({
        data: {
          username,
          password: hashed_password,
          email,
          phoneNumber,
          profilePicUrl,
          about: bio // ✅ Store bio in 'about' column
        }
      });
  
      res.json({
        user,
        msg: "User created successfully"
      });
    } catch (error) {
      console.error("Signup error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  

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