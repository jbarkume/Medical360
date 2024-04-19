import React, { useState ,useEffect } from "react";
import DepartmentList from "../components/DepartmentList";
import DepartmentHead from "../components/DepartmentHead";
import Banner from "../components/Banner";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useGlobalContext } from "../hooks/useGlobalContext";

const DepartmentPage = () => {
  const { user } = useAuthContext();
  const { BASE_URL } = useGlobalContext();
  const navigate = useNavigate();
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    localStorage.setItem("lastRoute", "/departmentpage");
    fetchDepartments();
    return () => {
      localStorage.removeItem("lastRoute");
    }
  }, []);

  const fetchDepartments = async () => {
    const response = await fetch(`${BASE_URL}/departments/alldepartments`);
    const data = await response.json();
    setDepartments(data);
  };

  const deleteDepartment = async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/departments/${id}`, {
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
          {user.isAdmin && (
            <button onClick={() => navigate("/department-form")} className="p-2 bg-blue-500 text-white rounded-md mb-5">
              Create Department
            </button>
          )}
        </div>
        <DepartmentList departments={departments} onDelete={deleteDepartment} isAdmin={user.isAdmin} />
      </div>
      <DepartmentHead />
    </>
  );
};
export default DepartmentPage;
