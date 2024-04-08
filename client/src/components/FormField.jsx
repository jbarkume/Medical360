import React, { useState, useEffect } from 'react';
import TextField from './TextField';

const FormField = ({ fields, submit, buttonName }) => {
  const [formData, setFormData] = useState({});

  // Initialize formData with initial values when component mounts
  useEffect(() => {
    const initialData = fields.reduce((acc, field) => {
      acc[field.name] = field.initialValue || '';
      return acc;
    }, {});
    setFormData(initialData);
  }, [fields]);

  const handleInputChange = (name, value) => {
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data:', formData);
    submit(formData);
  };

  return (
    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <TextField
          key={index}
          name={field.name}
          initialValue={formData[field.name]}
          editable={field.editable}
          showEditIcon={field.showEditIcon}
          type={field.type}
          options={field.options} // Pass options for 'select' type fields
          onChange={handleInputChange}
        />
      ))}
      <div className="flex justify-center">
        <button
          type="submit"
          className={`font-bold py-2 px-4 rounded mt-4 ${
            buttonName.toLowerCase() === 'delete user' ? 'bg-red-500 hover:bg-red-700' : 'bg-blue-500 hover:bg-blue-700'
          } text-white`}
        >
          {buttonName}
        </button>
      </div>
    </form>
  );
};

export default FormField;
