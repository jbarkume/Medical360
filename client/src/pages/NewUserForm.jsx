import React, { useState } from 'react';
import Banner from '../components/Banner';
import FormField from '../components/FormField';

const NewUserForm = () => {
    const [formError, setFormError] = useState(false);

    const fields = [
        { name: 'Name', initialValue: '', editable: true },
        { name: 'Username', initialValue: '', editable: true },
        { name: 'Email', initialValue: '', editable: true },
        { name: 'Password', initialValue: '', editable: true },
        { name: 'Confirm Password', initialValue: '', editable: true },
        { name: 'Department', initialValue: '', editable: true },
        { name: 'Phone Number', initialValue: '', editable: true },
        { 
            name: 'Role', 
            initialValue: '', 
            editable: true, 
            type: 'select', 
            options: ['Admin', 'Doctor', 'Nurse', 'Patient'] 
        },
    ];

    // Function to handle form submission
    const handleSubmit = (formData) => {
        console.log("Form Data Submitted:", formData);

        // Check for empty fields to validate form input
        const isEmptyFieldPresent = Object.values(formData).some(value => value.trim() === '');
        setFormError(isEmptyFieldPresent);
        if (isEmptyFieldPresent) {
            return;
        }
        
    };

    return (
        <>
            <Banner goBackPath={"/all-users"} />
            <div className="flex justify-center">
            <div className='mb-5'>
                <h1 className="text-3xl font-bold text-blue-500">New User</h1>
                </div>
            </div>
            <FormField fields={fields} submit={handleSubmit} buttonName="Create User" />
            {formError && (
                <div className="flex justify-center items-center">
                    <div className="m-2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <strong className="font-bold">Please fill in all fields.</strong>
                    </div>
                </div>
            )}
        </>
    );
};

export default NewUserForm;
