# 💬 ChatFusion - Real-Time AI Chat App  
**Flipr Hackathon 27** | 

Live Demo:https://chat-app-w25d.vercel.app/


Here is the video link = https://drive.google.com/drive/folders/1AVJwJxUeMLiks1YRwqjGTug82_wAaAAV

*A feature-rich chat app with AI summaries, voice messages, and real-time collaboration.*  

---

## 🚀 Features  
| **Core**               | **Innovative**                  |  
|-------------------------|----------------------------------|  
| ✅ Real-time messaging  | ✨ AI chat summarization (TL;DR) |  
| ✅ Group chats          | 🎙️ Push-to-talk voice messages  |  
| ✅ Typing indicators    | 🎨 Dark/light mode toggle       |  
| ✅ Image/file sharing   | 🤖 Custom AI chatbot replies    |  

*(Bonus: Message scheduling, emoji reactions, and Firebase auth)*  

Here are the relation maps = https://drive.google.com/drive/folders/1AajolhJo1Hc74Z8dJ5A0akmxaJ3RTyHl




---

## 🛠️ Tech Stack  
**Frontend**: React.js, Tailwind CSS, Socket.io  
**Backend**: Node.js, Express, Firebase Firestore  
**AI**: OpenAI GPT-3.5 Turbo API  
**Deployment**: Vercel (Frontend), Render (Backend)  

---

## 📦 Installation  
1. **Clone the repo**  
   ```bash
   git clone https://github.com/SmartSood/Chat_App.git
   cd Chat_App
   ```


2. **Setup Backend**
   Rember if you are doing this step then you need to change all the render routes to your local routes and also load the env file preferered either use provided url or just generate the frontend

**Terminal1**
```bash
cd backend
npm install
npm run dev
```
**Terminal2**
```bash
npx prisma db push
npx prisma generate
npm run socket
```
3. **Setup Frontend**
```bash
cd ../frontend
npm install
npm run dev
```
4.  **.env file structure**
```bash
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL=""
#Salt rounds and secretkey for bcrypt

SALT_ROUNDS=
JWT_SECRET_KEY=""

#node environment
NODE_ENV=""
CLOUDINARY_CLOUD_NAME=""
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=""
``` 

