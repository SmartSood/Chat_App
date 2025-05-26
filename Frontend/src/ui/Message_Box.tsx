import { useState, useRef, useEffect } from 'react';
import { 
  FiFile, 
  FiPlay, 
  FiPause, 
  FiDownload, 
  FiCheck,
  FiImage,
  FiVideo
} from "react-icons/fi";

type MessageStatus = "sending" | "sent" | "delivered" | "read";
type MessageVariant = "sent" | "received";
type MessageType = "TEXT" | "AUDIO" | "FILE" | "IMAGE" | "VIDEO";

interface StatusClasses {
  sending: string;
  sent: string;
  delivered: string;
  read: string;
}

interface VariantClasses {
  base: string;
  secondary: string;
  position: string;
  bubble: string;
  time: string;
  icon: string;
  action: string;
  status: StatusClasses;
  mediaOverlay: string;
}

interface MessageProps {
  variant: MessageVariant;
  text?: string;
  time: string;
  sender?: string;
  className?: string;
  type?: MessageType;
  voiceDuration?: string;
  fileName?: string;
  fileSize?: string;
  fileType?: string;
  mediaUrl?: string;
  thumbnailUrl?: string;
  mediaWidth?: number;
  mediaHeight?: number;
  onPlayPause?: () => void;
  onDownload?: () => void;
  onMediaClick?: () => void;
  status?: MessageStatus;
  isRead?: boolean;
  showStatus?: boolean;
}

const variantClasses: Record<MessageVariant, VariantClasses> = {
  sent: {
    base: "bg-gray-700 text-white",
    secondary: "bg-gray-600",
    position: "justify-end",
    bubble: "rounded-t-3xl rounded-bl-3xl",
    time: "text-gray-300",
    icon: "text-gray-200",
    action: "text-gray-200 hover:text-white",
    status: {
      sending: "text-gray-400",
      sent: "text-gray-400",
      delivered: "text-gray-300",
      read: "text-green-400"
    },
    mediaOverlay: "bg-gray-800 bg-opacity-30"
  },
  received: {
    base: "bg-gray-200 text-gray-800",
    secondary: "bg-gray-300",
    position: "justify-start",
    bubble: "rounded-t-3xl rounded-br-3xl",
    time: "text-gray-500",
    icon: "text-gray-600",
    action: "text-gray-600 hover:text-gray-800",
    status: {
      sending: "text-gray-400",
      sent: "text-gray-400",
      delivered: "text-gray-300",
      read: "text-green-400"
    },
    mediaOverlay: "bg-gray-900 bg-opacity-20"
  }
};

const StatusIndicator = ({ 
  status, 
  isRead 
}: { 
  status: MessageStatus; 
  isRead?: boolean 
}) => {
  // For sent messages, show double check marks when read
  if (status === "read" || isRead) {
    return (
      <span className="flex items-center">
        <FiCheck className="text-green-400" />
        <FiCheck className="text-green-400 -ml-1" />
      </span>
    );
  }
  
  if (status === "delivered") {
    return (
      <span className="flex items-center">
        <FiCheck className="text-gray-300" />
        <FiCheck className="text-gray-300 -ml-1" />
      </span>
    );
  }
  
  if (status === "sent") {
    return <FiCheck className="text-gray-400" />;
  }
  
  // For "sending" status
  return <span className="inline-block w-3 h-3 rounded-full bg-gray-400 opacity-50" />;
};

export function Message({
  variant = "received",
  text,
  time,
  sender,
  className = "",
  type = "text",
  voiceDuration,
  fileName,
  fileSize,
  fileType,
  mediaUrl,
  thumbnailUrl,
  mediaWidth = 300,
  mediaHeight = 200,
  onPlayPause,
  onDownload,
  onMediaClick,
  status = "sent",
  isRead = false,
  showStatus = true
}: MessageProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const variantClass = variantClasses[variant];
  const isMedia = type === "IMAGE" || type === "VIDEO";
  const aspectRatio = mediaWidth && mediaHeight ? `${(mediaHeight / mediaWidth) * 100}%` : "56.25%";

  const handlePlayPause = () => {
    const newPlayingState = !isPlaying;
    setIsPlaying(newPlayingState);
    onPlayPause?.();
    
    if (newPlayingState) {
      startProgressAnimation();
    } else {
      stopProgressAnimation();
    }
  };

  const startProgressAnimation = () => {
    let startTime: number | null = null;
    const duration = 2000; // 2 seconds for full animation
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercent = Math.min(progress / duration, 1);
      
      if (progressRef.current) {
        progressRef.current.style.width = `${progressPercent * 100}%`;
      }
      
      if (progressPercent < 1 && isPlaying) {
        animationRef.current = requestAnimationFrame(animate);
      } else if (progressPercent >= 1 && isPlaying) {
        // Reset and restart animation
        if (progressRef.current) {
          progressRef.current.style.width = '0%';
        }
        startTime = null;
        animationRef.current = requestAnimationFrame(animate);
      }
    };
    
    if (progressRef.current) {
      progressRef.current.style.width = '0%';
    }
    animationRef.current = requestAnimationFrame(animate);
  };

  const stopProgressAnimation = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  useEffect(() => {
    return () => {
      stopProgressAnimation();
    };
  }, []);

  return (
    <div className={`w-full flex ${variantClass.position} ${className}`}>
      <div className={`${isMedia ? "p-0 overflow-hidden" : "px-5 py-3"} max-w-xs md:max-w-md lg:max-w-lg ${variantClass.base} ${variantClass.bubble}`}>
        {sender && variant === "received" && !isMedia && (
          <div className="font-semibold text-sm mb-1">{sender}</div>
        )}

        {type === "TEXT" && (
          <>
            <div>{text}</div>
            <div className={`flex items-center justify-end gap-1 mt-1 text-xs ${variantClass.time}`}>
              <span>{time}</span>
              {showStatus && (
                <span className={`ml-1 ${variantClass.status[isRead ? 'read' : status]}`}>
                  <StatusIndicator status={status} isRead={isRead} />
                </span>
              )}
            </div>
          </>
        )}

        {type === "AUDIO" && (
          <div className="flex items-center gap-3">
            <button 
              onClick={handlePlayPause}
              className={`p-2 rounded-full ${variantClass.secondary} ${variantClass.action}`}
            >
              {isPlaying ? <FiPause size={16} /> : <FiPlay size={16} />}
            </button>
            
            <div className="flex-1 flex items-center">
              <div className="w-full bg-gray-400 bg-opacity-30 h-1.5 rounded-full overflow-hidden">
                <div 
                  ref={progressRef}
                  className={`h-full rounded-full ${isPlaying ? 'bg-blue-500' : 'bg-transparent'}`}
                  style={{ width: '0%' }}
                />
              </div>
            </div>
            
            <div className={`flex items-center gap-1 text-xs ${variantClass.time}`}>
              <span>{voiceDuration}</span>
              {showStatus && (
                <span className={`ml-1 ${variantClass.status[isRead ? 'read' : status]}`}>
                  <StatusIndicator status={status} isRead={isRead} />
                </span>
              )}
            </div>
          </div>
        )}

        {type === "FILE" && (
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-lg ${variantClass.secondary}`}>
                <FiFile size={20} className={variantClass.icon} />
              </div>
              <div className="flex-1">
                <div className="font-medium truncate">{fileName}</div>
                <div className={`text-xs ${variantClass.time}`}>
                  {fileSize} • {fileType}
                </div>
              </div>
              {onDownload && (
                <button onClick={onDownload} className={`p-2 ${variantClass.action}`}>
                  <FiDownload size={16} />
                </button>
              )}
            </div>
            <div className={`flex items-center justify-end gap-1 text-xs ${variantClass.time}`}>
              <span>{time}</span>
              {showStatus && (
                <span className={`ml-1 ${variantClass.status[isRead ? 'read' : status]}`}>
                  <StatusIndicator status={status} isRead={isRead} />
                </span>
              )}
            </div>
          </div>
        )}

        {type === "IMAGE" && (
          <div className="relative group">
            <button onClick={onMediaClick} className="block w-full h-full focus:outline-none">
              <div className="relative" style={{ paddingBottom: aspectRatio }}>
                <img
                  src={mediaUrl || thumbnailUrl}
                  alt={text || "Image message"}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className={`absolute inset-0 flex items-center justify-center ${variantClass.mediaOverlay} opacity-0 group-hover:opacity-100 transition-opacity`}>
                  <FiImage size={24} className="text-white" />
                </div>
              </div>
            </button>
            {(text || showStatus) && (
              <div className={`absolute bottom-2 right-3 flex items-center gap-2 px-2 py-1 rounded-lg ${variant === 'sent' ? 'bg-gray-800 bg-opacity-70' : 'bg-gray-900 bg-opacity-50'} text-white text-xs`}>
                {text && <span className="max-w-xs truncate">{text}</span>}
                <span>{time}</span>
                {showStatus && (
                  <span className={variantClass.status[isRead ? 'read' : status]}>
                    <StatusIndicator status={status} isRead={isRead} />
                  </span>
                )}
              </div>
            )}
          </div>
        )}

        {type === "VIDEO" && (
          <div className="relative group">
            <button onClick={onMediaClick} className="block w-full h-full focus:outline-none">
              <div className="relative" style={{ paddingBottom: aspectRatio }}>
                {thumbnailUrl ? (
                  <img
                    src={thumbnailUrl}
                    alt={text || "Video message"}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gray-400 flex items-center justify-center">
                    <FiVideo size={24} className="text-gray-600" />
                  </div>
                )}
                <div className={`absolute inset-0 flex items-center justify-center ${variantClass.mediaOverlay} group-hover:opacity-100 transition-opacity`}>
                  <div className="p-3 bg-black bg-opacity-50 rounded-full">
                    <FiPlay size={24} className="text-white" />
                  </div>
                </div>
              </div>
            </button>
            {(text || showStatus) && (
              <div className={`absolute bottom-2 right-3 flex items-center gap-2 px-2 py-1 rounded-lg ${variant === 'sent' ? 'bg-gray-800 bg-opacity-70' : 'bg-gray-900 bg-opacity-50'} text-white text-xs`}>
                {text && <span className="max-w-xs truncate">{text}</span>}
                <span>{time}</span>
                {showStatus && (
                  <span className={variantClass.status[isRead ? 'read' : status]}>
                    <StatusIndicator status={status} isRead={isRead} />
                  </span>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}