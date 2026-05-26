function DashArticleListPage() {
  const articles = [
    {
      id: 1,
      title: "F1 Race Strategy Basics",
      category: "Strategy",
      status: "Published",
    },
    {
      id: 2,
      title: "Top Formula 1 Drivers",
      category: "Drivers",
      status: "Draft",
    },
    {
      id: 3,
      title: "Understanding Pit Stops",
      category: "Race Guide",
      status: "Published",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] px-8 py-8 text-white">
      <h1 className="text-5xl font-extrabold text-white">
        Dashboard Articles
      </h1>

      <p className="mt-3 text-lg text-white">
        Articles available from the Article List Page.
      </p>

      <div className="mt-8 space-y-5">
        {articles.map((article) => (
          <div
            key={article.id}
            className="rounded-2xl border border-white/10 bg-[#151515] p-6 shadow-lg text-white"
          >
            <h2 className="text-3xl font-bold text-white">
              {article.title}
            </h2>

            <p className="mt-3 text-lg text-white">
              {article.category}
            </p>

            <p
              className="mt-2 text-base font-semibold"
              style={{ color: "#ef4444" }}
            >
              {article.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashArticleListPage;