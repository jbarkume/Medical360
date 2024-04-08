import React, { useState } from 'react';

const timesData = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM',
  '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
  '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM',
];

const TimeSelector = () => {
  const [selectedTime, setSelectedTime] = useState('10:00 AM');

  return (
    <div className="bg-blue-200 p-5 rounded-xl shadow-lg">
      <h3 className="text-lg font-bold mb-3 text-center text-blue-600">Available Time</h3>
      <div className="flex flex-wrap justify-center gap-2">
        {timesData.map((time, idx) => (
          <button
            key={idx}
            className={`text-sm md:text-base px-4 py-2 rounded-full shadow-md 
                        ${time === selectedTime ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'} 
                        hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50`}
            onClick={() => setSelectedTime(time)}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeSelector;
