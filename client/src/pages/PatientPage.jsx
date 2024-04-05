import React from "react";
import PatientCard from "../components/PatientCard";
import Banner from "../components/Banner";
const PatientPage = () => {
    return (
        <>
            <Banner goBackPath={"/"} />
            <PatientCard/>
            
        </>
    );
}
export default PatientPage;