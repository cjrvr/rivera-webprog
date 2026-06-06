import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";
import logo from "../assets/logo.jpeg";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      
      <Navbar />

      <main className="flex-1 pb-12">
        <Outlet />
      </main>

    
      <footer className="border-t border-gray-800 bg-black px-6 md:px-12 py-8">
        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">

         
            <div className="text-center md:text-left">
              <h2 className="text-white text-lg font-bold tracking-widest">
                FORMULA 1
              </h2>

              <p className="text-gray-300 text-sm mt-2">
                Racing beyond limits.
              </p>
            </div>

          
            <div className="text-center">
              <p className="text-white text-sm md:text-base">
                From the grid to the code.
              </p>

              <div className="w-16 h-1 bg-red-500 mx-auto mt-3 rounded-full"></div>
            </div>

      
            <div className="flex flex-col items-center md:items-end gap-2">
              <img
                src={logo}
                alt="F1"
                className="h-10 w-10 object-cover rounded-md"
              />

              <p className="text-gray-300 text-xs">
                Built for speed.
              </p>
            </div>

          </div>

       
          <div className="border-t border-gray-800 mt-6 pt-4 text-center">
            <p className="text-gray-400 text-xs">
              © 2026 Formula 1 Inspired Website. All Rights Reserved.
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
};

export default Layout;