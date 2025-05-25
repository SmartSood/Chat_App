import { useState } from 'react'
import { Button } from './ui/Button'
import ProfileCart from './ui/Profile_cart'
import './App.css'
import Landingpage from './pages/landing_page'
import Avatar from './pages/avatarselect'


function App() {
  // Dummy user data state
  // const [users, setUsers] = useState([
  //   {
  //     id: 1,
  //     username: "kevin.eth",
  //     lastActive: new Date(Date.now() - 5 * 60 * 1000), // 5 mins ago
  //     isTyping: true,
  //     profilePicture: "https://randomuser.me/api/portraits/men/32.jpg"
  //   },
  //   {
  //     id: 2,
  //     username: "sarah.crypto",
  //     lastActive: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
  //     isTyping: false,
  //     profilePicture: "https://randomuser.me/api/portraits/women/44.jpg"
  //   }
  // ]);

  return (
    <>
    <SignupPage></SignupPage>
  
      
    </>
  ) 
}

export default App