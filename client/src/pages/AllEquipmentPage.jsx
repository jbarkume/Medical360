import React from 'react';
import Banner from '../components/Banner';
import Table from '../components/Table';
import SearchBar from '../components/SearchBar';

const AllEquipmentPage = () => {
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
      <Banner goBackPath="/" />
      <div className="flex justify-center">
        <div className="text-blue-500 p-4 m-4 rounded-lg text-3xl">
          All Equipment
        </div>
      </div>
      <SearchBar />
      <div className="p-8">
        <Table cards={equipmentData} isAdmin={false} />
      </div>
    </>
  );
};

export default AllEquipmentPage;
