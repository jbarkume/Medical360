import React, { createContext, useEffect, useState } from "react";
import storeApi from "./store-api";
import userApi from "../auth/user-api";

const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
  const [store, setStore] = useState({
    doctors: [],
    patients: [],
    departments: [],
    rooms: [],
    equipments: [],
    id_to_department: {},
    department_to_id: {},
    id_to_equipment: {},
    equipment_to_id: {},
    currentPatient: null,
    currentDepartment: null,
    currentEquipment: null,
    currentRoom: null,
  });
  const [lastUpdated, setLastUpdated] = useState(Date.now());
  // create patient with given data
  store.createPatient = async function (data) {
    // get whether user is logged in or not
    try {
      const response = await storeApi.createPatient(data);
      if (response.status === 200) console.log("patient created");
    } catch (err) {
      console.log(err.message);
    }
  };

  // update patient by id with data
  store.updatePatient = async function (id, data) {
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
  store.getPatient = async function (id) {
    try {
      const response = await storeApi.getPatient(id);
      if (response.status === 200) {
        setStore({
          ...store,
          currentPatient: response.data.patient,
        });
      }
    } catch (err) {
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
        currentPatient: null,
      });
    }
  };

  // get all the rooms
  store.getAllRooms = async function () {
    try {
      const response = await storeApi.getAllRooms();
      if (response.status === 200) {
        if (
          !store.id_to_equipment ||
          Object.keys(store.id_to_equipment).length === 0
        ) {
          await store.getAllEquipments(); 
        }

        // Add equipment names to each room
        const roomsWithEquipmentNames = response.data.map((room) => ({
          ...room,
          equipmentNames: room.equipment.map(
            (equipId) => store.id_to_equipment[equipId] || "Unknown Equipment"
          ),
        }));

        setStore((prevStore) => ({
          ...prevStore,
          rooms: roomsWithEquipmentNames,
          currentRoom: null,
        }));

      }

    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  };

  // create room with given data
  store.createRoom = async function (data) {
    // get whether user is logged in or not
    try {
      const response = await storeApi.createRoom(data);
      if (response.status === 201) 
      {

      setStore(prevStore => ({
        ...prevStore,
        rooms: [...prevStore.rooms, {...response.data}],  // Add the new room to the existing rooms array
    }));
    
    setLastUpdated(Date.now()); 
       return response;
    }
    } catch (err) {
      console.log(err.message);
    }
  };

  // get all the rooms
  store.getAllEquipments = async function () {
    const response = await storeApi.getAllEquipments();

    if (response.status === 200) {
      const equipmentMapping = response.data.reduce((acc, equipment) => {
        acc[equipment._id] = equipment.equipmentName; // Store only the equipment name
        return acc;
      }, {});
      setStore({
        ...store,
        equipments: response.data,
        currentEquipment: null,
        id_to_equipment: equipmentMapping,
      });
    }
    return response;
  };

  // Inside GlobalContextProvider

// Method to add equipment to the global store
 store.addEquipment = function (newEquipment) {
  setStore(prevStore => ({
    ...prevStore,
    equipments: [...prevStore.equipments, newEquipment]
  }));
};


  // delete a equipment
  store.deleteEquipment = async function (id) {
    try {
      const response = await storeApi.deleteEquipment(id);
      if (response.status === 200) {
        console.log("deleted equipment");
        setStore(prevStore => ({
          ...prevStore,
          equipments: prevStore.equipments.filter(equip => equip._id !== id),
          lastUpdated: Date.now()  // Update lastUpdated to current timestamp
        }));
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  //delete a room 
  store.deleteRoom = async function (id) {
    try {
      const response = await storeApi.deleteRoom(id);
      if (response.status === 200) {
        console.log("deleted room");
        // setStore({
        //   ...store,
        //   currentRoom: null,
        // });
        setStore(prevStore => ({
          ...prevStore,
          rooms: prevStore.rooms.filter(room => room._id !== id)
      }));
      setLastUpdated(Date.now()); 
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  // update department by id with data
  store.updateDepartment = async function (id, data) {
    try {
      const response = await storeApi.updateDepartment(id, data);
      if (response.status === 200) {
        console.log(response.data.department);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  // get patient by id
  store.getDepartment = async function (id) {
    try {
      const response = await storeApi.getDepartment(id);
      if (response.status === 200) {
        setStore({
          ...store,
          currentDepartment: response.data.department,
        });
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  // get all the patients
  store.getAllDepartments = async function () {
    try {
      const response = await storeApi.getAllDepartments();
      if (response.status === 200) {
        let departments = response.data.departments;
        store.id_to_department = departments.reduce((result, obj) => {
          result[obj._id] = obj.departmentName;
          return result;
        }, {});
        store.department_to_id = Object.fromEntries(
          Object.entries(store.id_to_department).map(([key, value]) => [
            value,
            key,
          ])
        );
        setStore({
          ...store,
          departments,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  store.deletePatient = async function (id) {
    try {
      const response = await storeApi.deletePatient(id);
      if (response.status === 200) {
        console.log("deleted Patient");
        setStore({
          ...store,
          currentPatient: null,
        });
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  store.deleteUser = async function (id) {
    try {
      const response = await userApi.deleteUser(id);
      if (response.status === 200) {
        console.log("deleted user");
        setStore({
          ...store,
          currentPatient: null,
        });
      }
    } catch (err) {
      console.log(err.message);
    }
  };

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
