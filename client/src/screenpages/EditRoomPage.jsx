import React from 'react';
import FormField from '../components/FormField';
import Banner from '../components/Banner';


const EditRoomPage = () => {
    const fields = [
    { name: 'Room Number', initialValue: '205', editable:true ,showEditIcon: true },
    { name: 'Room Type', initialValue: 'VIP', editable:true ,showEditIcon: true },
    { name: 'Equipment', initialValue: 'Dialysis', editable:true ,showEditIcon: true },
    { name: 'Availability Status', initialValue: 'Free', editable:true ,showEditIcon: true },
      ];

  // Function to handle form submission
  const handleSubmit = (formData) => {
    // such as updating the profile data or sending it to a server
    console.log('Updated Profile Data:', formData);
  };

  return (
    <>
     <Banner goBackPath={"/"}></Banner>
    <FormField 
      fields={fields} 
      submit={handleSubmit} 
      buttonName="Save"
    />
    </>
  );
};

export default EditRoomPage;
