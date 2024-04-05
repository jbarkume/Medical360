import React from "react";
import Banner from "../components/Banner"
import FormField from "../components/FormField"
import AuthContext from "../auth/AuthContext";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

  const { auth } = useContext(AuthContext);
  const [wrong, setWrong] = useState(false)
  const navigate = useNavigate();

  // handles if already logged in
  useEffect(() => {
    if (auth.loggedIn) {
      navigate("/home")
    }
  }, [auth.loggedIn])
  
//made changes here

  // const fields = ["Email", "Password"]
  const fields = [
    { name: 'Email', initialValue: '', editable: true },
    { name: 'Password', initialValue: '', editable: true }
  ];

  const handleLogin = (formData) => {
    let email = formData.Email;
    let password = formData.Password;
    if (auth.login(email, password)) {
      // bring user to home page
      setWrong(false);
    } else {
      setWrong(true);
    }
  }

  return (
    <>
      <Banner goBackPath={"/"}></Banner>
      {wrong && 
        <div className="flex justify-center items-center">
          <div className="m-2 h-screenbg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Wrong email and password!</strong>
          </div>
        </div>
      }
      <FormField fields={fields} submit={handleLogin} buttonName={"Login"}></FormField>
    </>
  );
};

export default LoginForm;
