import React from 'react';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  brand: string;
  rating: number;
  description: string;
  image: string;
  isFeatured: boolean;
}

interface CardProps {
  data: Product;
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="bg-stone-100 w-full  rounded shadow-2xl overflow-hidden hover:shadow-xl  transition-all duration-300 hover:scale-105 mt-5 hover:cursor-pointer">
      <img
        className="h-60 w-full object-fit rounded-t"
        src={data.image}
        alt={data.name}
      />

      <div className="p-3">
        <div className="flex justify-between text-lg">
          <h1 className="text-[#F6339A] font-bold">{data.name}</h1>
          <p className="text-red-600 font-bold">${data.price}</p>
        </div>

        <div className="text-sm mt-3">
          <p>{data.description}</p>
        </div>

        <div className="flex justify-between mt-7">
          <h1 className="text-stone-500">{data.brand}</h1>
          <p>⭐{data.rating}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
