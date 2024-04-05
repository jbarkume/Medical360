import React, { useState } from 'react';

const fakeAppointments = [
  { id: 1, time: '8:00', title: 'Consultation', person: 'Abdul-Nishan', purpose: 'General check-up', isCurrent: true },
  { id: 2, time: '8:20', title: 'Consultation', person: 'Adamu', purpose: 'General check-up', isCurrent: false },
  // ... more appointments
];

const ScheduleItem = ({ appointment, onSelectAppointment, isSelected }) => (
  <div
    className={`flex justify-between items-center px-4 py-2 ${isSelected ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
    onClick={() => onSelectAppointment(appointment)}
  >
    <div className="flex flex-col flex-grow">
      <span className={`font-semibold ${isSelected ? 'text-blue-600' : 'text-gray-900'}`}>{appointment.person}</span>
      <span className={`text-sm ${isSelected ? 'text-blue-600' : 'text-gray-500'}`}>{appointment.title}</span>
    </div>
    <span className="text-sm">{appointment.time}</span>
  </div>
);

const ScheduleDetail = ({ appointment }) => (
  appointment ? (
    <div className="bg-gray-100 p-4">
      <h3 className="text-lg font-semibold mb-2">Appointment Details</h3>
      <p><strong>Patient:</strong> {appointment.person}</p>
      <p><strong>Time:</strong> {appointment.time}</p>
      <p><strong>Purpose:</strong> {appointment.purpose}</p>
    </div>
  ) : null
);

const Schedule = () => {
  const [selectedAppointment, setSelectedAppointment] = useState(fakeAppointments[0]);

  return (
    <div className="bg-white shadow rounded-lg divide-y">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Upcoming Schedule</h2>
      </div>
      <div className="divide-y">
        {fakeAppointments.map((appointment) => (
          <ScheduleItem
            key={appointment.id}
            appointment={appointment}
            onSelectAppointment={setSelectedAppointment}
            isSelected={selectedAppointment && selectedAppointment.id === appointment.id}
          />
        ))}
      </div>
      <ScheduleDetail appointment={selectedAppointment} />
    </div>
  );
};

export default Schedule;
