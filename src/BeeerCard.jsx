import React from 'react';

const BeerCard = ({ beer }) => {
  return (
    <div className="bg-blue-50 shadow-md rounded-lg p-4 h-82 w-77">
      <img 
        src={beer.image} 
        alt={beer.name} 
        className="w-full h-40 object-cover rounded" // Adjust height here
      />
      <h2 className="text-xl font-semibold mt-2">{beer.name}</h2>
      <p className="text-gray-700"><strong>Price:</strong> {beer.price}</p>
      <p className="text-gray-700">
        <strong>Rating:</strong> {beer.rating.average} , ({beer.rating.reviews} reviews)
      </p>
    </div>
  );
};

export default BeerCard;