import React from "react";
import emergency from "../images/emergencybutton.png";
import pediatric from "../images/pediatric.jpeg";
import obstetrics from "../images/obstetrics.png";
import cardiology from "../images/cardiology.jpeg";
import neurology from "../images/neurology.png";
import psychiatry from "../images/Psychiatry.jpeg";
import Banner from "../components/Banner";
const DepartmentRatioPage = () => {
  const departments = [
    {
      name: "Emergency Department",
      icon: emergency,
      status:"check",
    },
    {
      name: "Pediatric Department",
      icon: pediatric,
      status:"alert",
    },
    {
      name: "Obstetrics and Gynecology Department",
      icon: obstetrics,
      status:"check",
    },
    {
      name: "Cardiology Department",
      icon: cardiology,
      status:"alert",
    },
    {
      name: "Neurology Department",
      icon: neurology,
      status:"check",
    },
    {
      name: "Psychiatry Department",
      icon: psychiatry,
      status:"check",
    },

];

  const gradient = "linear-gradient(to right, #B3E3F8, #A5CDF6, #96B5F4, #849AF1, #6F79EE, #5552EB, #5552EB, #5552EB)";
  return (
    <div className="min-h-screen" style={{ background: gradient }}>
      <Banner goBackPath="/apppage" /> {/* Include Banner at the top */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl text-white font-bold mb-8">Department Ratio</h1>
        <div className="grid grid-cols-4 gap-6 py-8 px-1" style={{ width: 'auto', maxWidth: '90%' }}>
          {departments.map((department, index) => (
            <div key={index} className="flex-none w-48 h-auto rounded-xl shadow-lg bg-white p-4 flex flex-col items-center justify-center">
              <img src={department.icon} alt={department.name} className="rounded-full w-20 h-20 mb-4" />
              <p className="text-center text-md">{department.name}</p>
              {department.status === 'alert' ? (
                <span role="img" aria-label="alert" className="text-red-500 text-3xl">⚠️</span>
              ) : (
                <span role="img" aria-label="checkmark" className="text-green-500 text-xl">✅</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
};

export default DepartmentRatioPage;
