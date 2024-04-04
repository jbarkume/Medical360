import React from 'react';
import AccountCircle from './AccountCircle';

const Banner = () => {

  return (
    <div className="flex items-center justify-between bg-blue-500 py-4 px-8 text-white">
      <div className="text-2xl font-bold">Medical 360</div>
      <div className="flex items-center space-x-4">
        <button className="text-sm font-medium bg-white text-blue-500 py-2 px-4 rounded hover:bg-blue-100">Go Back</button>
        <AccountCircle />
      </div>
    </div>
  );
};

export default Banner;