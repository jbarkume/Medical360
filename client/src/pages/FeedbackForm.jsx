import React, { useState } from "react";
import { InformationCircleIcon, StarIcon } from "@heroicons/react/solid";
import { QuestionMarkCircleIcon } from "@heroicons/react/outline";
import AccountCircle from "../components/AccountCircle";
import Banner from "../components/Banner";
const FeedbackForm = () => {
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    comments: "",
    rating: 0,
  });

  const handleRating = (ratingValue) => {
    setFeedback({ ...feedback, rating: ratingValue });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to submit feedback
    console.log(feedback);
  };

  return (
    <>
      <Banner goBackPath={"/apppage"} />
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-2xl">
          <h2 className="text-2xl text-gray-700 font-bold mb-6">
            Feedback Form
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={feedback.name}
                className="mt-1 block w-full border border-gray-300 shadow-sm rounded p-2"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={feedback.email}
                className="mt-1 block w-full border border-gray-300 shadow-sm rounded p-2"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">
                Share your experience in patient assignments
              </label>
              <div className="flex">
                {[...Array(5)].map((_, index) => {
                  const ratingValue = index + 1;
                  return (
                    <StarIcon
                      key={ratingValue}
                      className={`h-7 w-7 cursor-pointer ${feedback.rating >= ratingValue ? "text-yellow-400" : "text-gray-400"}`}
                      onClick={() => handleRating(ratingValue)}
                    />
                  );
                })}
              </div>
            </div>

            <div className="mb-4">
              <textarea
                name="comments"
                onChange={handleChange}
                value={feedback.comments}
                className="mt-1 block w-full border border-gray-300 shadow-sm rounded p-2 h-28"
                placeholder="Add your comments..."
              ></textarea>
            </div>

            <div className="flex justify-between mt-8">
              <button
                type="button"
                className="px-4 py-2 rounded text-gray-700 border border-gray-300 shadow-sm hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded text-white bg-blue-500 hover:bg-blue-600 shadow-sm"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FeedbackForm;
