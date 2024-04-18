import React from "react";
import {
  InformationCircleIcon,
  UserCircleIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import Banner from "../components/Banner";
import StaffCard from "../components/StaffCard";
import doctorImageone from "../images/doctor2.jpeg";
import { useAuthContext } from "../hooks/useAuthContext";
const appointments = [
  { id: 1, name: "Maria Elena" },
  { id: 2, name: "Jessie" },
  { id: 3, name: "Steffi" },
];

// const doctors = [
//   { id: 1, name: 'Dr. Alexander Bennett, Ph.D.', specialty: 'Dermato-Genetics' },
//   { id: 2, name: 'Dr.Maria Elena', specialty: 'Psychologist' },
//   { id: 3, name: 'Dr. Steffano Jessie Elena', specialty: 'Orthopedist' },
//
// ];
const doctors = [
  {
    image: doctorImageone,
    name: "Dr. Alexander Bennett, Ph.D.",
    role: "Dermato-Genetics",
    bio: "Specialist in genetic skin conditions and dermatological research.",
  },
  {
    image: doctorImageone,
    name: "Dr. Olivia Turner, M.D.",
    role: "Dermato-Endocrinology",
    bio: "Expert in hormonal skin disorders and systemic treatment approaches.",
    status: "On Leave",
  },
  {
    image: doctorImageone,
    name: "Dr. Alexander Bennett, Ph.D.",
    role: "Dermato-Genetics",
    bio: "Specialist in genetic skin conditions and dermatological research.",
  },
  {
    image: doctorImageone,
    name: "Dr. Olivia Turner, M.D.",
    role: "Dermato-Endocrinology",
    bio: "Expert in hormonal skin disorders and systemic treatment approaches.",
    status: "On Leave",
  },
];

const UnscheduledAppointments = () => {
  const { user } = useAuthContext();
  return (
    <div className=" bg-gray-100 min-h-screen">
      {/* <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold text-blue-600">Medical360</h1>
        <SearchIcon className="h-8 w-8 text-blue-600" />
      </div> */}
      <Banner goBackPath={"/apppage"} />

      {user.isAdmin  && (
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl text-gray-700 font-bold">
            Unscheduled Appointments
          </h2>
          <div>
            <button className="bg-blue-300 text-white py-2 px-4 rounded-lg mr-2">
              Upcoming
            </button>
            <button className="bg-blue-300 text-white py-2 px-4 rounded-lg">
              Cancelled
            </button>
          </div>
        </div>
      )}

      {user.isAdmin && (
        <div className="grid grid-cols-3 gap-4 mb-8">
          {appointments.map((appointment) => (
            <div
              key={appointment.id}
              className="bg-white rounded-lg shadow p-4 flex items-center"
            >
              <UserCircleIcon className="h-10 w-10 text-gray-500" />
              <div className="ml-4">
                <p className="font-semibold">{appointment.name}</p>
                <button className="text-blue-500">Info</button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl text-gray-700 font-bold">Available Doctors</h2>
        <button className="text-blue-500">See all</button>
      </div>

      {/* <div className="grid grid-cols-3 gap-4">
        {doctors.map}
        {/* {doctors.map((doctor) => (
          <div key={doctor.id} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <div className="rounded-full overflow-hidden h-24 w-24 mb-3">
              
            </div>
            <button className="text-blue-500 mb-3">Info</button>
            <p className="font-semibold text-center">{doctor.name}</p>
            <p className="text-sm text-gray-500 text-center">{doctor.specialty}</p>
          </div>
        ))} 
      </div> */}
      <div className="bg-[#EBF8FF] p-4 rounded-lg shadow-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {doctors.map((doctor, index) => (
            <StaffCard key={index} staff={doctor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UnscheduledAppointments;
