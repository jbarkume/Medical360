import React from "react";
import FormField from "../components/FormField";
import Banner from "../components/Banner";

const EditEquipmentPage = () => {
  const fields = [
    { name: "Name", initialValue: "MRI", editable: true, showEditIcon: true },
    {
      name: "Type",
      initialValue: "Machine",
      editable: true,
      showEditIcon: true,
    },
    {
      name: "Quantity",
      initialValue: "20",
      editable: true,
      showEditIcon: true,
    },
    {
      name: "Location",
      initialValue: "Room 201",
      editable: true,
      showEditIcon: true,
    },
    {
      name: "Maintenance Status",
      initialValue: "Good",
      editable: true,
      showEditIcon: true,
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
        <div className="mb-5">
          <h1 className="text-3xl font-bold text-blue-500">Edit Equipment</h1>
        </div>
      </div>
      <FormField fields={fields} submit={handleSubmit} buttonName="Save" />
    </>
  );
};

export default EditEquipmentPage;
