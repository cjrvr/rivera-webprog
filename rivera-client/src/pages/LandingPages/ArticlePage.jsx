import { useParams } from "react-router-dom";
import ar from "../../assets/ar.jpeg";
import tic from "../../assets/tic.jpeg";
import tiz from "../../assets/tiz.jpeg";

const ArticlePage = () => {
  const { articleId } = useParams();

  const articles = {
    verstappen: {
      img: ar,
      title: "VERSTAPPEN",
      desc: "Max Verstappen is a dominant and fearless Formula 1 driver."
    },
    norris: {
      img: tic,
      title: "NORRIS",
      desc: "Lando Norris is a talented and charismatic Formula 1 driver."
    },
    leclerc: {
      img: tiz,
      title: "LECLERC",
      desc: "Charles Leclerc is a skilled and precise Formula 1 driver."
    }
  };

  const article = articles[articleId];

  if (!article) {
    return (
      <div className="bg-black text-white min-h-screen p-10">
        Article not found
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen px-10 py-8 space-y-6">
      <h1 className="text-3xl font-bold">{article.title}</h1>
      <img src={article.img} className="w-full h-64 object-cover rounded-xl" />
      <p className="text-gray-300">{article.desc}</p>
    </div>
  );
};

export default ArticlePage;