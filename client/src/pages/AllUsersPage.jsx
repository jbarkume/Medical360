import React, { useContext, useEffect, useState } from "react";
import Banner from "../components/Banner";
import Table from "../components/Table";
import SearchBar from "../components/SearchBar";
import { useAuthContext } from "../hooks/useAuthContext";
import { useGlobalContext } from "../hooks/useGlobalContext";

const AllUsersPage = () => {
  const { user } = useAuthContext();
  const { getAllDepartments, getAllUsers, users } = useGlobalContext();

  useEffect(() => {
    localStorage.setItem("lastRoute", "/all-users");
    console.log(users)
    const fetchUsers = async () => {
      if (user && !users) {
        await getAllDepartments();
        await getAllUsers();
      }
    };
    fetchUsers();

    return () => {
      localStorage.removeItem("lastRoute")
    }
  }, [user, users]); // Re-fetch when auth.token changes

  return (
    <>
      <Banner goBackPath="/resource-management" />
      <div className="flex justify-center my-4">
        <h1 className="text-3xl font-bold text-blue-500">All Users</h1>
      </div>
      <div className="flex justify-between items-center mx-8 mb-4">
        <SearchBar />
      </div>
      <div className="p-8">
        {users && (
          <Table cards={users} isAdmin={user && user.isAdmin} context="user" />
        )}
        {!users && (
          <p>No user data available.</p>
        )}
      </div>
    </>
  );
};

export default AllUsersPage;
