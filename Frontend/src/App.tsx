import { useState } from 'react'
import { Button } from './ui/Button'
import { Message } from './ui/Message_Box'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <div><Button loading= {true }  position='last'  variant='secondary' text='sdvbjebhrbdjvfbkejfbvkj'> </Button></div> */}

     <div>
      <Message
  variant="sent"
  text="Hello there! How are you?"
  time="10:30 AM"
  status="read" 
/>
<Message
  variant="received"
  text="Hello there! How are you?"
  time="10:30 AM"
  status="read" 
/>
<Message
  variant="received"
  text="Hello there! How are you?"
  time="10:30 AM"
  status="read" 
/>
<Message
  variant="received"
  type="voice"
  time="10:35 AM"
  sender="John"
  voiceDuration="0:15"
  onPlayPause={() => console.log('Play/pause clicked')}
  isPlaying={false}
/>

<Message
  variant="sent"
  type="file"
  time="10:40 AM"
  fileName="Project_Proposal.pdf"
  fileSize="2.4 MB"
  fileType="PDF"
  onDownload={() => console.log('Download clicked')}
  status="delivered"
/>

     </div>

     <div className="space-y-3 p-4 max-w-md mx-auto">
      {/* Received text message */}
      <Message
        variant="received"
        text="Hi there! Are we still meeting tomorrow?"
        time="10:30 AM"
        sender="Sarah"
      />
      
      {/* Sent text reply */}
      <Message
        variant="sent"
        text="Yes, at 2pm in the conference room"
        time="10:32 AM"
        status="read"
      />
      
      {/* Received voice message */}
      <Message
        variant="received"
        type="voice"
        time="10:35 AM"
        sender="Sarah"
        voiceDuration="0:23"
      />
      
      {/* Sent image message */}
      <Message
        variant="sent"
        type="image"
        time="10:40 AM"
        mediaUrl="/meeting-room.jpg"
        text="This is the room we booked"
        status="read"
      />
      
      {/* Received file attachment */}
      <Message
        variant="received"
        type="file"
        time="10:45 AM"
        sender="Sarah"
        fileName="Agenda.docx"
        fileSize="1.2 MB"
        fileType="DOCX"
      />
    </div>



    <Message
  variant="sent"
  text="Did you get my files?"
  time="2:30 PM"
  status="delivered"
  isRead={true}
/>

// Received message that's been read
<Message
  variant="received"
  text="Yes, I got them. Thanks!"
  time="2:32 PM"
  sender="Alice"
  isRead={true}
/>

// Sent message that hasn't been read yet
<Message
  variant="sent"
  text="Please review these documents"
  time="2:35 PM"
  status="delivered"
  isRead={false}
/>
    </>
  ) 
}

export default App
