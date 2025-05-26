
import React, { useState, useRef } from 'react';
import { ButtonIcon } from '../ui/Button_Icon';
import BackArrowIcon from '../icons/back_arrow_icon';
import { useNavigate,useLocation } from 'react-router-dom';

export default function Signin() {
  
  
  



 
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  
  
  



  const navigate=useNavigate();

  const handleSubmit = async () => {
    if ( !email || !password ) {
      alert('Please fill out all fields');
      return;
    }
  
    setLoading(true);
  
    try {
        const payload = { email, password };
        
  
      const response = await fetch('http://localhost:3000/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      
  
      const data = await response.json();
      if (response.ok) {
        alert('User Signed in successfully');
        console.log(data);
        //@ts-ignore
      sessionStorage.setItem('userId',data.user.id)
      //@ts-ignore
        sessionStorage.setItem('token', data.token);
        setTimeout(()=>{
          console.log("Tzimeour over")
          navigate('/addfriend')
        },2000)
       
      } else {
        alert('Error: ' + (data.message || 'Something went wrong'));
      }
    } catch (error: any) {
        console.error('Network error:', error);
      alert('Network error: ' + error.message);
    }
  
    setLoading(false);
  };
  function handle_back_arrow(){
    navigate('/')
  }
  
  return (
    <div className="min-h-screen bg-blue-background-1 flex items-center justify-center px-4">

 <div className="w-full max-w-lg bg-white rounded-3xl shadow-lg p-6">
        {/* Back Arrow */}
        <button className="mb-4">
          <ButtonIcon onClick={handle_back_arrow}icon={<BackArrowIcon size="lg" />} />
        </button>


        {/* Form */}
        <div className="space-y-4">
          <InputField label="Email" value={email} onChange={setEmail} type="email" />
          <InputField label="Password" value={password} onChange={setPassword} type="password" />

         

          {/* Submit Button */}
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={loading}
            className={`w-full text-white font-semibold py-3 rounded-md bg-blue-dark-10 transition ${
              loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
            }`}
          >
            {loading ? 'Logging In...' : 'Login'}
          </button>
        </div>
      </div>

  
       
    </div>
  );
}

// Components
function InputField({
  label,
  value,
  onChange,
  type = 'text',
}: {
  label: string;
  value: string;
  type?: string;
  onChange: (val: string) => void;
}) {
  return (
    <div>
      <label className="text-sm text-gray-500 mb-1 block">{label}</label>
      <input
        type={type}
        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={`Enter your ${label.toLowerCase()}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

