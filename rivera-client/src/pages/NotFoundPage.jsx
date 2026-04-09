import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="w-full max-w-md border-2 border-red-600 bg-white p-6 text-left rounded-lg">
        <p className="inline-block text-xs font-bold bg-red-600 text-white px-3 py-1 rounded mb-3">
          F1 ERROR
        </p>
        <h1 className="text-red-600 text-2xl font-bold mb-2">Page Not Found</h1>
        <p className="text-gray-700 text-sm mb-6">
          The link you followed to get here must be broken.
        </p>
        <Link
          to="/"
          className="inline-block text-sm px-4 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
