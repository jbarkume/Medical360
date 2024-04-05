import React from 'react';
import TextField from './TextField';

const EquipmentCard = () => {
  const fields = [
    { name: 'Name', initialValue: 'MRI', editable:false ,showEditIcon: false},
    { name: 'Type', initialValue: 'Machine', editable:false ,  showEditIcon: false },
    { name: 'Quantity', initialValue: '20', editable:false, showEditIcon: false },
    { name: 'Location', initialValue: 'Room 201', editable:false ,showEditIcon: false },
    { name: 'Maintenance Status', initialValue: 'Good', editable:false ,showEditIcon: false }
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
          showEditIcon={false}
        />
      ))}
    </div>
  );
};

export default EquipmentCard;