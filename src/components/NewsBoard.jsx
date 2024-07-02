import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

const NewsBoard = ({category}) => {

  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=IN&category=${category}&apiKey=5a3f3e17b53949af86b5af8e0d7b4bd0`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, [category]);


  return (
    <div className='text-white bg-gradient-to-r
    from-black via-slate-700 to-black pt-6 '>
      <div className="heading flex items-center justify-center py-2">
      <h1 className='text-2xl flex text-black font-semibold px-2 bg-gradient-to-r from-pink-600 to-blue-400 font-sriracha'> NewsNexus✨  </h1>
      </div>
      
      <h2 className='flex items-center justify-center text-lg font-grotesk text-center px-2 pb-[2vw]'>Your daily source for unbiased, up-to-the-minute news !              </h2>

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
  )
}

export default NewsBoard