import { Router } from "express";
import { authmiddleware } from "../middleware/authmiddleware";
import prisma from "../PrismaClient/PrismaClientGenerate";
import { Request,Response } from "express";
const User_router=Router();

//@ts-ignore
User_router.get('/me',authmiddleware,async (req:Request,res:Response)=>{
//@ts-ignore
const id=req.user.id
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
User_router.get('/all',authmiddleware,async(req:Request,res:Response)=>{
    const users=await prisma.user.findMany({
        select:{
            id:true,
            username:true,
            email:true,
            phoneNumber:true,
            profilePicUrl:true,
            createdAt:true,
            updatedAt:true
        }
    })

    if(!users){
        return res.status(404).json({error:"No users found"});
    }

    res.json({
        users:users
    })
})
//@ts-ignore
User_router.put('/update',authmiddleware,async (req:Request,res:Response)=>{
    //@ts-ignore
const id=req.user.id
console.log(req.body);
const {username,phoneNumber,profilePicUrl,about}=req.body;


const user=await prisma.user.update({
    where:{
        id:id
    },
    data:{
        username,
        about,
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