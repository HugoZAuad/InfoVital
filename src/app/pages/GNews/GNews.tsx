"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ButtonS from '../../components/ButtonS/ButtonS';
import ArrowL from '@/app/components/Arrows/ArrowL';
import ArrowR from '@/app/components/Arrows/ArrowR';

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
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      const apiKey = process.env.NEXT_PUBLIC_GNEWS_API_KEY;
      const query = "bem AND estar";
      const max = "10";
      const url = `https://gnews.io/api/v4/search?q=${query}&lang=pt&country=br&max=${max}&apikey=${apiKey}`;

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

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? articles.length - 1 : newIndex;
    });
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex >= articles.length ? 0 : newIndex;
    });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-row m-8 items-center w-450 h-150 gap-4">
      <div onClick={handlePrevClick} className="cursor-pointer">
        <ArrowL />
      </div>
      {articles.length > 0 && (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src={articles[currentIndex].image} alt={articles[currentIndex].title} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{articles[currentIndex].title}</div>
            <p className="text-gray-700 text-base">{articles[currentIndex].description}</p>
            <p className="text-gray-500 text-sm">Publicado em: {new Date(articles[currentIndex].publishedAt).toLocaleDateString()}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <a href={articles[currentIndex].url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              <ButtonS />
            </a>
          </div>
        </div>
      )}
      <div onClick={handleNextClick} className="cursor-pointer">
        <ArrowR />
      </div>
    </div>
  );
};

export default GNewsCard;