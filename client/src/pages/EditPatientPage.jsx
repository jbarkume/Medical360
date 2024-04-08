import React from 'react';
import FormField from '../components/FormField';
import Banner from '../components/Banner';

const EditPatientPage = () => {
    const fields = [
        { name: 'Name', initialValue: '', editable: true, showEditIcon: true },
        { name: 'Age', initialValue: '', editable: true, showEditIcon: true },
        { name: 'Checked In Date', initialValue: '', editable: true, showEditIcon: true },
        { name: 'Room', initialValue: '', editable: true, showEditIcon: true },
        { name: 'Doctor', initialValue: '', editable: true, showEditIcon: true },
        { name: 'Department', initialValue: '', editable: true, showEditIcon: true },
        { name: 'Reason of Visit', initialValue: '', editable: true, showEditIcon: true },
        { name: 'Status', initialValue: '', editable: true, showEditIcon: true }
    ];

    // Function to handle form submission
    const handleSubmit = (formData) => {
        // Such as updating the patient data or sending it to a server
        console.log('Updated Patient Data:', formData);
    };

    return (
        <>
            <Banner goBackPath={"/all-patients"} />
            <div className="flex justify-center">
                <div className='mb-5'>
                <h1 className="text-3xl font-bold text-blue-500">Edit Patient</h1>
                </div>
            </div>
            <FormField
                fields={fields}
                submit={handleSubmit}
                buttonName="Save"
            />
        </>
    );
};

export default EditPatientPage;
