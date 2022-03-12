import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-center bg-[#8b2332] py-12 text-white">
      <h1 className="border-b-2 text-4xl">
        <Link to="/">pages.thanayut.in.th</Link>
      </h1>
    </header>
  );
};

export default Header;
