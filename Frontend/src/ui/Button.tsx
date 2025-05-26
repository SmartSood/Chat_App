import type { ReactElement } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary";
  text?: string;
  startIcon?: ReactElement;
  onClick?: () => void;
  loading?: boolean;
  selected?: boolean;
  disabled?: boolean;
  className?: string;
  position?: "first" | "middle" | "last" | "single"|"flat";
    children?: ReactElement;
}

const variantClasses = {
  primary: {
    base: "bg-gray-button-2 text-white",
    hover: "hover:bg-gray-600 hover:z-20",
    active: "active:bg-gray-800 active:z-20",
    selected: "bg-gray-400 shadow-inner text-white",
    disabled: "bg-gray-400 text-gray-200 cursor-not-allowed"
  },
  secondary: {
    base: "bg-gray-button-1 text-gray-800",
    hover: "hover:bg-gray-300 hover:z-20",
    active: "active:bg-gray-400 active:z-20",
    selected: "bg-gray-100 shadow-inner text-white-600",
    disabled: "bg-gray-100 text-gray-400 cursor-not-allowed"
  }
};

export function Button({
  variant = "primary",
  text,
  startIcon,
  onClick,
  loading = false,
  selected = false,
  disabled = false,
  className = "",
  position = "single",
  children 
}: ButtonProps) {
  const variantClass = variantClasses[variant];
  const isDisabled = disabled || loading;

  const positionClasses = {
  first: "rounded-full border-r-0 -mr-px",       // Fully rounded + remove right border
  middle: "rounded-full border-l-0 border-r-0 -mx-px", // Fully rounded + remove side borders
  last: "rounded-full border-l-0 -ml-px",        // Fully rounded + remove left border
  single: "rounded-full"  ,
  flat:""                       // Standalone
};

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`
        ${variantClass.base}
        ${!selected && !isDisabled && variantClass.hover}
        ${variantClass.active}
        ${selected && variantClass.selected}
        ${isDisabled && variantClass.disabled}
        ${positionClasses[position]}
        px-8 py-3 font-medium flex items-center justify-center
        transition-all overflow-hidden duration-200
        
        ${selected ? "z-10" : "z-0"}
        ${className}
      `}
      aria-selected={selected}
      aria-busy={loading}
    >
      {startIcon && <div className="pr-2 flex items-center">{startIcon}</div>}
      <span className="whitespace-nowrap">{text}</span>
      {children}
      {loading && (
        <div className="pl-2">
          <span className="animate-spin">↻</span>
        </div>
      )}
    </button>
  );
}