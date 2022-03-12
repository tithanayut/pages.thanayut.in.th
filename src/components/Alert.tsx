const Alert: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div className="my-16 flex flex-col items-center space-y-6">
      <h2 className="text-xl">{message}</h2>
    </div>
  );
};

export default Alert;
