import React, { useState, useContext,useEffect } from 'react';
import Banner from '../components/Banner';
import FormField from '../components/FormField';
import GlobalContext from '../store/GlobalContext';
import { useNavigate } from 'react-router-dom';

const NewRoomPage = () => {
    const [formError, setFormError] = useState(false);
    const navigate = useNavigate();
    const { store } = useContext(GlobalContext);
    const [equipmentOptions, setEquipmentOptions] = useState([]);

    useEffect(() => {
        const fetchEquipment = async () => {
            try {
                const response = await store.getAllEquipments();
            if (response.status === 200) {
                const operationalEquipments = response.data
                    .filter(equip => equip.quantity > 0 && equip.maintenanceStatus === "Operational")
                    .map(equip => ({
                        label:`${equip.equipmentName} (${equip.location})`,
                        value: equip._id
                    }));
                    setEquipmentOptions(operationalEquipments);
                }
                
            } catch (error) {
                console.error("Error fetching equipment:", error);
            }
        };

        fetchEquipment();
    }, []);

    const fields = [
        { name: 'roomNumber', label: 'Room Number', initialValue: '', editable: true },
        { name: 'roomType', label: 'Room Type', initialValue: '', editable: true },
        { 
            name: 'equipment', 
            label: 'Equipment', 
            initialValue: [], 
            editable: true, 
            type: 'multi-select',
            options: equipmentOptions
        },
        { 
            name: 'availabilityStatus', 
            label: 'Availability Status', 
            initialValue: '', 
            editable: true, 
            type: 'select', 
            options: ['Occupied', 'Available'] 
        }
    ];

    const handleSubmit = async (formData) => {
        console.log('New Room Data:', formData);
       
        //check if all required fields are filled
        if (!formData.roomNumber || !formData.roomType || !formData.equipment.length || !formData.availabilityStatus) {
            alert("Please fill in all required fields.");
            return;
        
        }
       //check if room number is numeric
        if (!/^\d+$/.test(formData.roomNumber)) {
            alert("Room number must be numeric.");
            return;
          }
        try {
            const response = await store.createRoom(formData);
            console.log ("the response is",response);
            if (response.status === 201) {
                navigate('/all-rooms');
            } else {
                setFormError(true);
            }
        } catch (error) {
            console.error('Error submitting new room:', error);
            setFormError(true);
        }
    };

    return (
        <>
            <Banner goBackPath="/all-rooms" />
            <div className="flex justify-center">
                <div className="text-blue-500 p-4 m-4 rounded-lg text-3xl">
                    New Room Form
                </div>
            </div>
            <FormField fields={fields} submit={handleSubmit} buttonName="Create Room" />
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

export default NewRoomPage;
