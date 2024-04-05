import React, { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { QuestionMarkCircleIcon } from '@heroicons/react/outline';
import AccountCircle from '../components/AccountCircle';
import TextField from '../components/TextField';
const reasons = ['Rescheduling', 'Weather Conditions', 'Unexpected Work', 'Others'];

const CancelAppointmentForm = () => {
  const [selectedReason, setSelectedReason] = useState(reasons[0]);
  const [otherReason, setOtherReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const cancellationReason = selectedReason === 'Others' ? otherReason : selectedReason;
    console.log('Cancellation Reason:', cancellationReason);
    // Further processing logic goes here
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-2xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold text-blue-600">Medical360</h1>
          <AccountCircle></AccountCircle>
        </div>
        
        <h2 className="text-2xl text-gray-700 font-bold mb-6">Cancel Appointment</h2>

        <form onSubmit={handleSubmit}>
          <RadioGroup value={selectedReason} onChange={setSelectedReason}>
            <div className="space-y-2">
              {reasons.map((reason) => (
                <RadioGroup.Option key={reason} value={reason} className="flex items-center">
                  {({ checked }) => (
                    <>
                      <div className={`w-4 h-4 rounded-full border-2 mr-2 ${checked ? 'bg-blue-500 border-blue-500' : 'border-gray-300'}`}></div>
                      <RadioGroup.Label as="p" className={`flex-1 ${checked ? 'text-blue-600' : 'text-gray-600'}`}>
                        {reason}
                      </RadioGroup.Label>
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>

          {selectedReason === 'Others' && (
            <div className="mt-4">
              <label className="block text-gray-700 mb-2">Please specify your reason here</label>
              <textarea
                className="w-full p-2 border border-gray-300 shadow-sm rounded h-28"
                placeholder="Enter Your Reason Here..."
                value={otherReason}
                onChange={(e) => setOtherReason(e.target.value)}
              ></textarea>
            </div>
          )}
            <TextField name={"Reason for canceling"} editable={true} initialValue={""}/>
          <div className="flex justify-center mt-8">
            <button type="submit" className="px-6 py-2 rounded text-white bg-blue-500 hover:bg-blue-600 shadow-sm">
              Cancel Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CancelAppointmentForm;
