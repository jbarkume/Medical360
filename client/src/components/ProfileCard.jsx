import React from 'react';
import FormField from './FormField';


const ProfileCard = () => {
  const fields = [
    { name: 'Name', initialValue: 'John Doe', editable: true ,showEditIcon: true },
    { name: 'Email', initialValue: 'john.doe@stonybrook.edu',editable: true, showEditIcon: true },
    { name: 'Department', initialValue: 'Dermato-Genetics',editable: true, showEditIcon: true },
    { name: 'Password', initialValue: 'XXXXX',editable: true, showEditIcon: true },



  ];

  // Function to handle form submission
  const handleSubmit = (formData) => {
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