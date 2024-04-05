import React from 'react'
import { useState } from 'react';
import Banner from '../components/Banner';
import FormField from '../components/FormField';
import AuthContext from '../auth/AuthContext';
import { useContext } from 'react';

function NewUserForm() {
  //maybe some changes over here
    const fields = ["Name", "Email", "Password", "Department", "Phone Number", "Admin", "Doctor"];
    const [wrong, setWrong] = useState(false)
    const { auth } = useContext(AuthContext);

    const handleSubmit = (formData) => {
        console.log("Creating New User...");
        let flag = false
        fields.forEach(field => {
            if (!formData[field]) {
                flag = true
                return;
            }
        })
        setWrong(flag)
        if (flag)
            return
        
        let user = {
            name: formData["Name"],
            email: formData["Email"],
            password: formData["Password"], 
            department: formData["Department"], 
            phone_number: formData["Phone Number"],
            isAdmin: formData["Admin"].toLowerCase() === "true",
            isDoctor: formData["Doctor"].toLowerCase() === "true"
        }
        // create user
        auth.register(user);
    }

    return (
        <>
            <Banner goBackPath={"/"}></Banner>
            <div className="flex justify-center">
                <div className="text-blue-500 p-4 m-4 rounded-lg text-3xl">
                    New User Form
                </div>
            </div>
            <FormField fields={fields} submit={handleSubmit} buttonName={"Create New User"}></FormField>
            {wrong && 
                <div className="flex justify-center items-center">
                    <div className="m-2 h-screenbg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <strong className="font-bold">Please Enter All Fields</strong>
                    </div>
                </div>
            }
        </>
    )
}

export default NewUserForm