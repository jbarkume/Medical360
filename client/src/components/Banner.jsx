import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AccountCircle from './AccountCircle';

const Banner = ({ goBackPath, showGoBackButton = true }) => { // Added showGoBackButton prop with a default value
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between bg-blue-500 py-5 px-8 text-white mb-4 mr-5 w-full">
      <div className="text-2xl font-bold">Stony Brook Medical 360</div>
      <div className="flex items-center space-x-4">
        {showGoBackButton && ( // Use the new prop to conditionally render the Go Back button
          <button onClick={() => navigate(goBackPath)} className="text-sm font-medium bg-white text-blue-500 py-2 px-4 rounded hover:bg-blue-100">
            Go Back
          </button>
        )}
        <AccountCircle />
      </div>
    </div>
  );
};

export default Banner;
