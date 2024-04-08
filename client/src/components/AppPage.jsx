import React from "react";
import Sidebar from "./Sidebar";
import doctorImageone from "../images/doctor2.jpeg";
import doctorImagetwo from "../images/doctor3.jpeg";
import doctorImagethree from "../images/doctor1.avif";
const AppPage = () => {
  const gradient =
    "linear-gradient(to right, #B3E3F8, #A5CDF6, #96B5F4, #849AF1, #6F79EE, #5552EB, #5552EB, #5552EB)";
  return (
    /*banner component */
    <div className="flex-grow">
      <div
        className="h-[239px] w-full flex items-center justify-center"
        style={{ background: gradient }}
      >
        <h1 className="text-white text-4xl font-bold">
          Stony Brook Medical360
        </h1>
      </div>
      <div className="flex">
        {/* Sidebar component */}
        <Sidebar />

        {/* Main content */}
        <div className="w-3/4 p-10">
          <div className="grid grid-cols-2 gap-4">
            {/* First column */}
            <div className="flex flex-col gap-4">
              {/* First Image */}
              <div className="rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img src={doctorImageone} alt="Doctor 1" />
              </div>
              {/* Second Image */}
              <div className="rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img src={doctorImagetwo} alt="Doctor 2" />
              </div>
            </div>

            {/* Second column */}
            <div className="flex flex-col gap-4">
              {/* Third Image */}
              <div className="rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src={doctorImagethree}
                  alt="Doctor 3"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppPage;
