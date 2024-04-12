import React, { useContext, useEffect, useState } from 'react';
import FormField from '../components/FormField';
import Banner from '../components/Banner';
import GlobalContext from '../store/GlobalContext';
import { useNavigate } from 'react-router-dom';

const EditPatientPage = () => {

    const { store } = useContext(GlobalContext);
    const navigate = useNavigate();


    const fieldsToAvoid = ["_id", "medicalHistory", "__v"];

    // Function to handle form submission
    const handleSubmit = (formData) => {
        // Such as updating the patient data or sending it to a server
        formData["department"] = store.department_to_id[formData["department"]]
        store.updatePatient(store.currentPatient._id, formData).then(() => {
            navigate("/all-patients");
        });
    };

    return (
        <>
            <Banner goBackPath={"/all-patients"} />
            <div className="flex justify-center">
                <div className='mb-5'>
                <h1 className="text-3xl font-bold text-blue-500">Edit Patient</h1>
                </div>
            </div>
            {store.currentPatient && <FormField
                fields={Object.keys(store.currentPatient)
                    .filter(key => {
                        if (!fieldsToAvoid.includes(key))
                            return true;
                    })
                    .map(key => {
                        let obj = {
                            name: key,
                            initialValue: store.currentPatient[key],
                            editable: true,
                            showEditIcon: true
                        };
                        if (key == "department") {
                            obj["options"] = Object.keys(store.department_to_id);
                            obj["type"] = "select";
                            obj["initialValue"] = store.id_to_department[obj["initialValue"]]
                        }
                        return obj
                })}
                submit={handleSubmit}
                buttonName="Save"
            />}
        </>
    );
};

export default EditPatientPage;
