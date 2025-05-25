import { useState } from 'react'
import { Button } from './ui/Button'
import { Input } from './ui/Input'
import { ButtonIcon } from './ui/Button_Icon'
import SignupPage from './pages/Signup'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SignupPage></SignupPage>
  
      
    </>
  ) 
}

export default App
