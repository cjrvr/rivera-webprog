import { Link } from "react-router-dom";
import articleContent from "../assets/article-content";

const ArticleList = () => {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold text-white mb-5">Article card grid</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {articleContent.map((article) => (
          <article
            key={article.id}
            className="rounded-3xl border border-gray-700 bg-gray-900 p-4"
          >
            <img
              src={article.image}
              alt={article.title}
              className="h-32 w-full rounded-2xl object-cover mb-3"
            />

            <p className="text-xs text-gray-400 mb-1">
              {article.category}
            </p>

            <h3 className="text-white text-base font-semibold mb-1">
              {article.title}
            </h3>

            <p className="text-gray-300 text-sm mb-3">{article.description}</p>

            <Link
              to={`/articles/${article.id}`}
              className="inline-block mt-3 text-xs border border-red-600 bg-red-600 rounded-full px-3 py-1 text-white hover:bg-red-700"
            >
              READ MORE
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ArticleList;
