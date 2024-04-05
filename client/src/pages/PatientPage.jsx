import React from "react";
import PatientCard from "../components/PatientCard";
import Banner from "../components/Banner";
const PatientPage = () => {
    return (
        <>
            <Banner goBackPath={"/apppage"} />
            <PatientCard/>
            
        </>
    );
}
export default PatientPage;