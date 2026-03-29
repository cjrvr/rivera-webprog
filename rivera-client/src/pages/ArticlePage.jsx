import ar from "../assets/ar.jpeg";
import tic from "../assets/tic.jpeg";
import tiz from "../assets/tiz.jpeg";

const ArticlePage = () => {
  const articles = [
    {
      img: ar,
      title: "VERSTAPPEN",
      desc: "Max Verstappen is a dominant and fearless Formula 1 driver. He is known for his aggressive racing style and consistent performance. He has won multiple championships and is one of the top drivers in the sport."
    },
    {
      img: tic,
      title: "NORRIS",
      desc: "Lando Norris is a talented and charismatic Formula 1 driver. He is known for his strong race pace and engaging personality. He continues to grow as one of the sports rising stars."
    },
    {
      img: tiz,
      title: "LECLERC",
      desc: "Charles Leclerc is a skilled and precise Formula 1 driver. He is known for his speed, especially during qualifying sessions. He is a key driver for Ferrari and a strong competitor on the grid."
    }
  ];

  return (
    <div className="px-10 py-8 space-y-10 bg-black min-h-screen">

      
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-widest text-white">
          ARTICLES
        </h1>
        <div className="w-24 h-1 bg-red-500 mx-auto mt-2 rounded"></div>
      </div>

      
      <div className="grid md:grid-cols-3 gap-6">

        {articles.map((article, i) => (
          <div 
            key={i} 
            className="overflow-hidden rounded-xl group shadow-lg bg-gray-900 hover:shadow-2xl transition duration-300"
          >
            <img 
              src={article.img} 
              alt={article.title} 
              className="w-full h-64 object-cover rounded-t-xl group-hover:scale-110 transition-transform duration-500"
            />
            <div className="p-4 text-center">
              <h2 className="text-xl font-bold text-white !important mb-2">{article.title}</h2>
              <p className="text-gray-300 text-sm mb-4">{article.desc}</p>
              <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 hover:translate-y-[-2px] transition transform duration-300">
                See More
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default ArticlePage;