import React, { useContext } from "react";
import Banner from "../components/Banner";
import Table from "../components/Table";
import SearchBar from "../components/SearchBar"; // Optional, based on your UI design
import { Link } from "react-router-dom";
import AuthContext from "../auth/AuthContext";

const AllUsersPage = () => {
  const { auth } = useContext(AuthContext);

  // Expanded user data with additional fields
  const userData = [
    {
      name: "John Doe",
      username: "johndoe",
      email: "john.doe@stonybrook.edu",
      department: "Dermato-Genetics",
      phone: "111-234-5678",
      role: "Admin",
      password: "medical123",
      confirmPassword: "medical123",
    },
    {
      name: "Jane Smith",
      username: "janesmith",
      email: "jane.smith@stonybrook.edu",
      department: "Molecular Biology",
      phone: "222-345-6789",
      role: "Doctor",
      password: "pwd123",
      confirmPassword: "pwd123",
    },
    {
      name: "Michael Johnson",
      username: "michaeljohnson",
      email: "michael.johnson@stonybrook.edu",
      department: "Computational Biology",
      phone: "333-456-7890",
      role: "Nurse",
      password: "test123",
      confirmPassword: "test123",
    },
    {
      name: "Emily Davis",
      username: "emilydavis",
      email: "emily.davis@stonybrook.edu",
      department: "Neurogenetics",
      phone: "444-567-8901",
      role: "Patient",
      password: "abc123",
      confirmPassword: "abc123",
    },
    // Add more user data as necessary
  ];
  return (
    <>
      <Banner goBackPath="/resource-management" />
      <div className="flex justify-center my-4">
        <h1 className="text-3xl font-bold text-blue-500">All Users</h1>
      </div>
      <div className="flex justify-between items-center mx-8 mb-4">
        <SearchBar /> {/* Optional */}
        {auth.isAdmin && (
          <Link
            to={"/new-user"}
            className="bg-[#2260FF] text-white px-2 py-1 rounded-md font-medium text-xl"
          >
            New User
          </Link>
        )}
      </div>
      <div className="p-8">
        <Table cards={userData} isAdmin={auth.isAdmin} context={"user"} />
      </div>
    </>
  );
};

export default AllUsersPage;
