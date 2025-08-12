"use client"; 

import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { login } from '@/components/store/userSlice';
import React, {  useState } from 'react';
import Link from 'next/link';
import axios from "axios";

const LoginForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async  (e: React.FormEvent) => {
    e.preventDefault();

   
    try {
    await axios.post('/api/login', { email, password  });
      
      dispatch(login()); 
      
       router.push("/home");
    } catch (err: unknown) {
  let message = 'An unexpected error occurred.';

  if (axios.isAxiosError(err)) {
    message = err.response?.data?.message || err.message;
  } else if (err instanceof Error) {
    message = err.message;
  }

  alert(`Login failed: ${message}`);
}

    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-sm hover:scale-[1.07]  transition-all duration-600 hover:cursor-pointer"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Login</h2>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block mb-1 font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="w-full mb-5 bg-blue-500 hover:cursor-pointer hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-300"
        >
          Submit
        </button>

        <p>Dont have an account? <Link className='text-blue-500' href='/register'>Regiser</Link> </p> 
      </form>
    </div>
  );
};

export default LoginForm;
