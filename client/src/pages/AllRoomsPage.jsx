import React, { useContext, useEffect, useState } from "react";
import Banner from "../components/Banner";
import Table from "../components/Table";
import SearchBar from "../components/SearchBar";
import AuthContext from "../auth/AuthContext";
import { Link } from "react-router-dom";
import GlobalContext from "../store/GlobalContext";

const AllRoomsPage = () => {
  const { auth } = useContext(AuthContext);
  const { store } = useContext(GlobalContext);
  const [rooms, setRooms] = useState([]);

  // // Updated room data to match the specified fields
  // const roomData = [
  //   {
  //     'Room Number': '101A',
  //     'Room Type': 'Single',
  //     'Equipment': 'Ventilator, Heart Monitor',
  //     'Availability Status': 'Occupied',
  //   },
  //   {
  //     'Room Number': '101B',
  //     'Room Type': 'Single',
  //     'Equipment': 'Heart Monitor',
  //     'Availability Status': 'Available',
  //   },
  //   {
  //     'Room Number': '102',
  //     'Room Type': 'Double',
  //     'Equipment': 'Ventilator',
  //     'Availability Status': 'Occupied',
  //   },
  //   {
  //     'Room Number': '103',
  //     'Room Type': 'ICU',
  //     'Equipment': 'Ventilator, ECMO Machine',
  //     'Availability Status': 'Occupied',
  //   },
  //   {
  //     'Room Number': '104',
  //     'Room Type': 'Recovery',
  //     'Equipment': 'None',
  //     'Availability Status': 'Available',
  //   },
  // ];

  useEffect(() => {
    const fetchRooms = async () => {
      await store.getAllRooms(); 

      setRooms(store.rooms); 
    };

    fetchRooms();
  }, [store]);

  return (
    <>
      <Banner goBackPath="/resource-management" />
      <div className="flex justify-center my-4">
        <div className="text-blue-500 p-4 rounded-lg text-3xl">All Rooms</div>
      </div>
      <div className="flex justify-between items-center mx-8 mb-4">
        <SearchBar />
        {auth.isAdmin && (
          <Link
            to={"/new-room"}
            className="bg-[#2260FF] text-white px-2 py-1 rounded-md font-medium text-xl"
          >
            New Room
          </Link>
        )}
      </div>
      <div className="p-8">
          <Table cards={rooms} isAdmin={auth.isAdmin} context={"room"} />
      </div>
    </>
  );
};

export default AllRoomsPage;
