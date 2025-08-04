"use client";

import React from "react";
import { FaShippingFast, FaShieldAlt, FaHeadset, FaTags } from "react-icons/fa";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: "Free & Fast Shipping",
    description: "Get your products delivered to your doorstep within 2-5 business days at no extra cost.",
    icon: <FaShippingFast size={30} className="text-pink-600" />,
  },
  {
    title: "Secure Payment",
    description: "Your transactions are encrypted and secured with top-notch payment gateways.",
    icon: <FaShieldAlt size={30} className="text-blue-600" />,
  },
  {
    title: "24/7 Customer Support",
    description: "Need help? Our dedicated team is available around the clock to assist you.",
    icon: <FaHeadset size={30} className="text-green-600" />,
  },
  {
    title: "Exclusive Discounts",
    description: "Enjoy amazing deals, promotions, and loyalty rewards on every purchase.",
    icon: <FaTags size={30} className="text-yellow-500" />,
  },
];

const OurServices: React.FC = () => {
  return (
    <div className="w-full px-6 py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
        <p className="text-gray-500 text-lg mb-10">
          We strive to provide the best experience and service quality to our customers.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
