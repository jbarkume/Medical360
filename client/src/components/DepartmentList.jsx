import React from "react";

const DepartmentList = ({ departments }) => {
  const gradient = "linear-gradient(to right, #B3E3F8, #A5CDF6, #96B5F4, #849AF1, #6F79EE, #5552EB, #5552EB, #5552EB)";

  return (
    <div className="flex flex-col items-center justify-center" style={{ background: gradient }}>
      <div className="flex overflow-x-auto space-x-4 py-8 pl-1" style={{ height: '300px' }}> 
        {departments.map((department, index) => (
          <div key={index} className="flex-none w-48 h-50 rounded-lg shadow bg-white p-4 flex flex-col items-center justify-center"> {/* Adjusted width and height */}
            <img src={department.icon} alt={department.name} className="rounded-full w-25 h-21" /> 
            <p className="mt-2 text-center">{department.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentList;
