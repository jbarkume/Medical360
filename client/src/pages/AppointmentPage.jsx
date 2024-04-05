import React from 'react';
import Banner from '../components/Banner';
import Calendar from '../components/Calendar'
import WeekSelector from '../components/WeekSelector';
import TimeSelector from '../components/TimeSelector';

const SchedulingPage = () => {
  const goBackPath = '/dashboard';

  return (
    <div>
      <Banner goBackPath={goBackPath} />
      <div className="max-w-4xl mx-auto p-4">
        <div className="flex justify-between items-center bg-white px-8 py-4 rounded-xl shadow-lg mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-blue-600">Dr. Olivia Turner, M.D.</h2>
          <div className="flex items-center space-x-3">
            <div className="bg-blue-500 p-2 rounded-full" />
            <div className="bg-blue-500 p-2 rounded-full" />
            <div className="bg-blue-500 p-2 rounded-full" />
          </div>
        </div>
        
        <Calendar />
        <WeekSelector />
        <TimeSelector />
      </div>
    </div>
  );
};

export default SchedulingPage;
