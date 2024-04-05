import React from "react";
import {Link} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="w-1/4 bg-[#409BEF] min-h-screen p-5 text-white block text-center text-3xl font-bold">
      <ul className="space-y-24">
      <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/departmentpage" className="hover:underline">Departments</Link></li>
        <li><Link to="/all-staff" className="hover:underline">Employees</Link></li>
        <li><Link to="/patientpage" className="hover:underline">Patients</Link></li>
        <li>Resources</li>
        <li><Link to="/bug-report" className="hover:underline">Report Bug</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
