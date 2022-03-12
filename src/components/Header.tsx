import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-end justify-center bg-[#8b2332] pt-10 pb-4 text-white">
      <div className="w-[90%] md:w-[80%] lg:w-[70%]">
        <Link to="/">
          <img className="inline h-6 w-6" src="/assets/icons/home.svg" alt="Home" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
