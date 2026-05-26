import about from "../../assets/about.jpeg";

const AboutPage = () => {
  return (
    <div className="bg-black min-h-screen px-6 md:px-16 pt-32 pb-16 text-center">

     
      <div className="mb-8">
        <h1 className="text-white text-4xl md:text-5xl font-bold tracking-widest">
          ABOUT FORMULA 1
        </h1>

        <div className="w-24 h-1 bg-red-500 mx-auto mt-3 rounded"></div>
      </div>

   
      <img
        src={about}
        alt="Formula 1"
        className="rounded-xl block mx-auto w-72 md:w-80 h-auto shadow-lg mb-10"
      />

     
      <p className="text-white text-lg md:text-2xl max-w-5xl mx-auto leading-relaxed">
        Formula 1 (F1) is the highest level of international single-seater auto racing.
        It features the world’s fastest cars, top drivers, and cutting-edge technology,
        competing in races called Grands Prix held in different countries around the globe.
        F1 combines speed, strategy, and innovation, making it one of the most exciting
        motorsports in the world.
      </p>

    </div>
  );
};

export default AboutPage;