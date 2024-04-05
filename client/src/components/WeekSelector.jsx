import React from 'react';

const weeksData = [
  { day: '22', dayOfWeek: 'MON' },
  { day: '23', dayOfWeek: 'TUE' },
  { day: '24', dayOfWeek: 'WED', selected: true },
  { day: '25', dayOfWeek: 'THU' },
  { day: '26', dayOfWeek: 'FRI' },
  { day: '27', dayOfWeek: 'SAT' },
];

const WeekSelector = () => {
  return (
    <div className="flex items-center justify-between bg-blue-200 p-2 rounded-xl shadow-lg">
      <button className="p-2 text-blue-600 hover:bg-blue-300 rounded-full">
        <span className="text-xl">&#60;</span>
      </button>
      {weeksData.map((week, index) => (
        <div
          key={index}
          className={`flex flex-col items-center justify-center h-16 w-16 mx-1 rounded-lg 
                      ${week.selected ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'} 
                      ${week.selected ? 'shadow' : 'hover:bg-blue-300'}`}
        >
          <span className="text-xs font-medium uppercase">{week.dayOfWeek}</span>
          <span className="text-lg font-bold">{week.day}</span>
        </div>
      ))}
      <button className="p-2 text-blue-600 hover:bg-blue-300 rounded-full">
        <span className="text-xl">&#62;</span>
      </button>
    </div>
  );
};

export default WeekSelector;
