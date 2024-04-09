import React, { useState } from "react";
import Banner from "../components/Banner";
import FormField from "../components/FormField";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const navigate = useNavigate();

  const fields = [
    { name: 'Name', initialValue: '', editable: true },
    { name: 'Email', initialValue: '', editable: true },
    { name: 'Password', initialValue: '', editable: true },
    { name: 'Confirm Password', initialValue: '', editable: true },
    { name: 'Department', initialValue: '', editable: true },
    { name: 'Phone Number', initialValue: '', editable: true },
  ];

  // Example registration handler
  const handleRegistration = (formData) => {
    console.log("Form Data:", formData);
    // Handle the registration logic here
    navigate("/register"); // Navigate after registration
  };

  return (
    <>
      <Banner goBackPath="/" />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
          {/* Title and message */}
          <div className="text-center mb-4">
            <h2 className="text-3xl font-extrabold text-gray-900">Register</h2>
            <p className="mt-2 text-gray-600">Register for an account.</p>
          </div>
          <FormField fields={fields} submit={handleRegistration} buttonName={"Register"} />
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
