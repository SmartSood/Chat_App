import  express  from "express";
import {z} from "zod"
import 'dotenv/config'
import Auth_router from "./routes/auth_routes";
import User_router from "./routes/user_routes";
import Chat_router from "./routes/chat_routes";
import status_Router from "./routes/status_routes";
import message_Router from "./routes/message_routes";





const app=express();

app.use(express.json());

app.use("/auth",Auth_router);


app.use("/user",User_router)

app.use("/chat",Chat_router)
 
app.use("/status",status_Router)

app.use("/message",message_Router)

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})