import ArticleList from "../../components/ArticleList";
import { Link, useParams } from "react-router-dom";
import articleContent from "../../data/article-content";

const ArticleListPage = () => {
  const { articleId } = useParams();
  const article = articleContent.find((item) => item.id === articleId);

  if (articleId && !article) {
    return (
      <div className="min-h-screen bg-black px-6 pt-4 pb-8 text-left text-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold !text-white mb-2">Article Not Found</h1>
          <p className="text-gray-300 mb-4">This article does not exist.</p>
          <Link to="/articles" className="text-red-400 hover:text-red-300">
            Back to Articles
          </Link>
        </div>
      </div>
    );
  }

  if (article) {
    return (
      <div className="min-h-screen bg-black px-6 pt-2 pb-10 text-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold !text-white mb-6 text-center">{article.title}</h1>
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-72 object-cover rounded-xl mb-6"
          />
          <p className="text-gray-200 text-base leading-7 mb-8 text-left">
            {article.fullDescription}
          </p>
          <div className="text-center mt-6">
            <Link
              to="/articles"
              className="inline-block text-sm border border-gray-500 rounded px-4 py-2 text-white hover:bg-red-600"
            >
              Back to Articles
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black px-6 pt-4 pb-8 text-left">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold !text-white mb-2">
          Inside Formula 1
        </h1>
        <p className="text-gray-400 max-w-2xl mb-4">
          Explore the speed, strategy, and rivalries that shape every race
          weekend.
        </p>

        <ArticleList />
      </div>
    </div>
  );
};

export default ArticleListPage;
