import FormField from '../components/FormField';
import Banner from '../components/Banner';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../hooks/useGlobalContext';
import { useEffect, useState } from 'react';

const EditPatientPage = () => {

    const { department_to_id, currentPatient, updatePatient, id_to_department } = useGlobalContext();
    const navigate = useNavigate();
    const [patient, setPatient] = useState(currentPatient);

    useEffect(() => {
        if (currentPatient) {
            setPatient(currentPatient);
        }
    }, [currentPatient]);


    const fieldsToAvoid = ["_id", "medicalHistory", "__v"];

    // Function to handle form submission
    const handleSubmit = (formData) => {
        // Such as updating the patient data or sending it to a server
        formData["department"] = department_to_id[formData["department"]]
        updatePatient(patient._id, formData).then(() => {
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
            {patient && <FormField
                fields={Object.keys(patient)
                    .filter(key => {
                        if (!fieldsToAvoid.includes(key))
                            return true;
                    })
                    .map(key => {
                        let obj = {
                            name: key,
                            initialValue: patient[key],
                            editable: true,
                            showEditIcon: true
                        };
                        if (key == "department") {
                            obj["options"] = Object.keys(department_to_id);
                            obj["type"] = "select";
                            obj["initialValue"] = id_to_department[obj["initialValue"]]
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
