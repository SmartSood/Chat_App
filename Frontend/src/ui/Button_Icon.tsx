import { ReactElement } from "react";
interface ButtonIconProps {
  icon: ReactElement;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
    size?: "small" | "medium" | "large"
    |"xtralarge"; 
    fill_color?:string
}

const sizeClasses = {
  small: "w-8 h-8",
  medium: "w-10 h-10",
  large: "w-12 h-12",
  xtralarge:"w-40 h-40"
};




export function ButtonIcon({
  icon,
  onClick,
  disabled = false,
  className = "",
  size = "medium",
    fill_color = "bg-input-white-1"
}: ButtonIconProps) {
  const isDisabled = disabled;

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`flex items-center justify-center rounded-full 
        ${sizeClasses[size]} 
        ${fill_color}
        ${isDisabled ? "cursor-not-allowed opacity-50" : ""}
        ${className}`}
    >
      {icon}
    </button>
  );
}



