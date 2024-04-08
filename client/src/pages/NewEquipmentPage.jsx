import React, { useState } from 'react';
import Banner from '../components/Banner';
import FormField from '../components/FormField';
import AuthContext from '../auth/AuthContext';
import { useContext } from 'react';

const NewEquipmentPage = () => {
    const [formError, setFormError] = useState(false);

    // Define the fields for the equipment form
    const fields = [
        { name: 'Name', initialValue: '', editable: true  },
        { name: 'Type', initialValue: '', editable: true },
        { name: 'Quantity', initialValue: '', editable: true },
        { name: 'Location', initialValue: '', editable: true },
        { 
            name: 'Maintenance Status', 
            initialValue: '', 
            editable: true, 
            type: 'select', 
            options: ['Operational', 'Maintenance Required'] 
        },
    ];

    // Function to handle form submission
    const handleSubmit = (formData) => {
        // such as sending the new equipment data to a server
        console.log('New Equipment Data:', formData);
        
        // Example of setting error state if form submission fails
        // setFormError(true);
        
       
    };

    return (
        <>
            <Banner goBackPath={"/all-equipments"} />
            <div className="flex justify-center">
                <div className="text-blue-500 p-4 m-4 rounded-lg text-3xl">
                    New Equipment Form
                </div>
            </div>
            <FormField fields={fields} submit={handleSubmit} buttonName={"Create Equipment"} />
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

export default NewEquipmentPage;
