import React from "react";
import Banner from "../components/Banner";
import UserApprovalTable from "../components/UserApprovalTable";

const UserApprovalPage = () => {
  const userData = [
    {
      name: "John Doe",
      username: "johndoe",
      email: "john.doe@example.com",
      department: "Dermato-Genetics",
      phone: "111-234-5678",
      role: "Admin",
    },
    {
      name: "Jane Smith",
      username: "janesmith",
      email: "jane.smith@example.com",
      department: "Molecular Biology",
      phone: "222-345-6789",
      role: "Doctor",
    },
    {
      name: "Michael Johnson",
      username: "michaeljohnson",
      email: "michael.johnson@example.com",
      department: "Computational Biology",
      phone: "333-456-7890",
      role: "Nurse",
    },
    {
      name: "Emily Davis",
      username: "emilydavis",
      email: "emily.davis@example.com",
      department: "Neurogenetics",
      phone: "444-567-8901",
      role: "Patient",
    },
    {
      name: "Lucas Morgan",
      username: "lucasmorgan",
      email: "lucas.morgan@example.com",
      department: "Cardiology",
      phone: "555-678-9012",
      role: "Admin",
    },
    {
      name: "Olivia Brown",
      username: "oliviabrown",
      email: "olivia.brown@example.com",
      department: "Immunology",
      phone: "666-789-0123",
      role: "Doctor",
    },
  ];

  return (
    <>
      <Banner goBackPath="/resource-management" />
      <div className="flex justify-center my-4">
        <div className="text-blue-500 p-4 rounded-lg text-3xl">
          User Approvals
        </div>
      </div>
      <UserApprovalTable cards={userData} />
    </>
  );
};

export default UserApprovalPage;
