"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GNewsCard from '../../components/GNews_card/GNewsCard';

const GNews: React.FC = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(`https://gnews.io/api/v4/search?q="bem-estar"&lang=pt&country=br&max=10&apikey=${process.env.REACT_APP_GNEWS_API_KEY}`);
        setArticles(response.data.articles);
      } catch (err) {
        setError('Erro ao buscar artigos');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {articles.map((article, index) => (
        <GNewsCard
          key={index}
          title={article.title}
          description={article.description}
          url={article.url}
          image={article.image}
          publishedAt={article.publishedAt}
        />
      ))}
    </div>
  );
};

export default GNews;