import React from 'react';
import FormField from '../components/FormField';
import Banner from '../components/Banner';

const EditUserPage = () => {
    // Example initial values could be loaded from a user's data
    // For demonstration purposes, these are hardcoded
    const fields = [
        { name: 'Name', initialValue: 'John Doe', editable: true, showEditIcon: true },
        { name: 'Email', initialValue: 'john.doe@stonybrook.edu', editable: true, showEditIcon: true },
        { name: 'Department', initialValue: 'Dermato-Genetics', editable: true, showEditIcon: true },
        { name: 'Phone Number', initialValue: '111-234-5678', editable: true, showEditIcon: true },
        { 
            name: 'Role', 
            initialValue: 'Admin', 
            editable: true,
            showEditIcon: true, 
            type: 'select', 
            options: ['Admin', 'Doctor', 'Nurse', 'Patient'] 
        },
        // Password is intentionally omitted from the editable fields
    ];

    // Function to handle form submission
    const handleSubmit = (formData) => {
        // Logic for updating user data or sending it to a server
        console.log('Updated User Data:', formData);
    };

    return (
        <>
            <Banner goBackPath={"/all-users"} /> {/* Adjust the goBackPath as needed */}
            <div className="flex justify-center">
                <div className='mb-5'>
                    <h1 className="text-3xl font-bold text-blue-500">Edit User</h1>
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

export default EditUserPage;
