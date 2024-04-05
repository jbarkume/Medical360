import React from 'react';
import doctorImageone from "../components/doctor2.jpeg";

const staff = {
  image:doctorImageone, // Replace with actual image URL
  name: 'Staff Member Name',
  role: 'Staff Role',
  bio: 'Short bio or description of the staff member.'
};

const StaffCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-[#CAD6FF] p-8 rounded-lg shadow-lg max-w-sm w-full">
        {/* Image and Name */}
        <div className="flex flex-col items-center">
          <div
            className="flex-none rounded-full overflow-hidden border-4 border-white shadow-lg mb-4"
            style={{ width: '200px', height: '200px' }}
          >
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
        <div className="bg-white p-4 rounded-lg mt-4 text-center">
          <p className="text-gray-600">{staff.bio}</p>
        </div>

        {/* Info Button */}
        <div className="flex justify-center mt-4">
          <button className="bg-[#2260FF] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800">
            Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default StaffCard;
