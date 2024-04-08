import React from 'react';

const appointments = [
  { id: 1, visitNumber: "#876364", patientName: "Jayarajan kp", gender: "Male", reason: "Monthly checkup" },
  { id: 2, visitNumber: "#348745", patientName: "Varun P", gender: "Male", reason: "Consultation" },
  { id: 3, visitNumber: "#234856", patientName: "Nithya P", gender: "Female", reason: "Monthly checkup" },
  { id: 4, visitNumber: "#542374", patientName: "Jithesh", gender: "Male", reason: "Monthly checkup" },
  { id: 5, visitNumber: "#097345", patientName: "Vibha Ak", gender: "Female", reason: "Monthly checkup" },
  { id: 6, visitNumber: "#123745", patientName: "Manushi P", gender: "Female", reason: "Checkup" },
  { id: 7, visitNumber: "#382745", patientName: "Hari Raj", gender: "Male", reason: "Monthly checkup" },
  { id: 8, visitNumber: "#187345", patientName: "Ravi Prasadh", gender: "Male", reason: "Monthly checkup" },
];

const AppointmentsCard = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-4 my-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-700">Appointments</h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
          View All
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-gray-600">Visit No.</th>
              <th className="px-4 py-2 text-left text-gray-600">Patient Name</th>
              <th className="px-4 py-2 text-left text-gray-600">Gender</th>
              <th className="px-4 py-2 text-left text-gray-600">Reason</th>
              <th className="px-4 py-2 text-left text-gray-600">Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id} className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">{appointment.visitNumber}</td>
                <td className="px-4 py-2">{appointment.patientName}</td>
                <td className="px-4 py-2">{appointment.gender}</td>
                <td className="px-4 py-2">{appointment.reason}</td>
                <td className="px-4 py-2">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded">
                    Consult
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentsCard;
