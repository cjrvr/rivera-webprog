import { Link } from "react-router-dom";
import def from "../../assets/def.jpeg";
import wire from "../../assets/wire.jpeg";
import wirez from "../../assets/wirez.jpeg";
import wiree from "../../assets/wiree.jpeg";

const HomePage = () => {
  return (
    <div className="bg-black min-h-screen px-6 md:px-16 py-10 space-y-16">

    
      <div className="relative z-30 text-center space-y-2 mb-12">
        <h2 className="welcome-font text-6xl md:text-7xl font-extrabold text-white">
          Welcome to F1
        </h2>
        <p className="text-white text-xl md:text-5xl max-w-3xl mx-auto">
          WELCOME TO FORMULA 1.
        </p>
      </div>

   
      <div className="relative rounded-xl overflow-hidden z-10">
        <img 
          src={def} 
          alt="f1" 
          className="w-full h-[400px] object-cover"
        />

       
        <div className="absolute inset-0 bg-black/60 flex items-end justify-center">
          <div className="text-center text-white mb-10 px-4">
            <h1 className="text-6xl md:text-8xl font-bold mb-2">
              Welcome to F1
            </h1>
            <p className="text-gray-300 text-lg">
              Where speed meets strategy.
            </p>
          </div>
        </div>
      </div>

     
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {["SPEED", "SKILL", "FIERCE", "POWER"].map((item, i) => (
          <div 
            key={i}
            className="bg-red-500 p-6 rounded-xl text-center 
            hover:bg-red-600 hover:-translate-y-2 
            transition duration-300 cursor-pointer shadow-lg"
          >
            <p className="text-sm font-bold tracking-widest text-white">
              {item}
            </p>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white">
          Featured Insights
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[wire, wirez, wiree].map((img, i) => (
            <Link to="/" key={i}>
              <div className="overflow-hidden rounded-xl group shadow-lg bg-gray-900">
                <img 
                  src={img} 
                  alt="card"
                  className="w-full h-48 object-cover 
                  group-hover:scale-110 transition duration-500"
                />
                <div className="p-4">
                  <p className="text-gray-300 text-sm text-center">
                    RACE
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
};

export default HomePage;