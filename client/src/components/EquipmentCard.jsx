import React from 'react';
import TextField from './TextField';

const EquipmentCard = () => {
  const fields = [
    { name: 'Name', initialValue: 'MRI', isStatic: true },
    { name: 'Type', initialValue: 'Machine', isStatic: true },
    { name: 'Quantity', initialValue: '20', isStatic: true },
    { name: 'Location', initialValue: 'Room 201', isStatic: true },
    { name: 'Maintenance Status', initialValue: 'Good', isStatic: true }
  ];

  
  

  return (
    <div className="max-w-md mx-auto">
      {fields.map((field, index) => (
        <TextField
          key={index}
          name={field.name}
          initialValue={field.initialValue}
          onChange={() => {}}
          editable={false}
        />
      ))}
    </div>
  );
};

export default EquipmentCard;
