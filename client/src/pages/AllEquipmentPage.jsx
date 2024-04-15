import React, { useContext, useState, useEffect } from 'react';
import Banner from '../components/Banner';
import Table from '../components/Table';
import SearchBar from '../components/SearchBar';
import AuthContext from '../auth/AuthContext';
import { Link } from 'react-router-dom';
import GlobalContext from '../store/GlobalContext';

const AllEquipmentPage = () => {
  const { auth } = useContext(AuthContext);
  const { store } = useContext(GlobalContext);

  const [equipments, setEquipments] = useState([]);


  // // Updated and expanded equipment data to match the specified fields
  // const equipmentData = [
  //   {
  //     Name: 'MRI Machine',
  //     Type: 'Imaging Machine',
  //     Quantity: '2',
  //     Location: 'Radiology Dept - Room 201',
  //     'Maintenance Status': 'Operational',
  //   },
  //   {
  //     Name: 'CT Scanner',
  //     Type: 'Imaging Machine',
  //     Quantity: '1',
  //     Location: 'Radiology Dept - Room 202',
  //     'Maintenance Status': 'Maintenance Required',
  //   },
  //   {
  //     Name: 'X-Ray Machine',
  //     Type: 'Imaging Machine',
  //     Quantity: '3',
  //     Location: 'Emergency Dept - Room 101',
  //     'Maintenance Status': 'Operational',
  //   },
  //   {
  //     Name: 'Ultrasound Machine',
  //     Type: 'Imaging Machine',
  //     Quantity: '2',
  //     Location: 'Maternity Dept - Room 301',
  //     'Maintenance Status': 'Operational',
  //   },
  //   {
  //     Name: 'ECG Machine',
  //     Type: 'Monitoring Machine',
  //     Quantity: '5',
  //     Location: 'Cardiology Dept - Room 401',
  //     'Maintenance Status': 'Operational',
  //   },
  //   {
  //     Name: 'Ventilator',
  //     Type: 'Life Support Machine',
  //     Quantity: '4',
  //     Location: 'ICU - Room 501',
  //     'Maintenance Status': 'Maintenance Required',
  //   },
  //   // Add more equipment items as needed
  // ];

  useEffect(() => {
    const fetchEquipments = async () => {
      await store.getAllEquipments(); 

      setEquipments(store.equipments);
    };

    fetchEquipments();
  }, [store]);

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
          <Link to={"/new-equipment"} className="bg-[#2260FF] text-white px-2 py-1 rounded-md font-medium text-xl">
            New Equipment
          </Link>
        )}
      </div>
      <div className="p-8">
        <Table cards={equipments} isAdmin={auth.isAdmin} context={"equipment"} />
      </div>
    </>
  );
};

export default AllEquipmentPage;
