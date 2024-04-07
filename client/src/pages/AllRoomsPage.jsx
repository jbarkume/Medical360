import React, { useState, useContext } from 'react';
import Banner from '../components/Banner';
import Table from '../components/Table';
import SearchBar from '../components/SearchBar';
import AuthContext from '../auth/AuthContext';
import Button from '../components/Button';
import { Link } from 'react-router-dom';



const AllRoomsPage = () => {
  // Hardcoded data for the list of equipment
  const roomData = [
    {
      Room: '101A',
      Type: 'Single',
      Status: 'Occupied',
      Patient: 'John Doe',
      'Next Availability': 'N/A',
      'More Info': 'Info',
    },
    {
      Room: '101B',
      Type: 'Single',
      Status: 'Available',
      Patient: 'None',
      'Next Availability': 'Now',
      'More Info': 'Info',
    },
    {
      Room: '102',
      Type: 'Double',
      Status: 'Occupied',
      Patient: 'Jane Smith',
      'Next Availability': 'N/A',
      'More Info': 'Info',
    },
    {
      Room: '103',
      Type: 'ICU',
      Status: 'Occupied',
      Patient: 'Emma Jones',
      'Next Availability': 'N/A',
      'More Info': 'Info',
    },
    {
      Room: '104',
      Type: 'Recovery',
      Status: 'Available',
      Patient: 'None',
      'Next Availability': 'Now',
      'More Info': 'Info',
    },
    // Add more room items as needed
  ];
  

  return (
    <>
      <Banner goBackPath="/" />
      <div className="flex justify-center">
        <div className="text-blue-500 p-4 m-4 rounded-lg text-3xl">
          All Room
        </div>
      </div>
      <SearchBar />
      <div className="p-8">
        <Table cards={roomData} isAdmin={false} />
      </div>
    </>
  );
};

export default AllRoomsPage;
