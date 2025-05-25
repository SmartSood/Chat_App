import React, { useState } from 'react';

const AvatarSelect = () => {
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

  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const handleAvatarClick = (avatar) => {
    setSelectedAvatar(avatar);
  };

  const handleProceed = () => {
    if (!selectedAvatar) {
      alert('Please select an avatar first');
      return;
    }
    // Proceed with the selected avatar
    console.log('Proceeding with avatar:', selectedAvatar);
    alert(`Proceeding with ${selectedAvatar}`);
    // Here you would typically navigate to the next page
  };

  return (
    <div className="relative flex flex-col items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-12 overflow-hidden">
      {/* Header */}
      <div className="text-center z-10 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-1">Choose Your</h1>
        <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">Avatar</h2>
      </div>

      {/* Selected Avatar Preview */}
      {selectedAvatar && (
        <div className="mb-8 flex flex-col items-center">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Your Selection:</h3>
          <img
            src={`/${selectedAvatar}`}
            alt="Selected Avatar"
            className="w-32 h-32 rounded-full border-4 border-blue-500 object-cover shadow-lg"
          />
        </div>
      )}

      {/* Avatar Grid */}
      <div className="grid grid-cols-3 gap-4 md:gap-6 mb-8 max-w-2xl mx-auto">
        {avatars.map((avatar, index) => (
          <div
            key={index}
            className={`relative cursor-pointer transition-all duration-200 ${
              selectedAvatar === avatar ? 'transform scale-105' : 'hover:scale-105'
            }`}
            onClick={() => handleAvatarClick(avatar)}
          >
            <img
              src={`/${avatar}`}
              alt={`Avatar ${index + 1}`}
              className={`w-20 h-20 md:w-28 md:h-28 rounded-full object-cover border-4 ${
                selectedAvatar === avatar ? 'border-blue-500' : 'border-white'
              } shadow-md`}
            />
            {selectedAvatar === avatar && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-blue-500 rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Proceed Button */}
      <div className="w-full max-w-xs z-10 mb-8">
        <button
          onClick={handleProceed}
          className={`w-full py-3 px-6 rounded-lg font-medium text-lg shadow-md transition-colors ${
            selectedAvatar
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Proceed
        </button>
      </div>

      {/* Footer */}
      <div className="text-sm text-gray-500 z-10">
        Select an avatar to represent you
      </div>
    </div>
  );
};

export default AvatarSelect;