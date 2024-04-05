import React from "react";
import TopBanner from "../components/TopBanner";
import DepartmentList from "../components/DepartmentList";
import emergency from "../components/emergencybutton.png";
import pediatric from "../components/pediatric.jpeg";
import obstetrics from "../components/obstetrics.png";
import cardiology from "../components/cardiology.jpeg";
import neurology from "../components/neurology.png";
import psychiatry from "../components/Psychiatry.jpeg"



const DepartmentPage = () => {
    const departments = [
        {
          name: "Emergency Department",
          icon: emergency 
        },
        {
          name: "Pediatric Department",
          icon: pediatric 
        },
        {
          name: "Obstetrics and Gynecology Department",
          icon: obstetrics
        },
        {
          name: "Cardiology Department",
          icon: cardiology
        },
        {
          name: "Neurology Department",
          icon: neurology
        },
        {
          name: "Psychiatry Department",
          icon: psychiatry
        },
        // Add more departments
    ];
    return (
      <>
        <div className="my-8">
        <h2 className="text-center text-2xl font-bold mb-4">Departments List</h2>
        <DepartmentList departments={departments} />
      </div>
        
        
      </>
    );
  };
export default DepartmentPage;