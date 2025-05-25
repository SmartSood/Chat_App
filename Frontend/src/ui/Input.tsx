import {ReactElement} from "react";

interface InputProps {
  type?: "text" | "password" | "email" | "number";
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
  startIcon?: ReactElement;
  reference?:any
  children?:ReactElement
}   


export function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  disabled = false,
  className = "",
  startIcon,
  reference,
  children
}: InputProps) {
  return (
    <span className={` flex justify-center items-center pl-4 pr-4  bg-input-white-1  rounded-full   text-input-text-black ${className}`}>
      {startIcon && (
        <span >
          {startIcon}
        </span>
      )}

      <input
        ref={reference}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        className={`w-full pr-4 pl-4 py-2  text-input-text-black   ${
          disabled ?"cursor-not-allowed" : ""
        }`}
      />
            {children}
      
    </span>
  );
}