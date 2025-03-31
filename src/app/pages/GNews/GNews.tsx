"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ButtonS from '../../components/ButtonS/ButtonS';

interface Article {
  title: string;
  description: string;
  url: string;
  image: string;
  publishedAt: string;
}

const GNewsCard: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      const apiKey = process.env.NEXT_PUBLIC_GNEWS_API_KEY;
      const query = "bem AND estar";
      const url = `https://gnews.io/api/v4/search?q=${query}&lang=pt&country=br&max=10&apikey=${apiKey}`;

      try {
        const response = await axios.get(url);
        setArticles(response.data.articles);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch news');
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {articles.map((article, index) => (
        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src={article.image} alt={article.title} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{article.title}</div>
            <p className="text-gray-700 text-base">{article.description}</p>
            <p className="text-gray-500 text-sm">Publicado em: {new Date(article.publishedAt).toLocaleDateString()}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              <ButtonS />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GNewsCard;