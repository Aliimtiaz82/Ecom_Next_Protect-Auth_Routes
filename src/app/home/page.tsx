

"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/components/store/store";
import Hero from "@/components/Home/Hero";
import Card from "@/components/Home/Card";
import product from "../../data/product.json";

// Define the Product type
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


const HomePage = () => {
  const router = useRouter();
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isLoggedIn === false) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, [isLoggedIn, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="w-full">
        <Hero />
      </div>

      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 mt-4">
        {(product as Product[]).map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
