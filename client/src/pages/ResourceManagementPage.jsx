import React from 'react';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
const ResourceManagementPage = () => {
  // Placeholder for the navigation path used by the Banner component
  const goBackPath = '/home'; 

  return (
    <div>
      <Banner goBackPath={goBackPath} />
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-bold text-blue-600 my-6">Resource Management</h2>
        <div className="space-y-4">
          <Link className="flex items-center space-x-3 bg-blue-500 text-white py-2 px-4 rounded-full w-64 justify-center" to={"/all-staff"}>
            <div className="p-2 rounded-full bg-white text-blue-500">👤</div>
            <span>Staff</span>
          </Link>
          <Link className="flex items-center space-x-3 bg-blue-500 text-white py-2 px-4 rounded-full w-64 justify-center" to={"/equipments"}>
            <div className="p-2 rounded-full bg-white text-blue-500">🩺</div>
            <span>Equipment</span>
          </Link>
          <Link className="flex items-center space-x-3 bg-blue-500 text-white py-2 px-4 rounded-full w-64 justify-center" to={""}>
            <div className="p-2 rounded-full bg-white text-blue-500">🏠</div>
            <span>Rooms</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResourceManagementPage;
