import React, { useState } from 'react';
import TextField from './TextField'; 

// requires fields, and submit function specific to form use
const FormField = ({ fields, submit, page, buttonName }) => {
  // page can be the page to go back to after successfully submitting form

  const [formData, setFormData] = useState({});

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data:', formData);
    
    //submit logic:
    submit(formData);

    // go back to page:

  };

  return (
    <div className="max-w-md mx-auto">
      {fields.map((field, index) => (
        <TextField key={index} name={field} onChange={handleInputChange}/>
      ))}
      <div className="flex justify-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 m-4" onClick={handleSubmit}>{buttonName}</button>
      </div>
    </div>
  );
};

export default FormField;