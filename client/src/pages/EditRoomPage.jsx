import React from "react";
import FormField from "../components/FormField";
import Banner from "../components/Banner";

const EditRoomPage = () => {
  const fields = [
    {
      name: "Room Number",
      label:"Room Number",
      initialValue: "205",
      editable: true,
      showEditIcon: true,
    },
    {
      name: "Room Type",
      label:"Room Type",
      initialValue: "VIP",
      editable: true,
      showEditIcon: true,
    },
    {
      name: "Equipment",
      label:"Equipment",
      initialValue: "Dialysis",
      editable: true,
      showEditIcon: true,
    },
    { 
      name: 'Availabity Status', 
      label:'Availabity Status',
      initialValue: 'Available', 
      editable: true,
      showEditIcon: true, 
      type: 'select', 
      options: ['Occupied', 'Available'] 
  },
  ];

  // Function to handle form submission
  const handleSubmit = (formData) => {
    // such as updating the profile data or sending it to a server
    console.log("Updated Profile Data:", formData);
  };

  return (
    <>
      <Banner goBackPath={"/all-rooms"}></Banner>
      <div className="flex justify-center">
                <div className='mb-5'>
                <h1 className="text-3xl font-bold text-blue-500">Edit Room</h1>
                </div>
            </div>
      <FormField fields={fields} submit={handleSubmit} buttonName="Save" />
    </>
  );
};

export default EditRoomPage;
