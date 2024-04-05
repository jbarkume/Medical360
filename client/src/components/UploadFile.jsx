import React, { useState } from 'react';
import { DocumentIcon, UploadIcon } from '@heroicons/react/outline';

const FileUpload = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    setFiles([...event.target.files]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFiles([...event.dataTransfer.files]);
  };

  return (
    <div className="p-6 bg-blue-500 rounded-lg max-w-md mx-auto my-8">
      <div
        className="flex flex-col items-center justify-center p-6 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <UploadIcon className="h-8 w-8 text-blue-700" />
        <p className="mt-1 text-sm text-blue-700">Click or drag file to this area to upload</p>
        <input
          type="file"
          className="w-full h-full top-0 left-0 absolute opacity-0 cursor-pointer"
          onChange={handleFileChange}
        />
      </div>
      <div className="flex flex-col mt-4">
        <span className="text-sm font-semibold text-blue-700 mb-2">Files:</span>
        {files.length > 0 &&
          files.map((file, index) => (
            <div key={index} className="flex items-center justify-between px-4 py-2 rounded bg-blue-200 mb-2">
              <DocumentIcon className="h-6 w-6 text-blue-700" />
              <span className="text-sm text-blue-700 truncate">{file.name}</span>
            </div>
          ))}
      </div>
      <div className="flex justify-end mt-4 space-x-2">
        <button className="px-4 py-2 rounded text-sm font-semibold bg-white text-blue-700 hover:bg-blue-100">
          Cancel
        </button>
        <button className="px-4 py-2 rounded text-sm font-semibold bg-blue-700 text-white hover:bg-blue-600">
          Continue
        </button>
      </div>
    </div>
  );
};

export default FileUpload;
