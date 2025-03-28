import React from 'react';
import ButtonS from '../ButtonS/ButtonS';

interface GNewsCardProps {
  title: string;        
  description: string;  
  url: string;          
  image: string;        
  publishedAt: string; 
}

const GNewsCard: React.FC<GNewsCardProps> = ({ title, description, url, image, publishedAt }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <p className="text-gray-500 text-sm">Publicado em: {new Date(publishedAt).toLocaleDateString()}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          <ButtonS />
        </a>
      </div>
    </div>
  );
};

export default GNewsCard;