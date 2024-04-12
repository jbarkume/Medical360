import React, { useState } from 'react';
import Banner from '../components/Banner';
import FormField from '../components/FormField';
import AuthContext from '../auth/AuthContext';
import { useContext } from 'react';
import axios from 'axios';

const NewPatientPage = () => {
    const [formError, setFormError] = useState(false);

    // Define the fields for the equipment form
    const fields = [
        { name: 'patientName', initialValue: '', editable: true },
        { name: 'email', initialValue: '', editable: true },
        { name: 'phoneNumber', initialValue: '', editable: true },
        { name: 'healthInsurance', initialValue: '', editable: true },
        
        { name: 'sex', initialValue: '', editable: true, options: ['male', 'female', 'other'] }, 
        { name: 'age', initialValue: '', editable: true },
        
        // { name: 'department', initialValue: '', editable: true }, 
        { name: 'patientStatus', initialValue: '', editable: true, options: ['admitted', 'discharged', 'under observation'] }, 
        { name: 'roomNo', initialValue: '', editable: true },
        
    ];

    // Function to handle form submission
    const handleSubmit = (formData) => {
        // such as sending the new equipment data to a server
        console.log('New Patient Data:', formData);
        
        axios.post('http://localhost:3000/patients', formData)
        .then(response => {
            console.log('Patient created:', response.data);
            
        })
        .catch(error => {
            console.error('There was an error creating the patient:', error);
            setFormError(true); // Show error message on UI
        });
        // Example of setting error state if form submission fails
        // setFormError(true);
        
       
    };

    return (
        <>
            <Banner goBackPath={"/all-patients"} />
            <div className="flex justify-center">
                <div className="text-blue-500 p-4 m-4 rounded-lg text-3xl">
                    New Patient Form
                </div>
            </div>
            <FormField fields={fields} submit={handleSubmit} buttonName={"Create New Patient"} />
            {formError && (
                <div className="flex justify-center items-center">
                    <div className="m-2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <strong className="font-bold">Error submitting form. Please try again.</strong>
                    </div>
                </div>
            )}
        </>
    );
};

export default NewPatientPage;
