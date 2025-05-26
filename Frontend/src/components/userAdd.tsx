import BackArrowIcon from "../icons/back_arrow_icon"
import { Input } from "../ui/Input"
import { Button } from "../ui/Button"
import { useEffect, useRef, useState } from "react";
import axios from "axios";

export function UserAdd({setSelectUserOpen,selectUserOpen}:any){
    //fetching user details
    const fetchData = async () => {
        try {
          const response = await axios.get('https://chat-app-unc7.onrender.com/user/all', {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `${sessionStorage.getItem('token')}`,
            },
          });
    
          setUserDetails(response.data.users);
          console.log(response.data.users);
          console.log("wkdcwkcwj,ckwnkcw")
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
    
    const [usersDetails,setUserDetails] =useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(false);
    //@ts-ignore
    const inputref=useRef(null);


    useEffect(() => {
        fetchData();
      }, []);

      
    //loadling sample userids


const Submit = async () => {


  const username = inputref.current?.value;
  
  if (!username) {
    alert("Please enter a username");
    return;
  }
  setLoading(true)
  try {
    const response = await axios.post(
      "https://chat-app-unc7.onrender.com/chat/create_individual_chat",
      {
        receiverUsername: username
      },
      {
        headers: {
          Authorization: `${sessionStorage.getItem('token')}` // replace with your token logic
        }
      }
    );

    console.log("Chat Created or Retrieved:", response.data);
    alert("User Added Successfully");
    setSelectUserOpen(false);
  } catch (error) {
    console.error("Error creating chat:", error);
    alert("Failed to create chat. Please check the username and try again.");
    setLoading(false)
  }
};

return (
<div className=" w-full sm:w-98 h-[852px] relative bg-slate-200 rounded-xl outline outline-[6px] outline-slate-200 overflow-hidden">
  <div className="w-full h-28  bg-gray-button-2" />
  
  <div className="w-80 left-[24px] top-[34px] absolute inline-flex justify-between items-center">
    <div className="w-10 h-10 bg-gray-back-arrow-bg-1 rounded-3xl shadow-[0px_4px_12px_0px_rgba(13,10,44,0.06)] flex justify-center items-center gap-2.5">
      <div className="w-6 h-6 relative overflow-hidden">
        <div onClick={()=>{setSelectUserOpen(false)}} className=" cursor-pointer" ><BackArrowIcon size="lg" fillColor={"text-white"}></BackArrowIcon></div>
      </div>
    </div>
    <div className="text-center justify-start text-white text-xl font-semibold ">Chat with new friends</div>
    <div data-dark-mode="False" data-name="Blank" className="w-10 h-10 p-[5px] opacity-0 bg-slate-200 rounded-3xl" />
  </div>





  <div className="w-full  min-h-14  rounded-lg flex justify-center  items-center ">

    <Input placeholder="Enter User Id" reference={inputref} onChange={(e:any)=>setSearchQuery(inputref.current.value)} className="w-full">
        
    </Input>
  </div>

   
<br />

 {} <div className="pl-4 w-full max-h-screen overflow-auto scroll-auto inline-flex flex-col justify-start items-start gap-6">
 {usersDetails
  .filter((user: any) =>
    user.username?.toLowerCase().includes(searchQuery.toLowerCase())
  )
  .map((user: any) => (
    <div
      key={user.id}
      className={`w-full flex items-center gap-2 hover:bg-zinc-800 p-2 rounded-lg cursor-pointer transition-all}`}
      onClick={() => {}}
    >
      <img src={(user.profilePicUrl && user.profilePicUrl !== "default") ? user.profilePicUrl : "/avatar.png"} alt={user.name} className="w-10 h-10 rounded-full object-cover" />
      <div className="flex flex-col">
        <p className="text-zinc-400 font-bold">{user.username}</p>
        <p className="text-zinc-400 text-sm">{user.email}</p>
      </div>
    </div>
))}


  </div>
<div className="flex fixed bottom-2  justify-center">
<Button onClick={Submit} variant="primary" text={(loading)?"Adding User...":"Add User"} className="w-90   "></Button>
</div>
 
</div>
)}