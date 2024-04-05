import React from 'react';
import EquipmentCard from '../components/EquipmentCard';
import Banner from '../components/Banner';

const DeleteEquipment = () => {
  // Function to handle equipment deletion
  const handleDelete = () => {
    console.log('Equipment Deleted');
    // Add your deletion logic here
  };

  return (
    <>
      <Banner goBackPath={"/"} />

      {/* EquipmentCard for displaying equipment details */}
      <EquipmentCard />

      {/* Centered Delete button */}
      <div className="flex items-center justify-center mt-4">
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Delete Equipment
        </button>
      </div>
    </>
  );
};

export default DeleteEquipment;
