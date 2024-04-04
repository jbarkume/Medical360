import React, { useState } from 'react';

const TextField = ({ name, onChange }) => {
  // State to hold the value of the text field
  const [value, setValue] = useState('');

  // Event handler to update the value when text changes
  const handleChange = (event) => {
    setValue(event.target.value);
    onChange(name, event.target.value);
  };

  return (
    <div className="max-w-md mx-auto relative">
      <div className="border-t-4 border-purple-500"></div>
      <div className="bg-white shadow-md rounded px-4 pt-4 pb-8 mb-4 relative z-10">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
          {name}
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id={name}
          type="text"
          placeholder={`Enter ${name}`}
          value={value}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default TextField;