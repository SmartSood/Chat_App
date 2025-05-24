import  Jwt  from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
export async function authmiddleware(req:Request,res:Response,next:NextFunction): Promise<void>{

    const token = req.headers.authorization;
    if (!token) {
    res.status(401).json({ message: 'Not authorized' });
    return
    }



    try{
        const decoded = Jwt.verify(token, process.env.JWT_SECRET_KEY as string);
        //@ts-ignore
        req.user = decoded;
        next();
        return
    }
    catch (error) {
        res.status(401).json({ message: 'Invalid token' });
        return
    }

}