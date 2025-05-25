import React, { useState, useEffect } from 'react';

const AnonymityApp = () => {
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

  const [positionedAvatars, setPositionedAvatars] = useState([]);

  useEffect(() => {
    const positions = [
  { top: 10, left: 30 },
  { top: 0, left: 150 },
  { top: 20, left: 270 },
  { top: 120, left: 0 },
  { top: 110, left: 120 },
  { top: 100, left: 240 },
  { top: 120, left: 360 },
  { top: 230, left: 60 },
  { top: 220, left: 180 },
];


    const fixedAvatars = avatars.slice(0, positions.length).map((avatar, index) => ({
      avatar,
      top: positions[index].top,
      left: positions[index].left,
      rotate: `${Math.random() * 20 - 10}deg`,
      zIndex: index,
    }));

    setPositionedAvatars(fixedAvatars);
  }, []);

  return (
    <div className="relative flex flex-col justify-between items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-12 overflow-hidden">
      {/* Header */}
      <div className="text-center z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-1">Start a Fun</h1>
        <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-1">Communication</h2>
        <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">with Anonymity</h2>
      </div>

      {/* Avatar Cluster */}
      <div className="relative w-full flex-1 flex items-center justify-center my-8 z-0">
        <div className="relative w-[450px] h-[450px]">
          {positionedAvatars.map((item, index) => (
            <div
              key={index}
              className="absolute transition-all duration-300 hover:scale-125 hover:z-20"
              style={{
                left: `${item.left}px`,
                top: `${item.top}px`,
                transform: `rotate(${item.rotate})`,
                zIndex: item.zIndex,
              }}
            >
              <img 
  src={`/${item.avatar}`} 
  alt={`Avatar ${index + 1}`} 
  className="rounded-full w-32 h-32 md:w-36 md:h-36 object-cover border-4 border-white shadow-lg hover:shadow-xl"
/>

            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col items-center space-y-4 w-full max-w-xs z-10 mb-8">
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium text-lg shadow-md transition-colors">
          Create an account
        </button>
        <button className="w-full text-blue-600 hover:text-blue-800 font-medium py-3 px-6 rounded-lg transition-colors">
          Log in
        </button>
      </div>

      {/* Footer */}
      <div className="text-sm text-gray-500 z-10">
        Connect anonymously with anyone
      </div>
    </div>
  );
};

export default AnonymityApp;
