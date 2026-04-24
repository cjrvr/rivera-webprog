import Navbar from "./Navbar";
import logo from "../assets/logo.jpeg";
 
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />
      <main className="flex-1 pb-12">{children}</main>

      <footer className="border-t border-gray-800 bg-black px-6 md:px-12 py-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-4 text-sm">
          <p className="text-gray-300 md:text-left">Formula 1</p>
          <p className="text-gray-300 md:text-center">From the grid to the code.</p>
          <div className="md:justify-self-end">
            <img src={logo} alt="F1" className="h-6 w-6 object-cover" />
          </div>
        </div>
      </footer>
    </div>
  );
};
 
export default Layout;