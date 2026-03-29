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
    <nav className="sticky top-0 z-50 bg-black/70 backdrop-blur-md border-b border-gray-800">
      
      <div className="flex justify-between items-center px-6 md:px-12 py-4">
       
        <Link to="/"> 
          <img src={logo} alt="Logo" className="w-12 h-auto" />
        </Link>

 
        <div className="flex gap-6 text-sm font-medium">
          {links.map((link, i) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={i}
                to={link.path}
                className={`relative px-4 py-1 rounded-full transition duration-300 group
                  ${
                    isActive
                      ? "bg-red-500 text-white"
                      : "bg-gray-900 text-gray-300 hover:bg-red-500 hover:text-white"
                  }
                `}
              >
                {link.name}

                <span className="absolute left-2 right-2 -bottom-1 h-[2px] bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            );
          })}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;