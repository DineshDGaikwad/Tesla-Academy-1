import React, { useState } from 'react';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [createPassword, setCreatePassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login details:', { email, createPassword });
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover"
      style={{
        backgroundImage: "url('https://viditrade.com/wp-content/uploads/2022/04/login-pg-img.jpg')",
      }}
    >
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center">Tesla Academy</h2>
        
        <form onSubmit={handleLogin} className="mt-8 space-y-4">
          <div className="rounded-md shadow-sm">
            <label htmlFor="text" className="block text-sm font-medium text-gray-700">
              Name
            </label>

            <div className="flex space-x-4">
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-1/2 px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="First Name"
             />

              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-1/2 px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Last Name"
              />
            </div>


          </div>

          <div className="rounded-md shadow-sm">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your email"
            />
          </div>          

          <div className="mt-4">
            <label htmlFor="createPassword" className="block text-sm font-medium text-gray-700">
              Create new password
            </label>
            <input
              id="createPassword"
              name="createPassword"
              type="password"
              required
              value={createPassword}
              onChange={(e) => setCreatePassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Register
          </button>
        </form>

      </div>
    </div>
  );
};

export default Register;