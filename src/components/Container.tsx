import { Link } from "react-router-dom";

const Container: React.FC<{ href?: string }> = ({ href, children }) => {
  if (href) {
    return (
      <Link to={href} className="w-[90%] rounded-lg bg-[#e8e8e8] p-8 text-gray-800 md:w-[80%] lg:w-[70%]">
        {children}
      </Link>
    );
  }

  return <div className="w-[90%] rounded-lg bg-[#e8e8e8] p-8 text-gray-800 md:w-[80%] lg:w-[70%]">{children}</div>;
};

export default Container;
