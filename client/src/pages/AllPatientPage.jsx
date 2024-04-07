import {useContext} from 'react';
import Banner from '../components/Banner';
import Table from '../components/Table';
import SearchBar from '../components/SearchBar';
import Sidebar from '../components/Sidebar'; // Import the Sidebar component
import { Link } from 'react-router-dom';
import AuthContext from '../auth/AuthContext';

const AllPatientPage = () => {
    const { auth } = useContext(AuthContext);

    // Hardcoded data for the list of patients
    const patientData = [
        { name: 'John Doe', age: 45, checkedInDate: '2024-03-15', room: '101', doctor: 'Dr. Smith', department: 'Cardiology', reasonOfVisit: 'Chest pain', status: 'Admitted' },
        { name: 'Jane Smith', age: 32, checkedInDate: '2024-03-18', room: '102', doctor: 'Dr. Johnson', department: 'Orthopedics', reasonOfVisit: 'Fractured leg', status: 'Discharged' },
        { name: 'Michael Johnson', age: 55, checkedInDate: '2024-03-20', room: '103', doctor: 'Dr. Brown', department: 'Neurology', reasonOfVisit: 'Headache', status: 'Admitted' },
        { name: 'Emily Davis', age: 28, checkedInDate: '2024-03-22', room: '104', doctor: 'Dr. White', department: 'Pulmonology', reasonOfVisit: 'Difficulty breathing', status: 'Admitted' },
        { name: 'David Wilson', age: 68, checkedInDate: '2024-03-25', room: '105', doctor: 'Dr. Lee', department: 'Oncology', reasonOfVisit: 'Cancer treatment', status: 'Discharged' },
        { name: 'Sarah Adams', age: 40, checkedInDate: '2024-03-28', room: '106', doctor: 'Dr. Martinez', department: 'Pediatrics', reasonOfVisit: 'Fever', status: 'Admitted' },
        // Add more patient data as necessary
    ];

    return (
        <>
          <Banner goBackPath="/apppage" />
          <div className="flex justify-center my-4">
            <div className="text-blue-500 p-4 rounded-lg text-3xl">
              All Patients
            </div>
          </div>
          <div className="flex justify-between items-center mx-8 mb-4">
            <SearchBar />
            {auth.isAdmin && (
              // Adjusted button size to be smaller
              <Link  to={"/new-patient"}className="bg-[#2260FF] text-white px-2 py-1 rounded-md font-medium text-xl">
                New Patient
              </Link>
            )}
          </div>
          <div className="p-8">
            <Table cards={patientData} isAdmin={auth.isAdmin} />
          </div>
        </>
      );
};

export default AllPatientPage;
