import React from 'react';
import { Link } from 'react-router-dom';

const StaffCard = ({ staff }) => {
  return (
    <div className="bg-[#CAD6FF] p-4 rounded-lg shadow-lg max-w-xs mx-auto"> {/* Adjusted max width */}
      {/* Image and Name */}
      <div className="flex flex-col items-center">
        <div className="flex-none rounded-full overflow-hidden border-4 border-white shadow-lg mb-4"
             style={{ width: '120px', height: '120px' }}> {/* Adjusted image size */}
          <img
            src={staff.image}
            alt={staff.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-xl font-semibold text-center text-[#2260FF]">
          {staff.name}
        </h2>
        <p className="text-center">{staff.role}</p>
      </div>

      {/* Bio */}
      <div className="bg-white p-2 rounded-lg mt-4 text-center"> {/* Adjusted padding */}
        <p className="text-gray-600 text-sm">{staff.bio}</p> {/* Adjusted font size */}
      </div>

      {/* Info Button */}
      <div className="flex justify-center mt-4">
        <Link to="/doctorinfo"className="bg-[#2260FF] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-800 text-sm"> {/* Adjusted padding and font size */}
          Info
        </Link>
      </div>
    </div>
  );
};

export default StaffCard;
