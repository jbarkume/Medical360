import React from "react";
import Banner from "../components/Banner";
import FormField from "../components/FormField";
import { useNavigate } from "react-router-dom";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();

  
  // The fields for the ForgotPassword form
  const fields = [
    { name: 'Username', initialValue: '', editable: true },
    { name: 'Email', initialValue: '', editable: true }
  ];

  // This function will be called when the form is submitted
  const handleForgotPassword = (formData) => {
    console.log('Password reset request for:', formData);
    navigate('/password-reset-sent');
  }

  return (
    <>
      <Banner goBackPath={"/"} />
      <div className="flex flex-col items-center mt-10">
        <h2 className="text-3xl font-bold mb-6">Forgot Password?</h2>
        <FormField 
          fields={fields} 
          submit={handleForgotPassword} 
          buttonName={"Send Email"} 
        />
      </div>
    </>
  );
};

export default ForgotPasswordPage;
