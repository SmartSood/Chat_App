// status.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface Status {
  id: string;
  mediaUrl: string;
  type: 'image' | 'video';
  userId: string;
  username: string;
  userProfilePic: string;
  createdAt: string;
  viewed: boolean;
}

export const StatusView = ({ 
  statuses, 
  authToken, 
  currentUserId,
  onClose 
}: {
  statuses: any[];
  authToken: string;
  currentUserId: string;
  onClose: () => void;
}) => {
  const [currentStatusIndex, setCurrentStatusIndex] = useState(0);
  const [statusList, setStatusList] = useState<Status[]>([]);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (statuses && statuses.length > 0) {
      // Transform the status data into our Status interface
      const formattedStatuses = statuses.map(status => ({
        id: status.id,
        mediaUrl: status.mediaUrl,
        type: status.type,
        userId: status.user.id,
        username: status.user.username,
        userProfilePic: status.user.profilePicUrl,
        createdAt: status.createdAt,
        viewed: status.viewedBy.some((view: any) => view.userId === currentUserId)
      }));
      
      setStatusList(formattedStatuses);
    }
  }, [statuses, currentUserId]);

  useEffect(() => {
    if (!isPlaying || statusList.length === 0) return;

    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          handleNextStatus();
          return 0;
        }
        return prev + 1;
      });
    }, 50); // Adjust timing for 5s status (100 steps * 50ms = 5s)

    return () => clearInterval(timer);
  }, [isPlaying, currentStatusIndex, statusList.length]);

  const handleNextStatus = () => {
    if (currentStatusIndex < statusList.length - 1) {
      setCurrentStatusIndex(currentStatusIndex + 1);
      setProgress(0);
      markStatusAsViewed(statusList[currentStatusIndex + 1].id);
    } else {
      onClose(); // Close when all statuses are viewed
    }
  };

  const handlePrevStatus = () => {
    if (currentStatusIndex > 0) {
      setCurrentStatusIndex(currentStatusIndex - 1);
      setProgress(0);
    }
  };

  const markStatusAsViewed = async (statusId: string) => {
    try {
      await axios.post(
        `http://localhost:3000/status/view/${statusId}`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: authToken
          }
        }
      );
      // Update the status in the list as viewed
      setStatusList(prev => prev.map(status => 
        status.id === statusId ? { ...status, viewed: true } : status
      ));
    } catch (error) {
      console.error('Error marking status as viewed:', error);
    }
  };

  const currentStatus = statusList[currentStatusIndex];

  if (statusList.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full bg-gray-900 text-white">
        <p>No status updates available</p>
        <button 
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-500 rounded-md"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col">
      {/* Progress bars */}
      <div className="flex gap-1 p-2">
        {statusList.map((_, index) => (
          <div key={index} className="h-1 flex-1 bg-gray-700 rounded-full">
            <div 
              className={`h-full rounded-full ${index < currentStatusIndex ? 'bg-white' : 
                index === currentStatusIndex ? 'bg-white' : 'bg-gray-500'}`}
              style={{ 
                width: index === currentStatusIndex ? `${progress}%` : '0%',
                transition: index === currentStatusIndex ? 'width 0.05s linear' : 'none'
              }}
            ></div>
          </div>
        ))}
      </div>

      {/* Status header */}
      <div className="flex items-center p-3 text-white">
        <button onClick={onClose} className="mr-2">
          &times;
        </button>
        {currentStatus && (
          <>
            <img 
              src={currentStatus.userProfilePic === 'default' ? '/default-avatar.png' : currentStatus.userProfilePic} 
              alt={currentStatus.username}
              className="w-8 h-8 rounded-full mr-2"
            />
            <div>
              <p className="font-medium">{currentStatus.username}</p>
              <p className="text-xs text-gray-300">
                {new Date(currentStatus.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </>
        )}
      </div>

      {/* Status content */}
      <div 
        className="flex-1 flex items-center justify-center relative"
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {currentStatus && (
          currentStatus.type === 'image' ? (
            <img 
              src={currentStatus.mediaUrl} 
              alt="Status" 
              className="max-h-full max-w-full object-contain"
            />
          ) : (
            <video
              src={currentStatus.mediaUrl}
              className="max-h-full max-w-full"
              autoPlay
              loop={false}
              onEnded={handleNextStatus}
            />
          )
        )}
      </div>

      {/* Navigation buttons */}
      <div className="absolute inset-0 flex justify-between items-center pointer-events-none">
        <button 
          onClick={handlePrevStatus}
          className="h-full w-1/2 pointer-events-auto"
          style={{ opacity: 0 }}
        ></button>
        <button 
          onClick={handleNextStatus}
          className="h-full w-1/2 pointer-events-auto"
          style={{ opacity: 0 }}
        ></button>
      </div>
    </div>
  );
};