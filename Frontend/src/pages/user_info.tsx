import React, { useState, useRef, useEffect } from 'react';
import { ButtonIcon } from '../ui/Button_Icon';
import BackArrowIcon from '../icons/back_arrow_icon';
import PencilIcon from '../icons/pencil_icon';
import DropdownArrowIcon from '../icons/dropdown_arrow';
import { CameraIcon } from '../icons/camera_icon';
import { GalleryIcon } from '../icons/gallery_icon';
import { AvatarIcon } from '../icons/avatar_icon';
import { useNavigate } from 'react-router-dom';
import AvatarSelect from '../components/avatarselect';

interface UserData {
  username: string;
  about: string;
  email: string;
  phoneNumber: string;
  profilePicUrl: string;
}

export default function ProfilePage() {
  const countries = [
    { code: '+44', flag: 'https://flagcdn.com/w40/gb.png', name: 'UK' },
    { code: '+91', flag: 'https://flagcdn.com/w40/in.png', name: 'India' },
    { code: '+1', flag: 'https://flagcdn.com/w40/us.png', name: 'USA' },
  ];

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [name, setName] = useState('');
  const [about, setabout] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [profileDrawer, setProfileDrawer] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [avatarSelected, setAvatarSelected] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState(false);
  
  const cameraInputRef = useRef<HTMLInputElement | null>(null);
  const galleryInputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
useEffect(() => {
  const fetchUserData = async () => {
    try {
      const token = sessionStorage.getItem('token');
      
      if (!token) {
        navigate('/login');
        return;
      }

      const response = await fetch('https://chat-app-unc7.onrender.com/user/me', {
    headers: {
        'Authorization': `${token}`,
    },
});

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (!data.user) {
        throw new Error('User data not found in response');
      }

      const user = data.user;
      
      console.log('Received user data:', user); // Debug log
      
      setName(user.username || '');
      setabout(user.about || user.about || ''); // Handle both about and about cases
      setEmail(user.email || '');
      
      if (user.phoneNumber) {
        const phoneData = extractPhoneData(user.phoneNumber);
        setPhone(phoneData.number);
        const country = countries.find(c => user.phoneNumber.startsWith(c.code)) || countries[0];
        setSelectedCountry(country);
      }
      
      if (user.profilePicUrl) {
        setProfileImage(user.profilePicUrl);
      }

    } catch (error) {
      console.error('Error fetching user data:', error);
      alert('Failed to load profile data. Please try again.');
    }
  };

  fetchUserData();
}, []);

  const extractPhoneData = (phoneNumber: string) => {
    for (const country of countries) {
      if (phoneNumber.startsWith(country.code)) {
        return {
          countryCode: country.code,
          number: phoneNumber.replace(country.code, '')
        };
      }
    }
    return {
      countryCode: countries[0].code,
      number: phoneNumber.replace(countries[0].code, '')
    };
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedFile(file);
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  function handle_back_arrow() {
    navigate(-1);
  }

  const openCamera = () => {
    cameraInputRef.current?.click();
  };

  const openGallery = () => {
    galleryInputRef.current?.click();
  };

  function openAvatar() {
    setProfileDrawer(false);
    setAvatarSelected(true);
  }

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userId')
    navigate('/');
  };

  const handleSaveProfile = async () => {
  if (!name || !email) {
    alert('Name and email are required');
    return;
  }

  setLoading(true);

  try {
    const token = sessionStorage.getItem('token');
    const response = await fetch('https://chat-app-unc7.onrender.com/user/update', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json', // Required for JSON payload
    'Authorization': `${token}`
  },
  body: JSON.stringify({
    username: name,
    about: about,
    phoneNumber: selectedCountry.code + phone,
    profilePicUrl: profileImage
  }),
});


    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to update profile');
    }

    const data = await response.json();
    alert('Profile updated successfully');
    setIsEditing(false);
    
    // Update local state
    setName(data.user.username);
    setabout(data.user.about || '');
    setEmail(data.user.email);
    if (data.user.profilePicUrl) {
      setProfileImage(data.user.profilePicUrl);
    }
  } catch (error) {
    console.error('Update error:', error);
    alert(error.message || 'Failed to update profile');
  } finally {
    setLoading(false);
  }
};

  // Rest of the component remains the same...
  return (
    <div className="min-h-screen bg-blue-background-1 flex items-center justify-center px-4">
      {avatarSelected ? (
        <AvatarSelect 
          setavatarSelected={setAvatarSelected}
          setProfileImage={setProfileImage}
          setSelectedFile={setSelectedFile} 
        />
      ) : (
        <div className="w-full max-w-lg bg-white rounded-3xl shadow-lg p-6">
          {/* Back Arrow */}
          <button className="mb-4" onClick={handle_back_arrow}>
            <ButtonIcon icon={<BackArrowIcon size="lg" />} />
          </button>

          {/* Profile Image & Edit */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative w-28 h-28 mb-4">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-28 h-28 rounded-full object-cover"
                />
              ) : (
                <div className="w-28 h-28 bg-gray-300 rounded-full" />
              )}
              {isEditing && (
                <div
                  onClick={() => setProfileDrawer(!profileDrawer)}
                  className="absolute bottom-1 right-1 w-7 h-7 bg-blue-dark-10 rounded-full flex items-center justify-center shadow-md cursor-pointer"
                >
                  <PencilIcon size="md" />
                </div>
              )}
            </div>
            <h2 className="text-2xl font-semibold">{name}</h2>
          </div>

          {/* Profile Info */}
          <div className="space-y-6 mb-8">
            <InfoField label="about" value={about} isEditing={isEditing} onChange={setabout} />
            <InfoField label="Email" value={email} isEditing={false}  type="email" />
            
            {/* Phone Number with Country Code */}
            <div>
              <label className="text-sm text-gray-500 mb-1 block">Phone Number</label>
              {isEditing ? (
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
              ) : (
                <div className="px-3 py-2">
                  {phone ? `${selectedCountry.code} ${phone}` : 'Not provided'}
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col space-y-3">
            {isEditing ? (
              <>
                <button
                  onClick={handleSaveProfile}
                  disabled={loading}
                  className={`w-full text-white font-semibold py-3 rounded-md bg-blue-dark-10 transition ${
                    loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
                  }`}
                >
                  {loading ? 'Saving...' : 'Save Changes'}
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="w-full text-blue-dark-10 font-semibold py-3 rounded-md bg-white border border-blue-dark-10 transition hover:bg-gray-50"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setIsEditing(true)}
                  className="w-full text-white font-semibold py-3 rounded-md bg-blue-dark-10 transition hover:bg-blue-700"
                >
                  Edit Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full text-red-600 font-semibold py-3 rounded-md bg-white border border-red-600 transition hover:bg-red-50"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}

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

// Components (keep these the same as in your original code)
function InfoField({
  label,
  value,
  isEditing,
  onChange,
  type = 'text',
}: {
  label: string;
  value: string;
  isEditing: boolean;
  type?: string;
  onChange?: (val: string) => void;
}) {
  return (
    <div>
      <label className="text-sm text-gray-500 mb-1 block">{label}</label>
      {isEditing ? (
        <input
          type={type}
          className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
        />
      ) : (
        <div className="px-3 py-2">{value || 'Not provided'}</div>
      )}
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