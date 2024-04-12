import React from "react";
import Banner from "../components/Banner";
import FormField from "../components/FormField";
import { useNavigate } from "react-router-dom";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();

  
  // The fields for the ForgotPassword form
  const fields = [
    { name: 'Email', initialValue: '', editable: true },
    { name: 'New Password', initialValue: '', editable: true }
  ];

  // This function will be called when the form is submitted
  const handleForgotPassword = (formData) => {
    console.log('Password reset request for:', formData);
    // navigate('/password-reset-sent');
    axios.post('http://localhost:3000/auth/reset-password', formData)
      .then(response => {
        alert('If an account with that email exists, a password reset link has been sent.');
        navigate('/');  
      })
      .catch(error => {
        console.error('Error resetting password:', error);
        alert('Error resetting password. Please try again.');
      });
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
