import React from 'react';
import RoomCard from '../components/RoomCard';
import Banner from '../components/Banner';

const DeleteRoom = () => {
  // Function to handle equipment deletion
  const handleDelete = () => {
    console.log('Room Deleted');
    // Add your deletion logic here
  };

  return (
    <>
      <Banner goBackPath={"/"} />

      {/* EquipmentCard for displaying equipment details */}
      <RoomCard />

      {/* Centered Delete button */}
      <div className="flex items-center justify-center mt-4">
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Delete Room
        </button>
      </div>
    </>
  );
};

export default DeleteRoom;
