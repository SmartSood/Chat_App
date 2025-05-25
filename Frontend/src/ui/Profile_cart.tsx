import React from 'react';
import PropTypes from 'prop-types';

interface ProfileCardProps {
  username: string;
  timestamp: Date | string | number;
  isTyping?: boolean;
  profilePicture?: string | null;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ 
  username,
  timestamp,
  isTyping = false,
  profilePicture = null
}) => {
  const formatTime = (date: Date | string | number) => {
    return new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="flex items-center p-3 w-full bg-white hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100">
      {/* Profile Picture */}
      <div className="relative mr-3 flex-shrink-0">
        <img 
          src={profilePicture || 'https://via.placeholder.com/40'}
          alt={username}
          className="w-10 h-10 rounded-full object-cover border border-gray-200"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/40';
          }}
        />
        {/* Online status indicator */}
        {isTyping && (
          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
        )}
      </div>

      {/* Text Content */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-medium text-gray-900 truncate">
            {username}
          </h3>
          <span className="text-xs text-gray-500 whitespace-nowrap ml-2">
            {formatTime(timestamp)}
          </span>
        </div>
        
        {isTyping && (
          <div className="mt-0.5 flex items-center">
            <span className="text-xs text-gray-500 truncate">typing...</span>
            <div className="ml-1 flex space-x-0.5">
              {[0, 150, 300].map((delay) => (
                <div 
                  key={delay}
                  className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: `${delay}ms` }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;