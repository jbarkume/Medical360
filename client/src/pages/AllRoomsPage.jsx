import React, { useState, useContext } from 'react';
import Banner from '../components/Banner';
import SearchBar from '../components/SearchBar';
import AuthContext from '../auth/AuthContext';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

function AllRoomsPage() {
    const { auth } = useContext(AuthContext);
    const [roomData, setRoomData] = useState([
        { roomNumber: '101', roomType: 'ICU', equipment: 'Ventilator', availabilityStatus: 'Occupied' },
        { roomNumber: '102', roomType: 'General', equipment: 'ECG', availabilityStatus: 'Available' },
        { roomNumber: '103', roomType: 'Maternity', equipment: 'Ultrasound', availabilityStatus: 'Under Maintenance' },
        { roomNumber: '104', roomType: 'Surgery', equipment: 'Anesthesia Machine', availabilityStatus: 'Occupied' },
        { roomNumber: '105', roomType: 'Oncology', equipment: 'Infusion Pump', availabilityStatus: 'Available' },
        { roomNumber: '106', roomType: 'General', equipment: 'Patient Monitor', availabilityStatus: 'Available' },
        { roomNumber: '107', roomType: 'Pediatric', equipment: 'Infant Incubator', availabilityStatus: 'Occupied' },
        { roomNumber: '108', roomType: 'General', equipment: 'Vital Signs Monitor', availabilityStatus: 'Needs Cleaning' },
        { roomNumber: '109', roomType: 'Recovery', equipment: 'Defibrillator', availabilityStatus: 'Available' },
        { roomNumber: '110', roomType: 'Isolation', equipment: 'None', availabilityStatus: 'Under Maintenance' },
        // Add as many rooms as necessary
    ]);

    const handleNewRoom = () => {
        // Handler for when the 'New Room' button is clicked
        console.log('Open the form to add a new room');
        // You can set a state here to show a modal or form to add new room data
    };

    return (
        <>
            <Banner goBackPath={"/apppage"} />
            <div className="flex justify-center">
                <div className="text-blue-500 p-4 m-4 rounded-lg text-3xl">
                    All Rooms
                </div>
            </div>
            <div className="flex justify-between items-center mx-4 md:mx-8 lg:mx-12 xl:mx-20">
                <SearchBar />
                <Link to={"/new-room"} className="bg-[#2260FF] text-white px-4 py-2 rounded-md font-medium">
                New Room
              </Link>
            </div>
            <div className="flex justify-center">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th scope="col" className="py-3 px-6">Room Number</th>
                            <th scope="col" className="py-3 px-6">Room Type</th>
                            <th scope="col" className="py-3 px-6">Equipment</th>
                            <th scope="col" className="py-3 px-6">Availability Status</th>
                            <th scope="col" className="py-3 px-6">Edit</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {roomData.map((room, index) => (
                            <tr key={index} className="border-b hover:bg-gray-200">
                                <td className="py-4 px-6">{room.roomNumber}</td>
                                <td className="py-4 px-6">{room.roomType}</td>
                                <td className="py-4 px-6">{room.equipment}</td>
                                <td className="py-4 px-6">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                        room.availabilityStatus === 'Available' ? 'bg-green-100 text-green-800' :
                                        room.availabilityStatus === 'Occupied' ? 'bg-red-100 text-red-800' :
                                        'bg-yellow-100 text-yellow-800'}`}>
                                        {room.availabilityStatus}
                                    </span>
                                </td>
                                <td className="py-4 px-6 text-center">
                                    <button className="text-blue-600 hover:text-blue-800">Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default AllRoomsPage;
