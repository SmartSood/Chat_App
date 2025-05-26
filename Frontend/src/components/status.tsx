
import React, { useEffect, useState } from 'react';
import { FiChevronLeft, FiMoreVertical } from 'react-icons/fi';
import { AvatarIcon } from '../icons/avatar_icon';
// import { markStatusAsViewed } from '../services/statusService';

interface Status {
  id: string;
  mediaUrl: string;
  caption: string | null;
  expiresAt: string;
  createdAt: string;
  user: {
    id: string;
    username: string;
    profilePicUrl: string | null;
  };
  viewed: boolean;
}

interface StatusViewProps {
  statuses: Status[];
  onClose: () => void;
  authToken: string;
  currentUserId: string;
}

const StatusView = ({ statuses, onClose, authToken, currentUserId }: StatusViewProps) => {
  const [currentStatusIndex, setCurrentStatusIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);

  const currentStatus = statuses[currentStatusIndex];

  useEffect(() => {
    if (!currentStatus || paused) return;

    // Mark status as viewed when it's displayed if not already viewed
    if (!currentStatus.viewed && currentStatus.user.id !== currentUserId) {
      fetch(`http://localhost:3000/statuses/view/${currentStatus.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${localStorage.getItem('token')}` // Or your auth method
        }
      }).catch(console.error);
    }

    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          if (currentStatusIndex < statuses.length - 1) {
            setTimeout(() => {
              setCurrentStatusIndex(currentStatusIndex + 1);
            }, 300);
          } else {
            setTimeout(onClose, 300);
          }
          return 100;
        }
        return prev + (100 / 5); // 5 seconds per status
      });
    }, 100);

    return () => clearInterval(interval);
  }, [currentStatusIndex, paused, currentStatus, authToken, currentUserId]);

  if (!statuses.length) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col">
      {/* Progress bars */}
      <div className="flex gap-1 p-2">
        {statuses.map((_, index) => (
          <div key={index} className="h-1 flex-1 bg-gray-700 rounded-full">
            {index === currentStatusIndex && (
              <div
                className="h-full bg-white rounded-full"
                style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}
              />
            )}
            {index < currentStatusIndex && (
              <div className="h-full bg-white rounded-full w-full" />
            )}
          </div>
        ))}
      </div>

      {/* Header */}
      <div className="flex items-center justify-between p-3 text-white">
        <button onClick={onClose} className="p-1">
          <FiChevronLeft size={24} />
        </button>
        <div className="flex items-center">
          {currentStatus.user.profilePicUrl ? (
            <img
              src={currentStatus.user.profilePicUrl}
              alt={currentStatus.user.username}
              className="w-8 h-8 rounded-full mr-2"
            />
          ) : (
            <div className="w-8 h-8 rounded-full mr-2 bg-gray-600 flex items-center justify-center">
              <AvatarIcon size="sm" />
            </div>
          )}
          <div>
            <p className="font-medium">{currentStatus.user.username}</p>
            <p className="text-xs text-gray-300">
              {new Date(currentStatus.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </p>
          </div>
        </div>
        <button className="p-1">
          <FiMoreVertical size={20} />
        </button>
      </div>

      {/* Status content */}
      <div 
        className="flex-1 flex items-center justify-center relative"
        onMouseDown={() => setPaused(true)}
        onMouseUp={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        {currentStatus.mediaUrl.match(/\.(mp4|mov|webm)$/i) ? (
          <video
            src={currentStatus.mediaUrl}
            autoPlay
            loop={false}
            className="max-h-full max-w-full object-contain"
            onEnded={() => {
              if (currentStatusIndex < statuses.length - 1) {
                setCurrentStatusIndex(currentStatusIndex + 1);
              } else {
                onClose();
              }
            }}
          />
        ) : (
          <img
            src={currentStatus.mediaUrl}
            alt="Status"
            className="max-h-full max-w-full object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150';
            }}
          />
        )}
      </div>

      {/* Caption */}
      {currentStatus.caption && (
        <div className="p-4 text-white text-center">
          <p>{currentStatus.caption}</p>
        </div>
      )}
    </div>
  );
};

export default StatusView;