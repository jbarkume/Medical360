import React, { createContext, useEffect, useState } from "react";
import storeApi from "./store-api";
import userApi from "../auth/user-api"

const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
  const [store, setStore] = useState({
    doctors: [],
    patients: [],
    departments: [],
    id_to_department: {},
    department_to_id: {},
    currentPatient: null,
    currentDeparment: null
  });

  // create patient with given data
  store.createPatient = async function (data) {
    // get whether user is logged in or not
    try {
      const response = await storeApi.createPatient(data);
      if (response.status === 200)
        console.log("patient created")
    } catch (err) {
      console.log(err.message);
    }

  };

  // update patient by id with data
  store.updatePatient = async function (id, data) {
    try {
        const response = await storeApi.updatePatient(id, data)
        if (response.status === 200) {
            console.log(response.data.patient);
        }
    } catch (err) {
        console.log(err.message);
    }
  }

  // get patient by id
  store.getPatient = async function (id) {
    try{
      const response = await storeApi.getPatient(id);
      if (response.status === 200) {
            setStore({
                ...store,
                currentPatient: response.data.patient
            })
        }
    } catch(err){
        console.log(err.message);
    }
  };

  // get all the patients
  store.getAllPatients = async function () {
    const response = await storeApi.getAllPatients();
    if (response.status === 200) {
        setStore({
            ...store,
            patients: response.data.patients,
            currentPatient: null
        })
    }
  };

  // update department by id with data
  store.updateDepartment = async function (id, data) {
    try {
        const response = await storeApi.updateDepartment(id, data)
        if (response.status === 200) {
            console.log(response.data.department);
        }
    } catch (err) {
        console.log(err.message);
    }
  }

  // get patient by id
  store.getDepartment = async function (id) {
    try{
      const response = await storeApi.getDepartment(id);
      if (response.status === 200) {
            setStore({
                ...store,
                currentDeparment: response.data.department
            })
        }
    } catch(err){
        console.log(err.message);
    }
  };

  // get all the patients
  store.getAllDepartments = async function () {
    try {
        const response = await storeApi.getAllDepartments();
        if (response.status === 200) {
            let departments = response.data.departments
            store.id_to_department = departments.reduce((result, obj) => {
                result[obj._id] = obj.departmentName;
                return result;
              }, {});
            store.department_to_id =  Object.fromEntries(Object.entries(store.id_to_department).map(([key, value]) => [value, key]));
            setStore({
                ...store,
                departments
            });
        }
    } catch (err) {
        console.log(err);
    }
  };

  store.deletePatient = async function(id) {
    try{
        const response = await storeApi.deletePatient(id);
        if (response.status === 200) {
              console.log("deleted Patient")
              setStore({
                ...store,
                currentPatient: null,
              })
          }
      } catch(err){
          console.log(err.message);
      }
  }

  store.deleteUser = async function(id) {
    try{
        const response = await userApi.deleteUser(id);
        if (response.status === 200) {
              console.log("deleted user")
              setStore({
                ...store,
                currentPatient: null,
              })
          }
      } catch(err){
          console.log(err.message);
      }
  }

  return (
    <GlobalContext.Provider
      value={{
        store,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContext;
export { GlobalContextProvider };