import React from "react";
import {Link} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="w-1/4 bg-[#409BEF] min-h-screen p-5 text-white block text-center text-3xl font-bold">
      <ul className="space-y-24">
      <li><Link to="/" className="hover:underline">Home</Link></li>
        <li>Departments</li>
        <li>Employees</li>
        <li>Patients</li>
        <li>Resources</li>
        <li>Report Bug</li>
      </ul>
    </div>
  );
};

export default Sidebar;
