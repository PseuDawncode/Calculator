interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  className?: string; // Allow className as an optional prop
}

const Input: React.FC<InputProps> = ({ value, onChange, placeholder, className }) => {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={className} // Pass className to the <input> element
    />
  );
};

export default Input;
