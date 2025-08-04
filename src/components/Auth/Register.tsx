
"use client";

import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const RegisterForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  // Yup validation schema
const validationSchema = Yup.object({
  username: Yup.string()
    .matches(/^[A-Za-z]+$/, 'Username should contain only alphabets')
    .required('Username is required'),
    
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
    
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});


  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm, setFieldError }) => {
  try {
    const response = await axios.post('/api/users', values);
    alert(response.data.message);
    resetForm();
    router.push('/login');
  } catch (error: any) {
    if (error.response?.status === 400 && error.response.data.message === 'Email already registered') {
      setFieldError('email', 'Email is already registered');
    } else {
      console.error('Registration error:', error);
      alert('Something went wrong. Try again later.');
    }
  }
},
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-sm hover:scale-[1.07] transition-all duration-600 hover:cursor-pointer"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Register Here</h2>

        {/* Username */}
        <div className="mb-4">
          <label htmlFor="username" className="block mb-1 font-medium text-gray-700">
            User Name
          </label>
          <input
            id="username"
            name="username"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            className="w-full px-4 py-2 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your username"
          />
          {formik.touched.username && formik.errors.username && (
            <p className="text-red-500 text-sm">{formik.errors.username}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="w-full px-4 py-2 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm">{formik.errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-6">
          <label htmlFor="password" className="block mb-1 font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="w-full px-4 py-2 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your password"
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-red-500 text-sm">{formik.errors.password}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full mb-5 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-300"
        >
          Register
        </button>

        <p>
          Have an account? <Link className="text-blue-500" href="/login">Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;


