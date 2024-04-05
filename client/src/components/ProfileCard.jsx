// ProfileCard component
import React from 'react';
import FormField from './FormField';


const ProfileCard = () => {
  const fields = [
    { name: 'Name', initialValue: '205', editable: true },
    { name: 'Room Type', initialValue: 'VIP', editable: true },
    // Add other fields as necessary
  ];

  // Function to handle form submission
  const handleSubmit = (formData) => {
    // Here you would handle the form submission,
    // such as updating the profile data or sending it to a server
    console.log('Updated Profile Data:', formData);
  };

  return (
    <FormField 
      fields={fields} 
      submit={handleSubmit} 
      buttonName="Save"
    />
  );
};

export default ProfileCard;
