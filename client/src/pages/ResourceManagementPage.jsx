import React from 'react';
import Banner from '../components/Banner';
import Sidebar from '../components/Sidebar'; // Import the Sidebar component
import { Link } from 'react-router-dom';

const ResourceManagementPage = () => {
  const goBackPath = '/apppage'; // The path to go back to

  return (
    <div className="flex h-screen"> {/* Use 'h-screen' to make the sidebar full height */}

      {/* Main content */}
      <div className="flex-grow flex flex-col">
        {/* Banner */}
        <Banner goBackPath={goBackPath} />

        {/* Resource Management Section */}
        <div className="flex-grow p-4">
          <div className="max-w-4xl mx-auto"> {/* Center the content */}
            <h2 className="text-4xl font-bold text-blue-600 my-6 text-center">Resource Management</h2>
            <div className="space-y-4">
              {/* Links */}
              <Link className="flex items-center space-x-3 bg-blue-500 text-white py-2 px-4 rounded-full w-full md:w-1/2 lg:w-1/4 mx-auto justify-center" to={"/all-staff"}>
                <div className="p-2 rounded-full bg-white text-blue-500">👤</div>
                <span>Staff</span>
              </Link>
              <Link className="flex items-center space-x-3 bg-blue-500 text-white py-2 px-4 rounded-full w-full md:w-1/2 lg:w-1/4 mx-auto justify-center" to={"/all-equipments"}>
                <div className="p-2 rounded-full bg-white text-blue-500">🩺</div>
                <span>Equipment</span>
              </Link>
              <Link className="flex items-center space-x-3 bg-blue-500 text-white py-2 px-4 rounded-full w-full md:w-1/2 lg:w-1/4 mx-auto justify-center" to={"/all-rooms"}>
                <div className="p-2 rounded-full bg-white text-blue-500">🏠</div>
                <span>Rooms</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceManagementPage;
