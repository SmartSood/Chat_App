
import React, { useState, useRef } from 'react';
import { ButtonIcon } from '../ui/Button_Icon';
import BackArrowIcon from '../icons/back_arrow_icon';
import PencilIcon from '../icons/pencil_icon';
import DropdownArrowIcon from '../icons/dropdown_arrow';
import { CameraIcon } from '../icons/camera_icon';
import { GalleryIcon } from '../icons/gallery_icon';
import { AvatarIcon } from '../icons/avatar_icon';
import { useNavigate } from 'react-router-dom';
import AvatarSelect from '../components/avatarselect';

export default function Signup() {
  const countries = [
    { code: '+44', flag: 'https://flagcdn.com/w40/gb.png', name: 'UK' },
    { code: '+91', flag: 'https://flagcdn.com/w40/in.png', name: 'India' },
    { code: '+1', flag: 'https://flagcdn.com/w40/us.png', name: 'USA' },
  ];



  const avatars = [
    'avatar1.png',
    'avatar2.png',
    'avatar3.png',
    'avatar4.png',
    'avatar5.png',
    'avatar6.png',
    'avatar7.png',
    'avatar8.png',
    'avatar9.png',
  ];

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [profileDrawer, setProfileDrawer] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [avatarSelected,setavatarSelected]=useState<Boolean>(false)
  
  const cameraInputRef = useRef<HTMLInputElement | null>(null);
  const galleryInputRef = useRef<HTMLInputElement | null>(null);




  const navigate=useNavigate();
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedFile(file);
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  function handle_back_arrow(){
    navigate('/')
  }
  const openCamera = () => {
    cameraInputRef.current?.click();
  };

  const openGallery = () => {
    galleryInputRef.current?.click();
  };

  function openAvatar(){
    setProfileDrawer(false);
    setavatarSelected(true);
    
  }

  const handleSubmit = async () => {
    if (!name || !bio || !email || !phone || !password || !selectedFile) {
      alert('Please fill out all fields and select a profile image');
      return;
    }
  
    setLoading(true);
  
    try {
      const formData = new FormData();
      formData.append('username', name);
      formData.append('bio', bio);
      formData.append('email', email);
      formData.append('phoneNumber', selectedCountry.code + phone);
      formData.append('password', password);
      formData.append('profilePic', selectedFile); // assuming `selectedFile` holds the image
  
      const response = await fetch('http://localhost:3000/auth/signup', {
        method: 'POST',
        body: formData,
      });
  
      const data = await response.json();
      if (response.ok) {
        alert('User created successfully');
      console.log(data);
         //@ts-ignore
      localStorage.setItem('userId',data.user.id)
      //@ts-ignore
        localStorage.setItem('token', data.token);
        navigate('/signin')
      } else {
        alert('Error: ' + (data.message || 'Something went wrong'));
      }
    } catch (error: any) {
        console.error('Network error:', error);
      alert('Network error: ' + error.message);
    }
  
    setLoading(false);
  };
  
  return (
    <div className="min-h-screen bg-blue-background-1 flex items-center justify-center px-4">

{avatarSelected ? <AvatarSelect setavatarSelected={setavatarSelected}
    setProfileImage={setProfileImage}
    setSelectedFile={setSelectedFile} ></AvatarSelect> :( <div className="w-full max-w-lg bg-white rounded-3xl shadow-lg p-6">
        {/* Back Arrow */}
        <button className="mb-4">
          <ButtonIcon onClick={handle_back_arrow} icon={<BackArrowIcon size="lg" />} />
        </button>

        {/* Profile Image & Edit */}
        <div className="relative w-28 h-28 mx-auto mb-8">
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover"
            />
          ) : (
            <div className="w-28 h-28 bg-gray-300 rounded-full" />
          )}
          <div
            onClick={() => setProfileDrawer(!profileDrawer)}
            className="absolute bottom-1 right-1 w-7 h-7 bg-blue-dark-10 rounded-full flex items-center justify-center shadow-md cursor-pointer"
          >
            <PencilIcon size="md" />
          </div>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <InputField label="Name" value={name} onChange={setName} />
          <InputField label="Bio" value={bio} onChange={setBio} />
          <InputField label="Email" value={email} onChange={setEmail} type="email" />
          <InputField label="Password" value={password} onChange={setPassword} type="password" />

          {/* Phone Number with Country Code */}
          <div>
            <label className="text-sm text-gray-500 mb-1 block">Phone Number</label>
            <div className="flex items-center">
              <div className="relative">
                <button
                  type="button"
                  className="flex items-center px-2 py-1 border border-gray-300 bg-white rounded-md"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <img src={selectedCountry.flag} className="w-6 h-4 mr-1" alt="flag" />
                  <DropdownArrowIcon size="lg" />
                </button>
                {dropdownOpen && (
                  <div className="absolute mt-1 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    {countries.map((country, idx) => (
                      <div
                        key={idx}
                        className="flex items-center px-2 py-2 hover:bg-blue-50 cursor-pointer"
                        onClick={() => {
                          setSelectedCountry(country);
                          setDropdownOpen(false);
                        }}
                      >
                        <img src={country.flag} className="w-5 h-3 mr-2" alt="flag" />
                        <span className="text-sm">{country.code}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <span className="mx-2 text-gray-500">{selectedCountry.code}</span>
              <input
                type="tel"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={loading}
            className={`w-full text-white font-semibold py-3 rounded-md bg-blue-dark-10 transition ${
              loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
            }`}
          >
            {loading ? 'Creating...' : 'Create Account'}
          </button>
        </div>
      </div>)}

   {/* Profile Image Bottom Drawer */}    
      <div
        className={`fixed bottom-0 w-full sm:w-[35%] transition-transform duration-300 ease-in-out ${
          profileDrawer ? 'translate-y-0' : 'translate-y-full'
        } bg-blue-dark-10 shadow-lg rounded-t-xl p-4`}
        onClick={() => setProfileDrawer(false)}
      >
        <div className="grid grid-cols-3" onClick={(e) => e.stopPropagation()}>
          {/* Camera */}
          <ImageButton label="Camera" icon={<CameraIcon size="4xl" />} onClick={openCamera} />

          {/* Gallery */}
          <ImageButton label="Gallery" icon={<GalleryIcon size="4xl" />} onClick={openGallery} />

          {/* Avatar */}
          <ImageButton
            label="Avatar"
            icon={<AvatarIcon size="4xl" />}
            onClick={openAvatar}
          />
        </div>

        {/* Hidden File Inputs */}
        <input
          ref={cameraInputRef}
          type="file"
          accept="image/*"
          capture="environment"
          className="hidden"
          onChange={handleImageChange}
        />
        <input
          ref={galleryInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
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

function ImageButton({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <div className="text-white text-center">
      <div className="flex justify-center">
        <ButtonIcon fill_color="bg-blue-dark-10" size="xtralarge" icon={icon} onClick={onClick} />
      </div>
      <div>{label}</div>
    </div>
  );
}
