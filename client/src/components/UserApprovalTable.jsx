import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const UserApprovalTable = ({ cards }) => {
  const { user } = useAuthContext;
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(""); // "approve" or "deny"
  const [userToProcess, setUserToProcess] = useState(null);

  const handleAction = (user, type) => {
    setUserToProcess(user);
    setModalType(type);
    setShowModal(true);
  };

  const handleConfirmation = () => {
    console.log(`${modalType} user:`, userToProcess);
    // Depending on modalType, make an API call to approve/deny the user here
    setShowModal(false);
  };

  return (
    <>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {["name", "username", "email", "department", "phone", "role"].map((field, index) => (
                <th key={index} scope="col" className="py-3 px-6">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </th>
              ))}
              {user.isAdmin && <th scope="col" className="py-3 px-6">Actions</th>}
            </tr>
          </thead>
          <tbody>
            {cards.map((user, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                {["name", "username", "email", "department", "phone", "role"].map((field, i) => (
                  <td key={i} className="py-4 px-6">
                    {user[field]}
                  </td>
                ))}
                {user.isAdmin && (
                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={() => handleAction(user, "approve")}
                      className="font-medium text-green-600 dark:text-green-500 hover:underline mr-3"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleAction(user, "deny")}
                      className="font-medium text-red-600 dark:text-red-500 hover:underline"
                    >
                      Deny
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Approve/Deny Confirmation */}
      {showModal && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    {/* Icon based on action */}
                    <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {modalType === "deny" ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      )}
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                      {modalType === "deny" ? "Deny User" : "Approve User"}
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Are you sure you want to {modalType} {userToProcess?.name}? This action cannot be undone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm ${
                    modalType === "deny" ? "bg-red-600 hover:bg-red-700 focus:ring-red-500" : "bg-green-600 hover:bg-green-700 focus:ring-green-500"
                  }`}
                  onClick={handleConfirmation}
                >
                  {modalType.charAt(0).toUpperCase() + modalType.slice(1)}
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserApprovalTable;
