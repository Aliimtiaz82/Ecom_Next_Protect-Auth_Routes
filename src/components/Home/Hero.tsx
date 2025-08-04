"use client";   

import React, { useState } from "react";
import Link from "next/link";
import ImageSlider from "./ImageSlider"; 

const Hero = () => {


    let [slide , setSlide] = useState();



  return (
    <div className="w-full flex    h-70 md:h-130  ">
      <div className="lg:w-1/2 w-full flex  flex-col justify-center   text-start  md:ps-20 space-y-4">
        <h1 className="text-3xl font-bold">
          One Stop Solution <span className="text-pink-500">E-Store</span>
        </h1>
        <p>Discover the latest headphones, earphones, mobiles, tablets, etc.</p>
        <p>Exclusive deals just for you!</p>
        <Link
          href="/"
          className="text-pink-500 w-30 rounded hover:bg-pink-400 hover:shadow-2xl transition-all duration-300 hover:text-white bg-gray-100  p-3"
        >
          Shop Now
        </Link>
      </div>

      <div className="w-1/2 h-full hidden  lg:block ">
        <ImageSlider></ImageSlider>
      </div>
    </div>
  );
};

export default Hero;



