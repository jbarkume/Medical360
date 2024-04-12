// import React, { useState } from 'react';
// import TextField from './TextField';


// const FormField = ({ fields, submit, buttonName }) => {
//   const [formData, setFormData] = useState({});

//   // Handle input changes
//   const handleInputChange = (name, value) => {
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('Form data:', formData);
//     submit(formData);
//   };

//   return (
//     <div className="max-w-md mx-auto">
//       {fields.map((field, index) => (
//         <TextField
//           key={index}
//           name={field.name}
//           initialValue={field.initialValue} 
//           editable={field.editable}
//           showEditIcon={field.showEditIcon} 
//           onChange={handleInputChange}
//         />
//       ))}
//       <div className="flex justify-center">
//         {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 m-4" onClick={handleSubmit}>
//           {buttonName}
//         </button> */}
//         <button
//     className={`font-bold py-2 px-4 rounded mt-4 m-4 ${
//       buttonName.toLowerCase() === 'delete user' ? 'bg-red-500 hover:bg-red-700' : 'bg-blue-500 hover:bg-blue-700'
//     } text-white`}
//     onClick={handleSubmit}
//   >
//     {buttonName}
//   </button>
//       </div>
//     </div>
//   );
// };

// export default FormField;
import React, { useState } from 'react';
import TextField from './TextField';

const FormField = ({ fields, submit, buttonName }) => {
    const [formData, setFormData] = useState({});

    const handleInputChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form data:', formData);
        submit(formData);
    };

    return (
        <div className="max-w-md mx-auto">
            {fields.map((field, index) => (
                <TextField
                    key={index}
                    name={field.name}
                    initialValue={field.initialValue}
                    editable={field.editable}
                    showEditIcon={field.showEditIcon}
                    type={field.type} // Add this line
                    onChange={handleInputChange}
                    options={field.options}
                />
            ))}
            <div className="flex justify-center">
                <button
                    className={`font-bold py-2 px-4 rounded mt-4 m-4 ${
                        buttonName.toLowerCase() === 'delete user' ? 'bg-red-500 hover:bg-red-700' : 'bg-blue-500 hover:bg-blue-700'
                    } text-white`}
                    onClick={handleSubmit}
                >
                    {buttonName}
                </button>
            </div>
        </div>
    );
};

export default FormField;
