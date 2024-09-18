interface ScreenProps {
  result: number | null;
  className?: string; // Allow className as an optional prop

}

const Screen: React.FC<ScreenProps> = ({ result, className, }) => {
  return (
    <div className={className}>
      {result !== null ? result : "No result"}
    
    </div>
  );
};

export default Screen;
