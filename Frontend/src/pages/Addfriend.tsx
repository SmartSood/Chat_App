import React, { useState } from 'react';
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


    //sample chat data
  const chats = [
    { id: 1, name: 'John Doe', lastMessage: 'Hey, how are you?', time: '10:30 AM', unread: 2 },
    { id: 2, name: 'Jane Smith', lastMessage: 'Meeting at 3pm', time: 'Yesterday', unread: 0 },
    { id: 3, name: 'Work Group', lastMessage: 'Alice: I sent the files', time: 'Yesterday', unread: 5 },
    { id: 1, name: 'John Doe', lastMessage: 'Hey, how are you?', time: '10:30 AM', unread: 2 },
    { id: 2, name: 'Jane Smith', lastMessage: 'Meeting at 3pm', time: 'Yesterday', unread: 0 },
    { id: 3, name: 'Work Group', lastMessage: 'Alice: I sent the files', time: 'Yesterday', unread: 5 },
    { id: 1, name: 'John Doe', lastMessage: 'Hey, how are you?', time: '10:30 AM', unread: 2 },
    { id: 2, name: 'Jane Smith', lastMessage: 'Meeting at 3pm', time: 'Yesterday', unread: 0 },
    { id: 3, name: 'Work Group', lastMessage: 'Alice: I sent the files', time: 'Yesterday', unread: 5 },
    { id: 1, name: 'John Doe', lastMessage: 'Hey, how are you?', time: '10:30 AM', unread: 2 },
    { id: 2, name: 'Jane Smith', lastMessage: 'Meeting at 3pm', time: 'Yesterday', unread: 0 },
    { id: 3, name: 'Work Group', lastMessage: 'Alice: I sent the files', time: 'Yesterday', unread: 5 },

  ];


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
     {(!selectUserOpen&&!selectGroupOpen)?(
     <div className="flex flex-col w-full sm:w-1/3 border-r border-gray-300 bg-blue-background-1 sm:bg-white">
        {/* Header */}
        <header className="flex justify-between items-center p-3  border-gray-300">
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
        <div className="flex rounded-full  w-[90%]   overflow-hidden bg-gray-button-1 ">
          <Button
            variant={activeTab === 'messages' ? 'primary' : 'secondary'}
            text="Messages"
            className="flex-1  text-sm"
            position='single'
            onClick={() => setActiveTab('messages')
            }
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
        
        {/* Chats list */}
    {chats.length>0?(<div className="flex-1 overflow-y-auto">
       {/*  fixed add chat button */}
       <div className='fixed sm:bottom-4 bottom-25 right-4 sm:right-230'>
          <ButtonIcon 
            icon={<AddChatIcon size="xl" />}
            size="large"
            fill_color="bg-black"
            className="p-3"
            onClick={() => {
              setAddChatOpen((op)=>!op);
            }}
          />
        </div>

             {/*  add chat open */}
        {addChatOpen&&(<div className="w-80 p-4 bg-gray-button-2 fixed sm:left-50 left-40 bottom-40 sm:bottom-20 rounded-xl shadow-[0px_0px_100px_0px_rgba(0,0,0,0.20)] inline-flex flex-col  items-center gap-4">
  <div onClick={()=>{setSelectUserOpen(true)}} className="self-stretch p-4 rounded-md inline-flex justify-start items-center gap-4">
    <div className="w-6 h-6 relative overflow-hidden">
      <div className="w-4 h-5 " > <AvatarIcon size="lg"></AvatarIcon></div>
    </div>
    <div className="text-center justify-start text-white text-lg font-medium ">Add Friend</div>
  </div>
  <div onClick={()=>{setSelectGroupOpen(true)}} className="self-stretch p-4 rounded-md inline-flex justify-start items-center gap-4">
    <div className="w-6 h-6 relative overflow-hidden">
    <div className="w-4 h-5 " > <GroupIcon size="lg"></GroupIcon></div>
    </div>
    <div className="text-center justify-start text-white text-lg font-medium ">Create Group</div>
  </div>
</div>)}       


          {chats.map((chat) => (
            <div 
              key={chat.id}
              className={`flex items-center p-3 border-b border-gray-200 cursor-pointer hover:bg-gray-100 ${selectedChat === chat.id ? 'bg-blue-50' : ''}`}
              onClick={() => handleChatSelect(chat.id)}
            >
              <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <span className="font-medium">{chat.name}</span>
                  <span className="text-xs text-gray-500">{chat.time}</span>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                  {chat.unread > 0 && (
                    <span className="bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {chat.unread}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>):(<div className='flex w-full h-full justify-center items-center'>
          <ButtonIcon fill_color='bg-black' size='xtralarge' className='p-3 ' icon={<AddChatIcon size='5xl'></AddChatIcon>}></ButtonIcon>
          
        </div>)}    

        {/* Fixed Bottom Navigation */}
      {isSmallScreen&&(<nav className="  flex justify-around p-2 border-t border-gray-300 bg-white">
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
        </nav>)}  

       
      </div>):(selectUserOpen)?(<UserAdd setSelectUserOpen={setSelectUserOpen}></UserAdd>):(<div></div>)} 
     
     
     

       
       

      {/* Right side - Chat area */}

    {!isSmallScreen&&((selectedChat ? (
        <div className="flex bg-blue-background-1 flex-col flex-1">
          {/* Chat header */}
          <div className="flex items-center justify-between p-3 border-b border-gray-300 bg-white">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
              <div>
                <h2 className="font-medium">{chats.find(c => c.id === selectedChat)?.name}</h2>
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
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="flex justify-end mb-4">
              <div className="bg-blue-100 rounded-lg p-3 max-w-xs">
                <p>Hey there!</p>
                <p className="text-xs text-gray-500 text-right mt-1">10:30 AM</p>
              </div>
            </div>
            <div className="flex justify-start mb-4">
              <div className="bg-white rounded-lg p-3 max-w-xs shadow">
                <p>Hi! How are you?</p>
                <p className="text-xs text-gray-500 text-right mt-1">10:32 AM</p>
              </div>
            </div>
          </div>

          {/* Message input */}
          <div className="flex items-center p-3 border-t border-gray-300 bg-white">
            <ButtonIcon 
              icon={<FiPaperclip className="text-gray-600" />}
              size="small"
              fill_color="bg-transparent"
              className="mr-2"
            />
            <input
              type="text"
              placeholder="Type a message"
              className="flex-1 border rounded-full px-4 py-2 focus:outline-none"
            />
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