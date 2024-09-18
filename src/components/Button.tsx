import React from "react";

// Define the Props interface, extending the standard button attributes
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string; // Optional label if not passing children
  style?: React.CSSProperties; // Custom button styles
  disabled?: boolean; // If true, disables the button
  type?: "button" | "submit" | "reset"; // Button type attribute
  onClick: () => void; // Click handler
  className?: string;
}

// Create the Button component
const Button: React.FC<ButtonProps> = ({
  label,

  children, // Allow both label and children
  type = "button", // Default type is 'button'
  onClick,
  disabled = false, // Default to enabled button
  className = "",
}) => {
  return (

    <div className="flex flex-col item-center justify-center py-3">
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`
         py-3 px-10

         bg-blue-700 
         text-white 
         rounded-md 
         hover:bg-blue-500
         h-46 
         cursor-pointer 
         shadow-xl 
         uppercase
         inline-block 
         items-center
         ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`} // Merge custom className with default Tailwind classes
      >
        {label || children}{" "}
        {/* If label exists, use it, otherwise render children */}
      </button>
    </div>
  );
};

export default Button;
