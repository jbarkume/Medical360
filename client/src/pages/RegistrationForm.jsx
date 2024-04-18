import React from "react";
import Banner from "../components/Banner";
import FormField from "../components/FormField";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const { BASE_URL } = useGlobalContext();

  const fields = [
    { name: "name", label:"Name", initialValue: "", editable: true },
    { name: "email", label:"Email",initialValue: "", editable: true },
    { name: "password", label:"Password",initialValue: "", editable: true, type: "password" },
    {
      name: "confirmPassword",
      label:"Confirm Password",
      initialValue: "",
      editable: true,
      type: "password",
    },
    { name: "department",label:"Department", initialValue: "", editable: true },
    { name: "phoneNumber", label:"Phone Number",initialValue: "", editable: true },
  ];

  // Function to submit registration data to the backend
  const handleRegistration = async (formData) => {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Create the user registration object with appropriate keys
    const registrationData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      department: formData.department,
      phone_number: formData.phoneNumber,
    };

    try {
      const response = await fetch(`${BASE_URL}/auth/register`, {
        // Adjust the URL as per your setup
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registrationData),
      });

      if (response.ok) {
        console.log("Registration successful");
        navigate("/login"); // Redirect on successful registration
      } else {
        const errorText = await response.text();
        throw new Error(errorText);
      }
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Failed to register: " + error.message);
    }
  };

  return (
    <>
      <Banner goBackPath="/" />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
          <div className="text-center mb-4">
            <h2 className="text-3xl font-extrabold text-gray-900">Request</h2>
            <p className="mt-2 text-gray-600">Request for an account.</p>
          </div>
          <FormField
            fields={fields}
            submit={handleRegistration}
            buttonName={"Request"}
          />
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
