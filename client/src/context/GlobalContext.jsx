import React, { createContext, useReducer, useState } from "react";
import storeApi from "../store/store-api";
import userApi from "../auth/user-api";

const GlobalContext = createContext();

export const storeReducer = (state, action) => {
  switch (action.type) {
    case "GET_RESOURCE":

      switch (action.context) {
        case "patient":
          return { ...state, currentPatient: action.payload };
        case "deparment":
          return { ...state, currentDepartment: action.payload };
        case "equipment":
          return { ...state, currentEquipment: action.payload};
        case "room":
          return { ...state, currentRoom: action.payload};
        default:
          return state;
      }
    case "GET_ALL_USERS":
      return {
        ...state,
        users: action.payload
      }
    case "GET_ALL_PATIENTS":
      return {
        ...state,
        currentPatient: null,
        patients: action.payload
      };
    case "GET_ALL_EQUIPMENT":
      return {
        ...state,
        equipments: action.payload.equipments,
        id_to_equipment: action.payload.equipmentMapping,
        equipment_to_id: action.payload.swappedMap
      };
    case "GET_ALL_DEPARTMENTS":
      return {
        ...state,
        departments: action.payload.departments,
        id_to_department: action.payload.id_to_department,
        department_to_id: action.payload.department_to_id
      };
    case "GET_ALL_ROOMS":
      return {
        ...state,
        rooms: action.payload,
        currentRoom: null,
      };
    case "DELETE":
      // delete based on value passes as context
      switch (action.context) {
        case "patient":
          return {
            ...state,
            currentPatient: null,
            patients: state.patients.filter(patient => patient._id !== action.payload)
          };
        case "equipment":
          return {
            ...state,
            currentEquipment: null,
            equipments: state.equipments.filter(equipment => equipment._id !== action.payload)
          };
        case "room":
          return {
            ...state,
            currentRoom: null,
            rooms: state.rooms.filter(room => room._id !== action.payload)
          };
        case "user":
          return {
            ...state,
            users: state.users.filter(user => user._id !== action.payload)
          };
        default:
          return state;
      }

    default:
      return state
  }
} 


function GlobalContextProvider({ children }) {
  const [store, setStore] = useReducer(storeReducer, {
    doctors: [],
    users: null,
    patients: null,
    departments: null,
    rooms: null,
    equipments: null,
    id_to_department: {},
    department_to_id: {},
    id_to_equipment: {},
    equipment_to_id: {},
    currentPatient: null,
    currentDepartment: null,
    currentEquipment: null,
    currentRoom: null,
    BASE_URL: "https://medical360-d65d823d7d75.herokuapp.com"
  });

  // get all users to the application
  const getAllUsers = async function() {
    console.log(`Pinging ${store.BASE_URL}/users`)
    try {
      const response = await fetch(`${store.BASE_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({"Why": "God"})
      });
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      let json = await response.json(); // This should be the array directly
      console.log(json)
      let users = json.users;
      console.log(users)
      if (!Array.isArray(users)) {
        // Check if the data is an array
        console.error("Expected an array of users, received:", users);
        throw new Error("Data format error: Expected an array of users");
      }
      console.log("setting store")
      setStore({ type: "GET_ALL_USERS", payload: users }); // Set fetched user data to state, ensuring you're setting the array
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  // create patient with given data
  const createPatient = async function (data) {
    // get whether user is logged in or not
    try {
      const response = await fetch(`${store.BASE_URL}/patients`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        console.log("patient created");
        getAllPatients();
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  // update patient by id with data
  const updatePatient = async function (id, data) {
    try {
      const response = await storeApi.updatePatient(id, data);
      if (response.status === 200) {
        console.log(response.data.patient);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  // get patient by id
  const getPatient = async function (id) {
    try {
      const response = await fetch(`${store.BASE_URL}/patients/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({id})
      });
      if (response.ok) {
        const patient = (await response.json()).patient;
        setStore({ type: "GET_RESOURCE", context: "patient", payload: patient});
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  // get all the patients
  const getAllPatients = async function () {
    const response = await fetch(`${store.BASE_URL}/patients/all`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({"Why": "god"})
    });
    if (response.status === 200) {
      const patients = (await response.json()).patients;
      setStore({ type: "GET_ALL_PATIENTS", payload: patients});
    }
  };

  // get room by id
  const getRoom = async function (id) {
    try {
      const response = await fetch(`${store.BASE_URL}/rooms/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({id})
      });
      if (response.ok) {
        const room = (await response.json()).room;
        setStore({ type: "GET_RESOURCE", context: "room", payload: room});
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  // get all the rooms
  const getAllRooms = async function () {
    try {
      const response = await fetch(`${store.BASE_URL}/rooms/all`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({"Why": "god"})
      });
      if (response.status === 200) {
        let rooms = (await response.json()).rooms;
        if (
          !store.id_to_equipment ||
          Object.keys(store.id_to_equipment).length === 0
        ) {
          await getAllEquipments(); 
        }

        // Add equipment names to each room
        const roomsWithEquipmentNames = Object.values(rooms).map((room) => ({
          ...room,
          equipmentNames: room.equipment.map(
            (equipId) => store.id_to_equipment[equipId] || "Unknown Equipment"
          ),
        }));

        setStore({ type: "GET_ALL_ROOMS", payload: roomsWithEquipmentNames });
      }

    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  };

  // create room with given data
  const createRoom = async function (data) {
    // get whether user is logged in or not
    try {
      const response = await storeApi.createRoom(data);
      if (response.status === 201) {
        console.log("room created");
        return response;
    }
    } catch (err) {
      console.log(err.message);
    }
  };

  // update room by id with data
  const updateRoom = async function (id, data) {
    try {
      const response = await fetch(`${store.BASE_URL}/rooms/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        console.log((await response.json()).room);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  // get all the equipments
  const getAllEquipments = async function () {
    const response = await fetch(`${store.BASE_URL}/equipments/all`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({"Why": "god"})
    });

    if (response.status === 200) {
      let equipments = (await response.json()).equipmentList;
      const equipmentMapping = equipments.reduce((acc, equipment) => {
        acc[equipment._id] = equipment.equipmentName; // Store only the equipment name
        return acc;
      }, {});
      console.log(equipmentMapping)
      const swappedMap = Object.entries(equipmentMapping).reduce((acc, [id, name]) => {
        acc[name] = id;
        return acc;
      }, {});
      setStore({ type: "GET_ALL_EQUIPMENT", payload: {equipments, equipmentMapping, swappedMap} });
    }
    return response;
  };

  // get equipment by id
  const getEquipment = async function (id) {
    try {
      const response = await fetch(`${store.BASE_URL}/equipments/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({id})
      });
      if (response.ok) {
        const equipment = (await response.json()).equipment;
        setStore({ type: "GET_RESOURCE", context: "equipment", payload: equipment});
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  // update equipment by id with data
  const updateEquipment = async function (id, data) {
  try {
    const response = await fetch(`${store.BASE_URL}/equipments/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });
    if (response.ok) {
      console.log((await response.json()).equipment);
    }
  } catch (err) {
    console.log(err.message);
  }
};

  // delete a equipment
  const deleteEquipment = async function (id) {
    try {
      const response = await storeApi.deleteEquipment(id);
      if (response.status === 200) {
        console.log("deleted equipment");
        setStore({ type: "DELETE", context: "equipment", payload: id });
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  //delete a room 
  const deleteRoom = async function (id) {
    try {
      const response = await storeApi.deleteRoom(id);
      if (response.status === 200) {
        console.log("deleted room");
        setStore({ type: "DELETE", context: "room", payload: id })
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  // update department by id with data
  const updateDepartment = async function (id, data) {
    try {
      const response = await storeApi.updateDepartment(id, data);
      if (response.status === 200) {
        console.log(response.data.department);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  // get department by id
  const getDepartment = async function (id) {
    try {
      const response = await storeApi.getDepartment(id);
      if (response.status === 200) {
        setStore({ type: "GET_RESOURCE", context: "department", payload: response.data.department });
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  // get all the patients
  const getAllDepartments = async function () {
    try {
      const response = await fetch(store.BASE_URL + "/departments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({"email": "hello there"})
      });
      const json = await response.json();
      if (response.status === 200) {
        let departments = json.departments;
        let id_to_department = departments.reduce((result, obj) => {
          result[obj._id] = obj.departmentName;
          return result;
        }, {});
        let department_to_id = Object.fromEntries(
          Object.entries(store.id_to_department).map(([key, value]) => [
            value,
            key,
          ])
        );
        setStore({ type: "GET_ALL_DEPARTMENTS", payload: {departments, id_to_department, department_to_id} });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deletePatient = async function (id) {
    try {
      const response = await storeApi.deletePatient(id);
      if (response.status === 200) {
        console.log("deleted Patient");
        setStore({ type: "DELETE", context: "patient", payload: id})
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const deleteUser = async function (id) {
    try {
      const response = await userApi.deleteUser(id);
      if (response.status === 200) {
        console.log("deleted user");
        setStore({ type: "DELETE", context: "user", payload: id })
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        ...store,
        createPatient,
        updatePatient,
        getPatient,
        getAllPatients,
        getAllRooms,
        createRoom,
        getAllEquipments,
        deleteEquipment,
        deleteUser,
        deleteRoom,
        updateDepartment,
        getDepartment,
        getAllDepartments,
        deletePatient,
        getAllUsers,
        getEquipment,
        updateEquipment,
        getRoom,
        updateRoom
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContext;
export { GlobalContextProvider };
