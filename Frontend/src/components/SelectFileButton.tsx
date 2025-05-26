import React, { useRef, useState } from "react";
import { FaPaperclip } from "react-icons/fa";

const SelectFileButton = ({ onFileSelect }) => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      onFileSelect && onFileSelect(file);
    }
  };

  return (
    <div className="relative flex items-center space-x-2">
      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Styled button */}
      <button
        onClick={handleClick}
        className="p-3 rounded-full transition duration-200 "
        title="Attach file"
      >
        <FaPaperclip className="text-gray-600 text-xl rotate-45" />
      </button>

      {/* Show file name */}
      {fileName && (
        <span className="text-sm text-gray-700 truncate max-w-[200px]">
          {fileName}
        </span>
      )}
    </div>
  );
};

export default SelectFileButton;
