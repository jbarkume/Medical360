import React from 'react';
import TextField from './TextField';

const RoomCard = () => {
  const fields = [
    { name: 'Room Number', initialValue: '205', isStatic: true },
    { name: 'Room Type', initialValue: 'VIP', isStatic: true },
    { name: 'Equipment', initialValue: 'Dialysis', isStatic: true },
    { name: 'Availability Status', initialValue: 'Free', isStatic: true },
   
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

export default RoomCard;