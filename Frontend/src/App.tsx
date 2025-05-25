import { useState } from 'react'
import { Button } from './ui/Button'
import { Input } from './ui/Input'
import { ButtonIcon } from './ui/Button_Icon'
import { Message } from './ui/Message_Box'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div><Button loading= {true }  position='last'  variant='secondary' text='sdvbjebhrbdjvfbkejfbvkj'> </Button></div>
      <div><Input > efjkefkgekgek</Input>
      

      </div>
  
      
    </>
  ) 
}

export default App