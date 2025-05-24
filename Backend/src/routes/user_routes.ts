import { Router } from "express";
import { authmiddleware } from "../middleware/authmiddleware";
import prisma from "../PrismaClient/PrismaClientGenerate";
import { Request,Response } from "express";
const User_router=Router();

//@ts-ignore
User_router.get('/me',authmiddleware,async (req:Request,res:Response)=>{
const {id}=req.body;
const user=await prisma.user.findUnique({
    where:{
        id:id
    }

})

if(!user){
    return res.status(404).json({error:"User not found"});
}

res.json({
    user:user
})
}
)
//@ts-ignore
User_router.put('/update',authmiddleware,async (req:Request,res:Response)=>{
const {id,username,email,phoneNumber,profilePicUrl}=req.body;

const user=await prisma.user.update({
    where:{
        id:id
    },
    data:{
        username,
        email,
        phoneNumber,
        profilePicUrl
    }
})

if(!user){
    return res.status(404).json({error:"User not found"});
}
res.json({
    user:user,
    mssg:"User updated successfully"
})
}

)



export default User_router;