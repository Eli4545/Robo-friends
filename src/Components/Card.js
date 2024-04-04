import React from 'react';

const Card = ({ id, name, email }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 m-4 hover:bg-sky-400">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="robot" />
      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">{email}</p>
      </div>
    </div>
  );
};

export default Card;
