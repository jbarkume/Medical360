import React, { useContext } from 'react';
import Banner from '../components/Banner';
import Table from '../components/Table';
import SearchBar from '../components/SearchBar';
import AuthContext from '../auth/AuthContext';
import { Link } from 'react-router-dom';



const AllRoomsPage = () => {
  // Hardcoded data for the list of equipment
  const { auth } = useContext(AuthContext);
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
      <Banner goBackPath="/apppage" />
      <div className="flex justify-center my-4">
        <div className="text-blue-500 p-4 rounded-lg text-3xl">
          All Rooms
        </div>
      </div>
      <div className="flex justify-between items-center mx-8 mb-4">
        <SearchBar />
        {auth.isAdmin && (
          // Adjusted button size to be smaller
          <Link  to={"/new-room"}className="bg-[#2260FF] text-white px-2 py-1 rounded-md font-medium text-xl">
            New Room
          </Link>
        )}
      </div>
      <div className="p-8">
        <Table cards={roomData} isAdmin={auth.isAdmin} />
      </div>
    </>
  );
};

export default AllRoomsPage;
