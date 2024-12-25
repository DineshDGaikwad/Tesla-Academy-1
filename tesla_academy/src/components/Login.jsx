import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login details:', { email, password });
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
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between">
            <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
              Forgot your password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">Don't have an account? 
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"><Link to="/RegisterPage">Register Now</Link></a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;