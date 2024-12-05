import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-violet-600 text-white fixed w-full top-0 z-[1000]">
      <nav className="h-14 flex items-center justify-between px-6">
        <h1 className="font-extrabold text-2xl">
          <Link to="/">Form Builder</Link>
        </h1>
        <div className="hidden sm:block">Hey, User 👋</div>
      </nav>
    </header>
  );
};

export default Header;
