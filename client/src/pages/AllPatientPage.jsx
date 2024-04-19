import {useContext, useEffect, useState} from 'react';
import Banner from '../components/Banner';
import Table from '../components/Table';
import SearchBar from '../components/SearchBar';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useGlobalContext } from '../hooks/useGlobalContext';

const AllPatientPage = () => {
    const { user } = useAuthContext();
    const { patients, getAllDepartments, getAllPatients } = useGlobalContext();
    console.log("All-patient page: ", patients)
   
    useEffect(() => {
      localStorage.setItem("lastRoute", "/all-patients");
      async function getPatients() {
        if (!patients) {
          await getAllDepartments();
          await getAllPatients();
        }
      }
      getPatients();


      return () => {
        localStorage.removeItem("lastRoute")
      }
    }, [patients]);
    return (
        <>
          <Banner goBackPath="/resource-management" />
          <div className="flex justify-center my-4">
            <div className="text-blue-500 p-4 rounded-lg text-3xl">
              All Patients
            </div>
          </div>
          <div className="flex justify-between items-center mx-8 mb-4">
            <SearchBar />
            {user && user.isAdmin && (
              // Adjusted button size to be smaller
              <Link  to={"/new-patient"} className="bg-[#2260FF] text-white px-2 py-1 rounded-md font-medium text-xl">
                New Patient
              </Link>
            )}
          </div>
          <div className="p-8">
            {patients && <Table cards={patients} isAdmin={user && user.isAdmin} context={"patient"} />}
          </div>
        </>
      );
};

export default AllPatientPage;
