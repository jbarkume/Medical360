import React from 'react';
import Banner from '../components/Banner';
import Table from '../components/Table';
import SearchBar from '../components/SearchBar';
import AuthContext from '../auth/AuthContext';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

const AllEquipmentPage = () => {
  const { auth } = useContext(AuthContext);
  // Hardcoded data for the list of equipment
  const equipmentData = [
    {
      Name: 'MRI Machine',
      Type: 'Imaging',
      Quantity: '2',
      Location: 'Radiology Dept',
      'Maintenance Status': 'Operational',
      'More Info': 'Info',
    },
    {
      Name: 'CT Scanner',
      Type: 'Imaging',
      Quantity: '1',
      Location: 'Radiology Dept',
      'Maintenance Status': 'Maintenance Required',
      'More Info': 'Info',
    },
    {
      Name: 'X-Ray Machine',
      Type: 'Imaging',
      Quantity: '3',
      Location: 'Emergency Dept',
      'Maintenance Status': 'Operational',
      'More Info': 'Info',
    },
    // Add more equipment items as needed
  ];

  return (
    <>
      <Banner goBackPath="/apppage" />
      <div className="flex justify-center my-4">
        <div className="text-blue-500 p-4 rounded-lg text-3xl">
          All Equipments
        </div>
      </div>
      <div className="flex justify-between items-center mx-8 mb-4">
        <SearchBar />
        {auth.isAdmin && (
          // Adjusted button size to be smaller
          <Link  to={"/new-room"}className="bg-[#2260FF] text-white px-2 py-1 rounded-md font-medium text-xl">
            New Equipment
          </Link>
        )}
      </div>
      <div className="p-8">
        <Table cards={equipmentData} isAdmin={auth.isAdmin} context={"equipment"} />
      </div>
    </>
  );
};

export default AllEquipmentPage;
