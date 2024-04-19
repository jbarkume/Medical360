import React, { useContext } from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

//doctor should be an object
const DoctorInfo = (
  {
    /*doctor*/
  }
) => {
  const doctor = {
    name: "Dr. Olivia Turner, M.D.",
    department: "Dermato-Endocrinology",
    experience: "20 years",
    focus:
      "The impact of hormonal imbalances on skin conditions, specializing in acne, hirsutism, and other skin disorders.",
    schedule: "Mon - Sat / 9 AM - 4 PM",
    profile:
      "Dr. Doe completed her medical degree at Stony Brook University, renowned for its rigorous medical program and emphasis on patient-centered care. She further specialized in dermatology during her residency at Yale University, where she excelled in both medical and surgical dermatology, with a particular focus on pediatric dermatology, cosmetic procedures",
    
  };
  return (
    <>
      <Banner goBackPath={"/all-doctors"} />
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="bg-[#CAD6FF] p-8 rounded-lg shadow-lg max-w-5xl w-full min-h-[600px]">
          {/* Row 1: Image and Details */}
          <div className="flex -mx-4 items-start">
            <div
              className="flex-none rounded-full overflow-hidden border-4 border-white shadow-lg"
              style={{ width: "200px", height: "200px" }}
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 px-4 space-y-4">
              <div className="bg-[#2260FF] text-white p-4 rounded-lg">
                <h3 className="font-semibold text-md">Experience</h3>
                <p>{doctor.experience}</p>
              </div>

              <div className="bg-[#2260FF] text-white p-4 rounded-lg">
                <h3 className="font-semibold text-md">Focus</h3>
                <p>{doctor.focus}</p>
              </div>
            </div>
          </div>

          {/* Row 2: Name and Department */}
          <div className="flex justify-center items-center bg-white p-4 rounded-lg mt-4">
            <div>
              <h2 className="text-xl font-semibold text-center text-[#2260FF]">
                {doctor.name}
              </h2>
              <p className="text-center ">{doctor.department}</p>
            </div>
          </div>

          {/* Row 3: Schedule */}
          <div className="flex flex-col justify-center items-center bg-white p-4 rounded-lg mt-4">
            <div className="flex items-center space-x-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-6 h-6"
                stroke="#2260FF"
                strokeWidth="2"
              >
                <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
              </svg>
              <h3 className="text-lg text-[#2260FF]">Schedule</h3>
            </div>
            <p className="text-center w-full">{doctor.schedule}</p>
          </div>

          {/* Row 4: Profile */}
          <div className="bg-white p-4 rounded-lg mt-4">
            <h3 className="text-[#2260FF] font-semibold text-lg">Profile</h3>
            <p className="text-gray-600">{doctor.profile}</p>
          </div>

          {/* Row 5: Schedule Button */}
          <div className="flex justify-center mt-4">
            <Link
              to="/book-appointment"
              className="bg-[#2260FF] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800"
            >
              Schedule
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorInfo;
