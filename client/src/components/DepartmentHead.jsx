import React from "react";
import StaffCard from "./StaffCard";
import doctorImageone from '../images/doctor1.avif';
import doctorImagetwo from '../images/doctor2.jpeg';

const DepartmentHead = () => {

    const departmentHead = [
        {
          image: doctorImageone,
          name: "Dr. Alexander Bennett, Ph.D.",
          role: "Dermato-Genetics",
          bio: "Specialist in genetic skin conditions and dermatological research.",
        },
        {
          image: doctorImagetwo, 
          name: "Dr. Olivia Turner, M.D.",
          role: "Dermato-Endocrinology",
          bio: "Expert in hormonal skin disorders and systemic treatment approaches.",
          status: "On Leave",
        },
      ];
  const gradient = "linear-gradient(to right, #B3E3F8, #A5CDF6, #96B5F4, #849AF1, #6F79EE, #5552EB, #5552EB, #5552EB)";

  return (
    <div className="flex flex-col items-center justify-center" style={{ background: gradient }}>
      <div className="flex overflow-y-auto space-x-2 py-2 pl-1" style={{ height: '380px' }}> 
  {departmentHead.map((head, index) => (
    <div key={index} className="p-4"> 
      <StaffCard staff={head} />
    </div>
  ))}
</div>

          
      </div>
    
  );
};

export default DepartmentHead;
