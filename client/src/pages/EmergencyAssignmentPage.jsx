import React from 'react';
import { PlusCircleIcon } from '@heroicons/react/solid';

const EmergencyReassignment = () => {
  // Placeholder functions for demonstration purposes
  const handleEmergencySelection = (department) => {
    console.log("");
  };

  const handleSOS = () => {
    console.log('SOS Button Pressed');
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto my-8">
      <h1 className="text-2xl font-bold text-red-600 mb-4">Emergency Reassignment ?</h1>
      
      <div className="mb-6">
        <p className="text-lg">Patient ID: 459321</p>
        <p className="text-lg">Location: Ward 5, Room 12</p>
        <p className="text-lg mb-4">Current Condition: Acute Respiratory Distress</p>
        <p className="text-xl mb-2">What’s the emergency?</p>

        <div className="flex justify-between mb-4">
          <button
            onClick={() => handleEmergencySelection('ICU')}
            className="flex items-center px-4 py-2 bg-green-100 text-green-600 rounded-full"
          >
            <PlusCircleIcon className="h-6 w-6 mr-2" />
            ICU
          </button>

          <button
            onClick={() => handleEmergencySelection('Cardiology')}
            className="flex items-center px-4 py-2 bg-green-100 text-green-600 rounded-full"
          >
            <PlusCircleIcon className="h-6 w-6 mr-2" />
            Cardiology
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <button
          onClick={handleSOS}
          className="mb-4 bg-red-600 text-white text-lg px-6 py-3 rounded-full w-full text-center font-bold"
          onTouchStart={() => console.log('SOS Button Touched')}
          onTouchEnd={() => console.log('SOS Button Released')}
        >
          Press the button if you see this
        </button>

        <button
          className="bg-orange-200 text-orange-600 text-lg px-6 py-3 rounded-full w-32 text-center"
          onTouchStart={() => console.log('SOS Button Touched')}
          onTouchEnd={() => console.log('SOS Button Released')}
        >
          SOS
          <p className="text-xs">Press 3 second</p>
        </button>
      </div>
    </div>
  );
};

export default EmergencyReassignment;
