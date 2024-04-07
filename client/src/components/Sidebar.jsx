import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../auth/AuthContext";
const Sidebar = () => {
  const { auth } = useContext(AuthContext);

  return (
    <div className="flex-shrink-0 w-64 bg-[#409BEF]  p-5 text-white block text-center text-xl font-bold md:text-2xl lg:text-3xl mt-20">
      <ul className="space-y-5 md:space-y-12 lg:space-y-23">
        <li>
          <Link to="/apppage" className="hover:underline">
            Home
          </Link>
        </li>
        {auth.isAdmin && (
          <li>
            <Link to="/departmentpage" className="hover:underline">
              Departments
            </Link>
          </li>
        )}
         {auth.isAdmin && (
          <li>
            <Link to="/departmentratio" className="hover:underline">
              Department Ratio 
            </Link>
          </li>
        )}
        {auth.isAdmin && (
          <li>
            <Link to="/resource-management" className="hover:underline">
              Resource and User Management
            </Link>
          </li>
        )}
        <li>
          <Link to="/chat" className="hover:underline">
            Chat
          </Link>
        </li>
        <li>
          <Link to="/bugs" className="hover:underline">
            Report Bug
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
