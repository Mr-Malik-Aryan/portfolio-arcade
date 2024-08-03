// components/GameInterface.js
import React from 'react';

const GameInterface = () => {
  return (
    <div className="bg-orange-600 w-80 h-128 mx-auto mt-20 p-4 rounded-lg shadow-lg relative">
      <div className="bg-gray-800 w-full h-40 rounded-lg flex items-center justify-center mb-8">
        <div className="text-center text-white">
          <p>Some Type</p>
          <p>Effect</p>
          <p className="mt-4">Play Game!</p>
        </div>
      </div>
      <div className="absolute bottom-16 left-4">
        <div className="grid grid-cols-3 gap-2">
          <div></div>
          <button className="bg-black w-8 h-8 rounded-full flex items-center justify-center">▲</button>
          <div></div>
          <button className="bg-black w-8 h-8 rounded-full flex items-center justify-center">◀</button>
          <div></div>
          <button className="bg-black w-8 h-8 rounded-full flex items-center justify-center">▶</button>
          <div></div>
          <button className="bg-black w-8 h-8 rounded-full flex items-center justify-center">▼</button>
          <div></div>
        </div>
      </div>
      <div className="absolute bottom-8 right-4">
        <button className="bg-black w-12 h-12 rounded-full"></button>
      </div>
    </div>
  );
};

export default GameInterface;
