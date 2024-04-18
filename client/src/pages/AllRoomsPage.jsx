import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Table from "../components/Table";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useGlobalContext } from "../hooks/useGlobalContext";

const AllRoomsPage = () => {
  const { user } = useAuthContext();
  const { rooms, getAllRooms } = useGlobalContext();
  const [allRooms, setRooms] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    const fetchRooms = async () => {
     
      await getAllRooms(); 

      const sortedRooms = [...rooms].sort((a, b) => {
        const roomNumberA = parseInt(a.roomNumber.match(/\d+/), 10); 
        const roomNumberB = parseInt(b.roomNumber.match(/\d+/), 10); 
        return roomNumberA - roomNumberB;
      });
      

      setRooms(sortedRooms); 
    };

    fetchRooms();
  }, [rooms]);

  const handleSearch = term => {
    setSearchTerm(term.toLowerCase());
  };

  const filterRooms = allRooms.filter(room => 
    room.roomNumber.toLowerCase().includes(searchTerm)
  );

  return (
    <>
      <Banner goBackPath="/resource-management" />
      <div className="flex justify-center my-4">
        <div className="text-blue-500 p-4 rounded-lg text-3xl">All Rooms</div>
      </div>
      <div className="flex justify-between items-center mx-8 mb-4">
        <SearchBar onSearch={handleSearch} />
        {user && user.isAdmin && (
          <Link
            to={"/new-room"}
            className="bg-[#2260FF] text-white px-2 py-1 rounded-md font-medium text-xl"
          >
            New Room
          </Link>
        )}
      </div>
      <div className="p-8">
          <Table cards={filterRooms} isAdmin={user && user.isAdmin} context={"room"} />
      </div>
    </>
  );
};

export default AllRoomsPage;
