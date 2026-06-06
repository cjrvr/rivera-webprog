import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpeg";

const Navbar = () => {
  const location = useLocation();

  const links = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "ARTICLES", path: "/articles" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="flex justify-between items-center px-6 md:px-12 py-4 max-w-7xl mx-auto">

        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="w-12 h-auto" />
        </Link>

        <div className="hidden md:flex gap-6 text-sm font-medium">
          {links.map((link, i) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={i}
                to={link.path}
                className={`px-4 py-1 rounded-full transition duration-300
                  ${
                    isActive
                      ? "bg-red-500 text-white"
                      : "bg-gray-900 text-gray-300 hover:bg-red-500 hover:text-white"
                  }
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">

          <Link
            to="/signin"
            className="px-5 py-2 text-sm rounded-full border border-gray-400 text-gray-200 hover:border-white hover:text-white transition"
          >
            Sign In
          </Link>

          <Link
            to="/signup"
            className="px-5 py-2 text-sm rounded-full bg-red-500 text-white hover:bg-red-600 transition shadow-md"
          >
            Sign Up
          </Link>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;