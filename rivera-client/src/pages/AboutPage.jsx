import about from "../assets/about.jpeg";

const AboutPage = () => {
  return (
    <div className="px-10 py-8 space-y-6 bg-black min-h-screen">

      {/* ABOUT FORMULA 1 HEADER */}
      <div className="text-center mb-6 text-white">
        <h1 className="text-3xl md:text-4xl font-bold tracking-widest !text-white">
          ABOUT FORMULA 1
        </h1>
        <div className="w-24 h-1 bg-red-500 mx-auto mt-2 rounded"></div>
      </div>

      {/* IMAGE */}
      <img
        src={about}
        alt="Formula 1"
        className="rounded-lg block mx-auto w-64 h-auto"
      />

      {/* DESCRIPTION */}
      <div className="flex justify-center">
        <p className="!text-white text-lg md:text-xl max-w-3xl leading-relaxed text-center">
          Formula 1 (F1) is the highest level of international single-seater auto
          racing. It features the world's fastest cars, top drivers, and
          cutting-edge technology, competing in races called Grands Prix held in
          different countries around the globe. F1 combines speed, strategy, and
          innovation, making it one of the most exciting motorsports in the world.
        </p>
      </div>
      
    </div>
  );
};

export default AboutPage;