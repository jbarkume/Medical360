import React, { useState } from 'react';

const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

const Calendar = () => {
  const currentDay = new Date().getDate();
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1); 

  return (
    <div className="bg-blue-200 p-5 rounded-2xl shadow-lg">
      <div className="flex items-center justify-between mb-3">
        <button className="text-blue-600 hover:bg-blue-300 rounded-full">
          <span className="text-xl px-3 py-1">&lt;</span>
        </button>
        <span className="font-bold text-xl text-blue-600">MONTH</span>
        <button className="text-blue-600 hover:bg-blue-300 rounded-full">
          <span className="text-xl px-3 py-1">&gt;</span>
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {daysOfWeek.map((day, idx) => (
          <div key={idx} className="text-center font-bold text-blue-600 text-sm py-1">{day}</div>
        ))}
        {daysInMonth.map((day, idx) => (
          <button
            key={idx}
            className={`text-center p-2 rounded-lg text-sm 
                        ${day === currentDay ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'} 
                        hover:bg-blue-600 hover:text-white`}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
