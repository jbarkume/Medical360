import React from "react";

const LoginForm = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="p-4 bg-blue-500 text-white w-full">
        <h1 className="text-lg font-bold">Medical360</h1>
      </div>
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
          <div className="mb-4">
            <div className="mb-8">
            <h2 className="text-center text-3xl font-extrabold text-gray-900">
              Stony Brook Medical360
            </h2>
            </div>
            <div className="mb-8">
            <p className="text-2xl-gray-600 text-center">Welcome back! Please log in to your account.</p>
            </div>
          </div>
          <form className="mt-4 space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="test@example.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="abc@1234556"
              />
            </div>
            <div className="flex items-center justify-between">
              <a href="#" className="font-medium text-sm text-blue-600 hover:text-blue-500">
                Forgot Password?
              </a>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
