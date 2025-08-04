"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/components/store/store";
import { logout } from "@/components/store/userSlice";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const Navbar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  const handleLogout = async () => {
  await fetch('/api/logout', { method: 'POST' });
  dispatch(logout());
  router.push('/login');
};


  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) return null;

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
       
        <div className="text-2xl font-bold text-[#0089A7]">
          <Link href="/home">ShopEase</Link>
        </div>

        <div className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link
            href="/service"
            className="hover:text-[#F6339A] hover:scale-[1.1] transition duration-300"
          >
            Our Services
          </Link>
          <Link
            href="/contact"
            className="hover:text-[#F6339A] hover:scale-[1.1] transition duration-300"
          >
            Contact Us
          </Link>
          <Link
            href="/about"
            className="hover:text-[#F6339A] hover:scale-[1.1] transition duration-300"
          >
            About Us
          </Link>
        </div>

        <button
          onClick={handleLogout}
          className="ml-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-300"
        >
          Logout
        </button>
      </nav>
    </header>
  );
};

