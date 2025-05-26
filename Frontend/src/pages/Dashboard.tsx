import React, { useEffect, useState ,useRef} from 'react';
import { Button } from '../ui/Button';
import { ButtonIcon } from '../ui/Button_Icon';
import { FiSearch, FiMoreVertical, FiPaperclip, FiMic, FiMessageSquare, FiUsers, FiPhone } from 'react-icons/fi';
import useIsSmallScreen from '../hooks/useIsSmallScreen';
import { LogoIcon } from '../icons/logo_icon';
import { SettingsIcon } from '../icons/settings_icon';
import { LogoutIcon } from '../icons/logout_icon';
import { AddChatIcon } from '../icons/add_chat_icon';
import { AvatarIcon } from '../icons/avatar_icon';
import { GroupIcon } from '../icons/group_icon';
import { UserAdd } from '../components/userAdd';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import StatusView from '../components/status';
import { Message } from '../ui/Message_Box';
function formatTime(isoString) {
  const date = new Date(isoString);
  
  // Get hours and minutes
  let hours = date.getHours();       // 0-23
  const minutes = date.getMinutes(); // 0-59

  // Determine AM/PM
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert 24-hour to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  // Pad minutes with leading zero if needed
  const minutesStr = minutes < 10 ? '0' + minutes : minutes;

  return `${hours}:${minutesStr} ${ampm}`;
}

const ChatxApp = () => {
  // State management
  const [activeTab, setActiveTab] = useState<'messages' | 'social'>('messages');
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeNav, setActiveNav] = useState<'chats' | 'status' | 'groups' | 'calls'>('chats');
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const isSmallScreen = useIsSmallScreen();
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [addChatOpen,setAddChatOpen]=useState<Boolean>(false) 
  const [selectUserOpen,setSelectUserOpen]=useState<Boolean>(false) ;
  const [selectGroupOpen,setSelectGroupOpen]=useState<Boolean>(false) ;
  const [userChats,setUserChats]=useState<Object[]>([]);
  const [fetchChat,setFetchChat]=useState<Number>(0);
  const [status, setStatus] = useState<Object[]>([]);
  const [messages, setMessages] = useState([]);
  const currentUserId=sessionStorage.getItem('userId')
  const [token,setToken]=useState<String|null>(sessionStorage.getItem('token')||null)
  const [selectedStatusUserId, setSelectedStatusUserId] = useState<string | null>(null);
    const navigate=useNavigate();
  const ws = useRef(null);
  useEffect(() => {
    ws.current = new WebSocket(`ws://localhost:8080/?token=${sessionStorage.getItem('token')}`);

    ws.current.onopen = () => console.log('WS connected');

    ws.current.onmessage = (e) => {
      const data = JSON.parse(e.data);
      if (data.type === 'new_message' && data.message.chatId === selectedChat) {
        setMessages((prev) => [...prev, data.message]);
      }
    };

    ws.current.onclose = () => console.log('WS disconnected');

    return () => {
   
    };
  }, [selectedChat, token]);

  const sendMessage = (content) => {
    if (!ws.current || ws.current.readyState !== WebSocket.OPEN) {
      console.error('WebSocket is not open. Ready state:', ws.current?.readyState);
      return;
    }
  
    ws.current.send(
      JSON.stringify({
        type: 'send_message',
        selectedChat,
        content,
        type: 'TEXT',
      })
    );
  };
  //load user chats and triger rerender whenver the window 
  useEffect(()=>{
    async function fetch(){
      try{
        const response=await axios.get('http://localhost:3000/chat/my-chats',
        {
    
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${sessionStorage.getItem('token')}`
          }
        });
        if(response.status===200){
          await setUserChats(response.data.chatUsers);
          console.log('Fetched chats:', response.data.chatUsers);
//fetching the status from the users
  const allUserIds = response.data.chatUsers
            ?.flatMap(chatUser => chatUser.chat.chatUsers.map(cu => cu.userId)) || [];
            const uniqueUserIds = [...new Set(allUserIds)];
            // 2. Fetch statuses for each unique user
        const statusPromises = uniqueUserIds.map(async (userId) =>{
          return await axios.get(`http://localhost:3000/status/user/${userId}`, {
    
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${sessionStorage.getItem('token')}`
          }
        }).then(res => res.data).catch((e) => e)}
        );

        const results = await Promise.all(statusPromises);
        
        const validStatuses = results.filter(Boolean).flat();
        
   

        setStatus(prev => [...validStatuses])

        }
        else{
          console.log('Error fetching chats');
        }


      }
        catch(error){
          console.log(error);
        }
    }
    fetch();
    
  
  },[])


    //sample chat data
  // const chats = [
  //   { id: 1, name: 'John Doe', lastMessage: 'Hey, how are you?', time: '10:30 AM', unread: 2 },
  //   { id: 2, name: 'Jane Smith', lastMessage: 'Meeting at 3pm', time: 'Yesterday', unread: 0 },
  //   { id: 3, name: 'Work Group', lastMessage: 'Alice: I sent the files', time: 'Yesterday', unread: 5 },
  //   { id: 1, name: 'John Doe', lastMessage: 'Hey, how are you?', time: '10:30 AM', unread: 2 },
  //   { id: 2, name: 'Jane Smith', lastMessage: 'Meeting at 3pm', time: 'Yesterday', unread: 0 },
  //   { id: 3, name: 'Work Group', lastMessage: 'Alice: I sent the files', time: 'Yesterday', unread: 5 },
  //   { id: 1, name: 'John Doe', lastMessage: 'Hey, how are you?', time: '10:30 AM', unread: 2 },
  //   { id: 2, name: 'Jane Smith', lastMessage: 'Meeting at 3pm', time: 'Yesterday', unread: 0 },
  //   { id: 3, name: 'Work Group', lastMessage: 'Alice: I sent the files', time: 'Yesterday', unread: 5 },
  //   { id: 1, name: 'John Doe', lastMessage: 'Hey, how are you?', time: '10:30 AM', unread: 2 },
  //   { id: 2, name: 'Jane Smith', lastMessage: 'Meeting at 3pm', time: 'Yesterday', unread: 0 },
  //   { id: 3, name: 'Work Group', lastMessage: 'Alice: I sent the files', time: 'Yesterday', unread: 5 },

  // ];



  // Navigation items
  const navItems = [
    { id: 'chats', icon: <FiMessageSquare size={20} />, label: 'Chats' },
    { id: 'status', icon: <FiUsers size={20} />, label: 'Status' },
    { id: 'groups', icon: <FiUsers size={20} />, label: 'Groups' },
    { id: 'calls', icon: <FiPhone size={20} />, label: 'Calls' },
    

    
  ];
  const bottomNavItems=[
    { id: 'settings', icon: <SettingsIcon size={20} />, label: 'Settings' },
    { id: 'logout', icon: <LogoutIcon size={20} />, label: 'Logout' }
  ]
  


  // Handler functions
  const handleSearchClick = () => setShowSearch(!showSearch);
  const handleNavClick = (navItem: 'chats' | 'status' | 'groups' | 'calls') => {
    setActiveNav(navItem);
    setSelectedChat(null);
  };
  const handleChatSelect = (chatId: number) => setSelectedChat(chatId);

  return (
    <div className="flex h-screen bg-gray-button-1">
       {/*  left Navigation big screen */}
       {!isSmallScreen&&(<div className="  justify-around p-2 border border-gray-300 bg-blue-background-1">


           

        {/* Logo and Profile Image */}
        <div className='border-b-1 border-gray-300'>
        <div className="flex items-center justify-center mb-4">
          <LogoIcon size="2xl" />
        </div>
        <div className="relative w-14 h-14 mx-auto mb-8">
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className="w-14 h-14 rounded-full object-cover"
            />
          ) : (
            <div className="w-14 h-14 bg-gray-300 rounded-full" />
          )}
          </div>
          </div>


          
          {navItems.map((item) => (
            <div className='mb-4'>
               <button
              key={item.id}
              onClick={() => handleNavClick(item.id as any)}
              className={`flex flex-col justify-center items-center p-1 ${activeNav === item.id ? 'text-blue-600' : 'text-gray-600'}`}
            >
              <div className={`p-2 flex justify-center items-center rounded-full ${activeNav === item.id ? 'bg-blue-100' : ''}`}>
                {React.cloneElement(item.icon, {
                  className: `w-5 h-5 ${activeNav === item.id ? 'text-blue-600' : 'text-gray-500'}`
                })}
              </div>
              <span className="text-xs mt-1">{item.label}</span>
            </button>
            </div>
           
          ))}

          {/* Bottom Navigation Items */}
<div className=' fixed bottom-0 items-center justify-center'>
{bottomNavItems.map((item) => (
            <div className='mb-4'>
               <button
              key={item.id}
              onClick={() => handleNavClick(item.id as any)}
              className={`flex flex-col justify-center items-center p-1 ${activeNav === item.id ? 'text-blue-600' : 'text-gray-600'}`}
            >
              <div className={`p-2 flex justify-center items-center rounded-full ${activeNav === item.id ? 'bg-blue-100' : ''}`}>
                {React.cloneElement(item.icon, {
                  className: `w-5 h-5 ${activeNav === item.id ? 'text-blue-600' : 'text-gray-500'}`
                })}
              </div>
              <span className="  flex justify-center items-center text-xs mt-1">{item.label}</span>
            </button>
            </div>
           
          ))}
</div>     
        </div>)}  
        
       {/* Left sidebar */}
       {activeNav === 'status' ? (
  selectedStatusUserId ? (
    <StatusView
      statuses={status.filter(s => s.user.id === selectedStatusUserId)}
      authToken={localStorage.getItem('token') || ''}
      currentUserId={currentUserId || ''}
      onClose={() => setSelectedStatusUserId(null)} // Return to list
    />
  ) : (
    <div className="flex flex-col w-full sm:w-1/3 border-r border-gray-300 bg-white overflow-y-auto">
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-xl font-bold">Status</h2>
        <button onClick={() => setActiveNav('chats')} className="text-sm text-blue-500">Back</button>
      </div>

      {Array.from(
        new Map(status.map(s => [s.user.id, s.user])).values()
      ).map(user => (
        <div
          key={user.id}
          className="flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-100"
          onClick={() => setSelectedStatusUserId(user.id)}
        >
          <img
            src={user.profilePicUrl === 'default' ? '/default-avatar.png' : user.profilePicUrl}
            alt={user.username}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-medium">{user.username}</p>
            <p className="text-xs text-gray-500">Tap to view status</p>
          </div>
        </div>
      ))}
    </div>
  )
) : (
!selectUserOpen && !selectGroupOpen) ? (
        <div className="flex flex-col w-full sm:w-1/3 border-r border-gray-300 bg-blue-background-1 sm:bg-white">
          {/* Header */}
          <header className="flex justify-between items-center p-3 border-gray-300">
            <h1 className="text-xl font-bold">Messages</h1>
            <div className="flex items-center gap-2">
              {showSearch && (
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border rounded-md px-2 sm:w-70 py-1 text-sm"
                  autoFocus
                />
              )}
              <ButtonIcon 
                icon={<FiSearch className="text-gray-600" />}
                size="small"
                fill_color="bg-transparent"
                onClick={handleSearchClick}
              />
            </div>
          </header>

          {/* Tab Section */}
          <div className='bg-blue-background-1 h-14 flex justify-center sm:bg-white'>
            <div className="flex rounded-full w-[90%] overflow-hidden bg-gray-button-1">
              <Button
                variant={activeTab === 'messages' ? 'primary' : 'secondary'}
                text="Messages"
                className="flex-1 text-sm"
                position='single'
                onClick={() => setActiveTab('messages')}
              />
              <Button
                variant={activeTab === 'social' ? 'primary' : 'secondary'}
                text="Social"
                className="flex-1 text-sm"
                position='single'
                onClick={() => setActiveTab('social')}
              />
            </div>
          </div>

          {/* Add chat open */}
          {addChatOpen && (
            <div className="w-80 p-4 bg-gray-button-2 fixed sm:left-50 left-40 bottom-40 sm:bottom-20 rounded-xl shadow-[0px_0px_100px_0px_rgba(0,0,0,0.20)] inline-flex flex-col items-center gap-4">
              <div 
                onClick={() => { setSelectUserOpen(true) }} 
                className="self-stretch p-4 rounded-md inline-flex justify-start items-center gap-4"
              >
                <div className="w-6 h-6 relative overflow-hidden">
                  <div className="w-4 h-5"><AvatarIcon size="lg" /></div>
                </div>
                <div className="text-center justify-start text-white text-lg font-medium">Add Friend</div>
              </div>
              <div 
                onClick={() => { setSelectGroupOpen(true) }} 
                className="self-stretch p-4 rounded-md inline-flex justify-start items-center gap-4"
              >
                <div className="w-6 h-6 relative overflow-hidden">
                  <div className="w-4 h-5"><GroupIcon size="lg" /></div>
                </div>
                <div className="text-center justify-start text-white text-lg font-medium">Create Group</div>
              </div>
            </div>
          )}

          {/* Chats list */}
          {userChats.length > 0 ? (
            <div className="flex-1 overflow-y-auto">
              {/* Fixed add chat button */}
              <div className='fixed sm:bottom-4 bottom-25 right-4 sm:right-230'>
                <ButtonIcon 
                  icon={<AddChatIcon size="xl" />}
                  size="large"
                  fill_color="bg-black"
                  className="p-3"
                  onClick={() => { setAddChatOpen((op) => !op) }}
                />
              </div>

              {userChats.map(({ chat }) => {
                const otherUser = chat.chatUsers.find(cu => cu.user.id !== currentUserId)?.user;

                return (
                  <div
                    key={chat.id}
                    className={`flex items-center p-3 border-b border-gray-200 cursor-pointer hover:bg-gray-100 ${selectedChat === chat.id ? 'bg-blue-50' : ''}`}
                    onClick={() => handleChatSelect(chat.id)}
                  >
                    <img
                      src={otherUser?.profilePicUrl === 'default' ? '/default-avatar.png' : otherUser?.profilePicUrl}
                      alt="profile"
                      className="w-10 h-10 rounded-full bg-gray-300 mr-3 object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className="font-medium">{otherUser?.username}</span>
                        <span className="text-xs text-gray-500">
                          {chat.messages[0]?.sentAt ? new Date(chat.messages[0].sentAt).toLocaleTimeString() : ''}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-sm text-gray-600 truncate">
                          {chat.messages[0]?.text || 'No messages yet'}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div 
              onClick={() => { setAddChatOpen((op) => !op) }} 
              className='flex w-full h-full justify-center items-center'
            >
              <ButtonIcon 
                fill_color='bg-black' 
                size='xtralarge' 
                className='p-3' 
                icon={<AddChatIcon size='5xl' />}
              />
            </div>
          )}

          {/* Fixed Bottom Navigation */}
          {isSmallScreen && (
            <nav className="flex justify-around p-2 border-t border-gray-300 bg-white">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id as any)}
                  className={`flex flex-col items-center p-1 ${activeNav === item.id ? 'text-blue-600' : 'text-gray-600'}`}
                >
                  <div className={`p-2 rounded-full ${activeNav === item.id ? 'bg-blue-100' : ''}`}>
                    {React.cloneElement(item.icon, {
                      className: `w-5 h-5 ${activeNav === item.id ? 'text-blue-600' : 'text-gray-500'}`
                    })}
                  </div>
                  <span className="text-xs mt-1">{item.label}</span>
                </button>
              ))}
            </nav>
          )}
        </div>
      ) : selectUserOpen ? (
        <UserAdd setSelectUserOpen={setSelectUserOpen} />
      ) : (
        <div></div>
      )}
     
     

       
       

      {/* Right side - Chat area */}

    {!isSmallScreen&&((selectedChat ? (
        <div className="flex bg-blue-background-1 h-full flex-col flex-1">
          {/* Chat header */}
          <div className="flex items-center justify-between p-3 border-b border-gray-300 bg-white">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
              <div>
              <h2 className="font-medium">
  {
    userChats.find(cu => cu.chat.id === selectedChat)
      ?.chat.chatUsers.find(cu => cu.user.id !== currentUserId)?.user.username
  }
</h2>

                <p className="text-xs text-gray-500">Online</p>
              </div>
            </div>
            <ButtonIcon 
              icon={<FiMoreVertical className="text-gray-600" />}
              size="small"
              fill_color="bg-transparent"
            />
          </div>

          {/* Messages area */}
<div className='overflow-auto h-full '>
          {userChats.map((Chats)=>{
            //@ts-ignore
            console.log(Chats)
            if(Chats.chatId===selectedChat){
       
              return(
                
                            //@ts-ignore
                Chats.chat.messages.map((message)=>{
                  
                     return( 
                      <div className='p-4 '>                     <Message variant={(message.senderId===currentUserId)?"sent":"received"} type='text' text={message.content} time={formatTime(message.sentAt)}></Message></div>
                     
)

                })
              )
            }
          })}
          </div>

          {/* Message input */}
          <div className="flex items-center  bottom-4 p-3 border-t border-gray-300 bg-white">
            <ButtonIcon 
              icon={<FiPaperclip className="text-gray-600" />}
              size="small"
              fill_color="bg-transparent"
              className="mr-2"
            />
            <input
              type="text"
              placeholder="Type a message"
              className="flex-1 border rounded-full px-4 py-2  focus:outline-none"
            />
            <ButtonIcon 
              icon={<FiMessageSquare className="text-gray-600" />}
              size="small"
              className="ml-2"
              onClick={() => sendMessage('Hello!')}/>
            <ButtonIcon 
              icon={<FiMic className="text-gray-600" />}
              size="small"
              fill_color="bg-transparent"
              className="ml-2"
            />
          </div>
        </div>
      ) : (
        <div className="flex-1 hidden sm:flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="bg-gray-200 rounded-full p-8 inline-block">
              <span className="text-gray-500 text-3xl">💬</span>
            </div>
            <p className="mt-4 text-gray-600">Select a chat to start messaging</p>
          </div>
        </div>
      )))}
      
    </div>
  );
};

export default ChatxApp;