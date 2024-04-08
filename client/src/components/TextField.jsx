import React, { useState, useEffect } from 'react';

const TextField = ({
  name,
  onChange,
  editable = true,
  initialValue = '',
  showEditIcon = false,
  type = 'text', // Default type is text
  options = [] // For dropdown, provide options as an array
}) => {
  const [value, setValue] = useState(initialValue);
  // Initiate editing state based on editable but not for showEditIcon by default
  const [isEditing, setIsEditing] = useState(editable && !showEditIcon);

  useEffect(() => {
    // Re-apply editable state when editable or showEditIcon props change
    setIsEditing(editable && !showEditIcon);
    // Update the value when initialValue changes
    setValue(initialValue);
  }, [initialValue, editable, showEditIcon]);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (onChange) {
      onChange(name, newValue);
    }
  };

  const handleEditClick = () => {
    // Enable editing if showEditIcon is true and field is editable
    if (editable && showEditIcon) {
      setIsEditing(true);
    }
  };

  return (
    <div className="max-w-md mx-auto relative">
      <div className="border-t-4 border-purple-500"></div>
      <div className="bg-white shadow-md rounded px-4 pt-4 pb-8 mb-4 relative z-10">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
          {name}
        </label>
        {type === 'select' ? (
          <div className="relative">
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id={name}
              value={value}
              onChange={handleChange}
              disabled={!isEditing}
            >
              <option value="">Select {name}</option>
              {options.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            {showEditIcon && !isEditing && editable && (
              <span onClick={handleEditClick} className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">✏️</span>
            )}
          </div>
        ) : (
          <div className="relative">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id={name}
              type={type}
              placeholder={`Enter ${name}`}
              value={value}
              onChange={handleChange}
              readOnly={!isEditing}
            />
            {showEditIcon && !isEditing && editable && (
              <span onClick={handleEditClick} className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">✏️</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TextField;
