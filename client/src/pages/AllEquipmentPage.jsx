import React, { useState, useContext } from 'react';
import Banner from '../components/Banner';
import SearchBar from '../components/SearchBar';
import AuthContext from '../auth/AuthContext';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

function AllEquipmentPage() {
    const { auth } = useContext(AuthContext);
    const [equipmentData, setEquipmentData] = useState([
        { name: 'Ventilator', type: 'Respiratory', quantity: '5', location: 'ICU', status: 'Available' },
        { name: 'MRI Scanner', type: 'Imaging', quantity: '1', location: 'Radiology', status: 'Not Available' },
        { name: 'Ultrasound Machine', type: 'Imaging', quantity: '2', location: 'Maternity Ward', status: 'Needs Maintenance' },
        { name: 'EKG Machine', type: 'Cardiology', quantity: '3', location: 'Emergency', status: 'Available' },
        { name: 'Surgical Laser', type: 'Surgery', quantity: '2', location: 'Surgical Suite', status: 'Available' },
        { name: 'Defibrillator', type: 'Emergency', quantity: '4', location: 'Various', status: 'Needs Maintenance' },
        // ... more fake data can be added here
    ]);

    return (
        <>
            <Banner goBackPath={"/"} />
            <div className="flex justify-center">
                <div className="text-blue-500 p-4 m-4 rounded-lg text-3xl">
                    All Equipment
                </div>
            </div>
            <div className="flex justify-between items-center mx-4 md:mx-8 lg:mx-12 xl:mx-20">
                <SearchBar />
                <Link to={"/new-equipment"} className="bg-[#2260FF] text-white px-4 py-2 rounded-md font-medium">
                New Equipment
              </Link>
            </div>
            <div className="flex justify-center">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th scope="col" className="py-3 px-6">Name</th>
                            <th scope="col" className="py-3 px-6">Type</th>
                            <th scope="col" className="py-3 px-6">Quantity</th>
                            <th scope="col" className="py-3 px-6">Location</th>
                            <th scope="col" className="py-3 px-6">Status</th>
                            <th scope="col" className="py-3 px-6">Info</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {equipmentData.map((item, index) => (
                            <tr key={index} className="border-b hover:bg-gray-200">
                                <td className="py-4 px-6">{item.name}</td>
                                <td className="py-4 px-6">{item.type}</td>
                                <td className="py-4 px-6">{item.quantity}</td>
                                <td className="py-4 px-6">{item.location}</td>
                                <td className="py-4 px-6">
                                    {item.status === 'Available' ? (
                                        <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
                                            {item.status}
                                        </span>
                                    ) : item.status === 'Not Available' ? (
                                        <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
                                            {item.status}
                                        </span>
                                    ) : (
                                        <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">
                                            {item.status}
                                        </span>
                                    )}
                                </td>
                                <td className="py-4 px-6">
                                    <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Info</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default AllEquipmentPage;
