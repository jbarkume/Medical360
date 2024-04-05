import React from 'react';
import TextField from './TextField';

const PatientCard = () => {
  const fields = [
    { name: 'Name', initialValue: 'Doe', editable:false ,showEditIcon: false},
    { name: 'Age', initialValue: '20', editable:false ,  showEditIcon: false },
    { name: 'Date', initialValue: '20 March, 2024', editable:false, showEditIcon: false },
    { name: 'Place', initialValue: 'Room 201', editable:false ,showEditIcon: false },
    { name: 'Consultant', initialValue: 'Caty', editable:false ,showEditIcon: false },
    { name: 'Department', initialValue: 'Dermatology', editable:false ,showEditIcon: false },
    { name: 'Reason of Visit', initialValue: 'Fever', editable:false ,showEditIcon: false },
    { name: 'Status', initialValue: 'Consultation', editable:false ,showEditIcon: false }
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

export default PatientCard;