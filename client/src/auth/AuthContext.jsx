import React, { createContext, useEffect, useState } from "react";
import doctorImageone from "../images/doctor2.jpeg";
import patientImage from "../images/PatientImage.png";
import api from "./auth-api"

const AuthContext = createContext();

export const doctorsData = [
  {
    name: "Dr. Olivia Turner, M.D.",
    department: "Dermato-Endocrinology",
    experience: "20 years",
    focus:
      "The impact of hormonal imbalances on skin conditions, specializing in acne, hirsutism, and other skin disorders.",
    schedule: "Mon - Sat / 9 AM - 4 PM",
    profile:
      "Dr. Doe completed her medical degree at Stony Brook University, renowned for its rigorous medical program and emphasis on patient-centered care. She further specialized in dermatology during her residency at Yale University, where she excelled in both medical and surgical dermatology, with a particular focus on pediatric dermatology, cosmetic procedures",
    image: doctorImageone,
  },
];
export const patientsData = [
  {
    name: "Patient One",
    age: "30",
    sex: "Male",
    files: "3 files",
    email: "patient.one@hospital.com",
    schedule: "Next appointment: 10th Oct, 10:00 AM",
    carenotes: ["Note 1", "Note 2", "Note 3"],
    image: patientImage,
  },
];

function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState({
    user: null,
    loggedIn: false,
    isAdmin: false,
    isDoctor: false,
    isNurse: false,
    department: null,
    doctors: doctorsData,
    patients: patientsData,
  });

  useEffect(() => {
    // get whether use is logged in or not
    if (auth.user)
      auth.getLoggedIn(auth.user._id);
  }, []);

  auth.getLoggedIn = async function () {
    // get whether user is logged in or not
    try {
      const response = await api.loggedIn();
      if (response.status === 200) {
        setAuth({
          ...auth,
          user: response.data.user,
          loggedIn: response.data.loggedIn,
          isAdmin: response.data.isAdmin,
          isDoctor: response.data.isDoctor,
          department: response.data.department
        });
      }
    } catch (err) {
      console.log(err.message);
    }

  };

  // register a user, upon success return true, otherwise return false
  auth.register = function ({
    name,
    email,
    password,
    department,
    phone_number,
    isAdmin,
    isDoctor,
    isNurse,
  }) {
    let new_user = {
      name,
      email,
      password,
      department,
      phone_number,
      isAdmin,
      isDoctor,
      isNurse,
    };
    users.push(new_user);
    console.log(users);
    return true;
  };

  // login the user with email and passwrod. Upon success, set user to logged in. upon false, print why and return false
  auth.login = async function (email, password) {
    try{
      const response = await api.login(email, password);
      if (response.status === 200) {
        auth.getLoggedIn();
      }
    } catch(error){
      console.log(error);
    }
  };

  // logout the user
  auth.logout = async function () {
    const response = await api.logout();
    if (response.status === 200) {
      console.log("logged out");
      setAuth({
        ...auth,
        user: null,
        loggedIn: false,
        isAdmin: false,
        isDoctor: false,
        isNurse: false,
        department: null
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
