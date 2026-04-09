import { Link } from "react-router-dom";
import def from "../assets/def.jpeg";
import wire from "../assets/wire.jpeg";
import wirez from "../assets/wirez.jpeg";
import wiree from "../assets/wiree.jpeg";

const HomePage = () => {
  const nextRace = {
    name: "Miami Grand Prix",
    date: "May 4, 2026",
    location: "Miami International Autodrome",
    countdown: "25 Days Left",
  };

  return (
    <div className="bg-black min-h-screen px-6 md:px-16 py-10 space-y-16">

      {/* PRE-HERO WELCOME */}
      <div className="relative z-30 text-center flex justify-center mb-12">
        <p className="font-f1 text-white text-2xl md:text-5xl tracking-wide max-w-3xl mx-auto">
          WELCOME TO FORMULA 1.
        </p>
      </div>

      {/* HERO SECTION */}
      <div className="relative rounded-xl overflow-hidden z-10">
        <img 
          src={def} 
          alt="f1" 
          className="w-full h-[400px] object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60 flex items-end justify-center">
          <div className="text-center text-white mb-10 px-4">
            <p className="text-gray-300 text-lg">
              Where speed meets strategy.
            </p>
          </div>
        </div>
      </div>

      {/* RACE COUNTDOWN SECTION */}
      <div className="max-w-2xl mx-auto border border-gray-700 bg-gray-900 rounded-xl p-6 text-white">
        <p className="inline-block bg-red-600 px-3 py-1 rounded-md text-xs font-semibold mb-3">
          NEXT RACE
        </p>
        <h2 className="text-2xl font-bold !text-white mb-2">{nextRace.name}</h2>
        <p className="text-sm text-white mb-1">{nextRace.date}</p>
        <p className="text-sm text-white mb-4">{nextRace.location}</p>
        <p className="text-sm font-semibold text-red-500">{nextRace.countdown}</p>
      </div>

      {/* KPI SECTION */}
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

      {/* FEATURE SECTION */}
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