// import React, { useState,useEffect } from 'react';

// const TextField = ({ name, onChange , editable , initialValue, showEditIcon = false }) => {
//   // State to hold the value of the text field
//   const [value, setValue] = useState('');
//   const [isEditing, setIsEditing] = useState(editable && !showEditIcon);

//   useEffect(() => {
//     // Set the value to initialValue when the component mounts
//     if (initialValue !== undefined) {
//       setValue(initialValue);
//     }
//   }, [initialValue]);
//   // Event handler to update the value when text changes
//   const handleChange = (event) => {
//     if (isEditing) {
//       setValue(event.target.value);
//       onChange(name, event.target.value);
//     }
    
//   };
//     const handleEditClick = () => {
//     if (editable && showEditIcon) {
//       setIsEditing(true);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto relative">
//       <div className="border-t-4 border-purple-500"></div>
//       <div className="bg-white shadow-md rounded px-4 pt-4 pb-8 mb-4 relative z-10">
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
//           {name}
//         </label>
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           id={name}
//           type="text"
//           placeholder={`Enter ${name}`}
//           value={value}
//           onChange={handleChange}
//           readOnly={ !isEditing}
//         />
//         {showEditIcon && !isEditing && editable && (
//           <span onClick={handleEditClick} className="absolute inset-y-0 right-0 pr-5 flex items-center cursor-pointer">✏️</span>
//        )}
//       </div>
//     </div>
//   );
// };

// export default TextField;
import React, { useState, useEffect } from 'react';

const TextField = ({ name, onChange, editable, initialValue, type = 'text', showEditIcon = false }) => {
    const [value, setValue] = useState('');

    useEffect(() => {
        if (initialValue !== undefined) {
            setValue(initialValue);
        }
    }, [initialValue]);

    const handleChange = (event) => {
      let newValue = event.target.value;
      if (type === 'file') {
          const file = event.target.files[0];
          if (file && !file.type.startsWith('image/')) {
              alert('Only image files are allowed!');
              return;
          }
          newValue = file;
      }
      setValue(newValue);
      onChange(name, newValue);
  };
  
    const handleEditClick = () => {
        if (editable && showEditIcon) {
            setValue(editable);
        }
    };

    return (
        <div className="max-w-md mx-auto relative">
            <div className="bg-white shadow-md rounded px-4 pt-4 pb-8 mb-4 relative z-10">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
                    {name}
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id={name}
                    type={type}
                    placeholder={`Enter ${name}`}
                    onChange={handleChange}
                    value={type === 'file' ? undefined : value}
                    readOnly={type !== 'file' && !editable}
                />
                {showEditIcon && !editable && (
                    <span onClick={handleEditClick} className="absolute inset-y-0 right-0 pr-5 flex items-center cursor-pointer">✏️</span>
                )}
            </div>
        </div>
    );
};

export default TextField;
