import { useState } from 'react'
import { Button } from './ui/Button'
import { Input } from './ui/Input'
import { ButtonIcon } from './ui/Button_Icon'
import SignupPage from './pages/Signup'
import ProfileCart from './ui/Profile_cart'
import './App.css'
import Landingpage from './pages/landing_page'
import Avatar from './components/avatarselect'
import AvatarSelect from './components/avatarselect'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signin from './pages/Signin'

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
   < Router>
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/signin" element={<Signin/>} />
    </Routes>
    </Router>
   
      
    
  ) 
}

export default App