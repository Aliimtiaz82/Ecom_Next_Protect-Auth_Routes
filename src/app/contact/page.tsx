"use client";
import { Navbar } from "@/components/Home/Navbar";
import React from "react";
import MobileBtn from "@/components/Home/MobileBtn";

const ContactUs = () => {
  return (
    <>
    
    <Navbar></Navbar>
     <MobileBtn></MobileBtn>
    <div className="w-full min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-8">
          Have questions or need help? Fill out the form below and we’ll get
          back to you shortly.
        </p>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                placeholder="Ahmed"
                className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                placeholder="Younas"
                className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="abcd@gmail.com"
              className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows={5}
              placeholder="Type your message here..."
              className="mt-1 block w-full border p-2 border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div className="mt-12 max-w-4xl mx-auto text-center text-gray-600">
        <p>Email: support@yourstore.com | Phone: +92 300 1234567</p>
        <p>123 Ecom Street, Karachi, Pakistan</p>
      </div>
    </div>
    </>
  );
};

export default ContactUs;


