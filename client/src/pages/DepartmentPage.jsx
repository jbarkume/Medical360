import React, { useContext, useState ,useEffect } from "react";
import DepartmentList from "../components/DepartmentList";
import AuthContext from "../auth/AuthContext";
import emergency from "../images/emergencybutton.png";
import pediatric from "../images/pediatric.jpeg";
import obstetrics from "../images/obstetrics.png";
import cardiology from "../images/cardiology.jpeg";
import neurology from "../images/neurology.png";
import psychiatry from "../images/Psychiatry.jpeg";
import DepartmentHead from "../components/DepartmentHead";
import DepartmentForm from "./DepartmentForm";
import Banner from "../components/Banner";
import { useNavigate } from "react-router-dom";

const DepartmentPage = () => {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    const response = await fetch('http://localhost:3000/departments/alldepartments');
    const data = await response.json();
    setDepartments(data);
  };

  const deleteDepartment = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/departments/${id}`, {
            method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete the department.');
      }
      fetchDepartments();  
    } catch (error) {
      console.error('Error deleting department:', error);
    }
  };
  return (
    <>
      <Banner goBackPath="/apppage" />
      <div className="my-8">
        <div className="flex items-center justify-center">
          <h2 className="text-2xl font-bold text-center flex-1">
            Departments List
          </h2>
          {auth.isAdmin && (
            <button onClick={() => navigate("/department-form")} className="p-2 bg-blue-500 text-white rounded-md">
              Create Department
            </button>
          )}
        </div>
        <DepartmentList departments={departments} onDelete={deleteDepartment} isAdmin={auth.isAdmin} />
      </div>
      <DepartmentHead />
    </>
  );
};
export default DepartmentPage;
