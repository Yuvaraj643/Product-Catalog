import React from 'react';

const RatingStars = ({ rating }) => {
  const numberOfStars = Math.floor(rating);
  const hasHalfStar = rating - numberOfStars >= 0.5;

  return (
    <div className="star-rating">
      {[...Array(numberOfStars)].map((_, index) => (
        <i key={index} className="fas fa-star"></i>
      ))}
      {hasHalfStar && <i className="fas fa-star-half-alt"></i>}
    </div>
  );
};

export default RatingStars;
