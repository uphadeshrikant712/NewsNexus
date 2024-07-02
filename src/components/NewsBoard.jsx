import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);

      try {
        const apiKey = import.meta.env.VITE_NEWS_API_KEY;
        const url = `https://newsapi.org/v2/top-headlines?country=IN&category=${category}&apiKey=${apiKey}`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        setError(error.message || 'Error fetching news');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  if (loading) {
    return <p className="text-white text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-white text-center">Error: {error}</p>;
  }

  return (
    <div className='text-white bg-gradient-to-r from-black via-slate-700 to-black pt-6'>
      <div className="heading flex items-center justify-center py-2">
        <h1 className='text-2xl flex text-black font-semibold px-2 bg-gradient-to-r from-pink-600 to-blue-400 font-sriracha'>
          NewsNexus✨
        </h1>
      </div>

      <h2 className='flex items-center justify-center text-lg font-grotesk text-center px-2 pb-[2vw]'>
        Your daily source for unbiased, up-to-the-minute news!
      </h2>

      {articles.length === 0 && <p className="text-white text-center">No articles found.</p>}

      {articles.map((news) => (
        <NewsItem
          key={news.url}
          title={news.title}
          description={news.description}
          src={news.urlToImage}
          url={news.url}
        />
      ))}
    </div>
  );
};

export default NewsBoard;
