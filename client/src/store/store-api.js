import axios from "axios";

// const BASE_URL = "https://medical360-d65d823d7d75.herokuapp.com/auth";
const BASE_URL = "https://medical360-d65d823d7d75.herokuapp.com";

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // Enable credentials
});

export const getPatient = (id) => {
  return api.get(`/patients/${id}`);
};

export const getAllPatients = () => api.get("/patients/");

export const updatePatient = (id, newData) =>
  api.put(`/patients/${id}`, newData);

export const createPatient = (patientData) =>
  api.post("/patients/", patientData);

export const deletePatient = (id) => api.delete(`/patients/${id}`);

export const getAllDepartments = () => api.get("/departments/");

export const getAllEquipments = () => api.get("/equipments/");

export const updateEquipment = (id, newData) =>
  api.put(`/equipments/${id}`, newData);

export const getEquipment = (id) => api.get(`/equipments/${id}`);

export const deleteEquipment = (id) => api.delete(`/equipments/${id}`);

export const getAllRooms = () => api.get("/rooms/");

export const createRoom = (roomData) => api.post("/rooms/", roomData);

export const updateRoom = (id, newData) => api.put(`/rooms/${id}`, newData);

export const getRoom = (id) => api.get(`/rooms/${id}`);

export const deleteRoom = (id) => api.delete(`/rooms/${id}`);

export const getDepartment = (id) => api.get(`/departments/${id}`);

export const updateDepartment = (id, newData) =>
  api.put(`/departments/${id}`, newData);

export default {
  getPatient,
  getAllPatients,
  updatePatient,
  createPatient,
  getAllDepartments,
  getDepartment,
  updateDepartment,
  deletePatient,
  getAllEquipments,
  deleteEquipment,
  updateEquipment,
  getEquipment,
  getAllRooms,
  createRoom,
  deleteRoom,
  updateRoom,
  getRoom,
};
