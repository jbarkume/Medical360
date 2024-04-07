import React, { useState } from 'react';
import Banner from '../components/Banner';
import SearchBar from '../components/SearchBar';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar'; // Import the Sidebar component

function AllPatientPage() {
    const [patientData, setPatientData] = useState([
        { name: 'John Doe', age: 45, checkedInDate: '2024-03-15', room: '101', doctor: 'Dr. Smith', department: 'Cardiology', reasonOfVisit: 'Chest pain', status: 'Admitted' },
        { name: 'Jane Smith', age: 32, checkedInDate: '2024-03-18', room: '102', doctor: 'Dr. Johnson', department: 'Orthopedics', reasonOfVisit: 'Fractured leg', status: 'Discharged' },
        { name: 'Michael Johnson', age: 55, checkedInDate: '2024-03-20', room: '103', doctor: 'Dr. Brown', department: 'Neurology', reasonOfVisit: 'Headache', status: 'Admitted' },
        { name: 'Emily Davis', age: 28, checkedInDate: '2024-03-22', room: '104', doctor: 'Dr. White', department: 'Pulmonology', reasonOfVisit: 'Difficulty breathing', status: 'Admitted' },
        { name: 'David Wilson', age: 68, checkedInDate: '2024-03-25', room: '105', doctor: 'Dr. Lee', department: 'Oncology', reasonOfVisit: 'Cancer treatment', status: 'Discharged' },
        { name: 'Sarah Adams', age: 40, checkedInDate: '2024-03-28', room: '106', doctor: 'Dr. Martinez', department: 'Pediatrics', reasonOfVisit: 'Fever', status: 'Admitted' },
        // Add more patient data as necessary
    ]);

    return (
        <>
            <div className="flex flex-col h-screen">
                <Banner goBackPath={"/apppage"} />
                <div className="flex flex-grow">
                    
                    <div className="flex flex-col flex-grow">
                        <div className="my-4 mx-auto text-blue-500 rounded-lg text-3xl m">
                            All Patients
                        </div>
                        <div className="flex justify-between items-center mx-4 md:mx-8 lg:mx-12 xl:mx-20">
                            <SearchBar />
                            <Link to={"/new-patient"} className="bg-[#2260FF] text-white px-4 py-2 rounded-md font-medium">
                                New Patient
                            </Link>
                        </div>
                        <div className="flex justify-center">
                            <table className="min-w-full bg-white">
                                <thead className="bg-gray-800 text-white">
                                    <tr>
                                        <th scope="col" className="py-3 px-6">Name</th>
                                        <th scope="col" className="py-3 px-6">Age</th>
                                        <th scope="col" className="py-3 px-6">Checked In Date</th>
                                        <th scope="col" className="py-3 px-6">Room</th>
                                        <th scope="col" className="py-3 px-6">Doctor</th>
                                        <th scope="col" className="py-3 px-6">Department</th>
                                        <th scope="col" className="py-3 px-6">Reason of Visit</th>
                                        <th scope="col" className="py-3 px-6">Status</th>
                                        <th scope="col" className="py-3 px-6">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700">
                                    {patientData.map((patient, index) => (
                                        <tr key={index} className="border-b hover:bg-gray-200">
                                            <td className="py-4 px-6">{patient.name}</td>
                                            <td className="py-4 px-6">{patient.age}</td>
                                            <td className="py-4 px-6">{patient.checkedInDate}</td>
                                            <td className="py-4 px-6">{patient.room}</td>
                                            <td className="py-4 px-6">{patient.doctor}</td>
                                            <td className="py-4 px-6">{patient.department}</td>
                                            <td className="py-4 px-6">{patient.reasonOfVisit}</td>
                                            <td className="py-4 px-6">
                                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                    patient.status === 'Admitted' ? 'bg-green-100 text-green-800' :
                                                    patient.status === 'Discharged' ? 'bg-red-100 text-red-800' :
                                                    'bg-yellow-100 text-yellow-800'}`}>
                                                    {patient.status}
                                                </span>
                                            </td>
                                            <td className="py-4 px-6 text-center">
                                                <Link to={"/edit-patient"} className="text-blue-600 hover:text-blue-800">Edit</Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AllPatientPage;
