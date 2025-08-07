import React from 'react';

interface RatingStarsProps {
  rating: number;
  maxRating?: number;
  className?: string;
}

export default function RatingStars({ rating, maxRating = 5, className = '' }: RatingStarsProps) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = maxRating - fullStars - (halfStar ? 1 : 0);

  return (
    <div className={`flex items-center text-yellow-400 ${className}`}>
      {[...Array(fullStars)].map((_, i) => <i key={`full-${i}`} className="fas fa-star"></i>)}
      {halfStar && <i className="fas fa-star-half-alt"></i>}
      {[...Array(emptyStars)].map((_, i) => <i key={`empty-${i}`} className="far fa-star"></i>)}
      <span className="text-xs text-gray-400 ml-2">{rating.toFixed(1)} / {maxRating}</span>
    </div>
  );
}