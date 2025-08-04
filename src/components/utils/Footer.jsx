"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-stone-200 text-[#0089A7] pt-10 pb-6 mt-20 shadow-inner rounded-t-2xl">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Logo + About */}
        <div>
          <h2 className="text-xl font-bold mb-4">ShopEase</h2>
          <p className="text-stone-600">
            Your one-stop shop for all modern gadgets and accessories. Quality,
            affordability, and style delivered to your door.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/home" className="hover:text-[#F6339A]">Home</Link></li>
            <li><Link href="/service" className="hover:text-[#F6339A]">Our Services</Link></li>
            <li><Link href="/about" className="hover:text-[#F6339A]">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-[#F6339A]">Contact</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:text-[#F6339A]">FAQs</Link></li>
            <li><Link href="#" className="hover:text-[#F6339A]">Shipping & Returns</Link></li>
            <li><Link href="#" className="hover:text-[#F6339A]">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-[#F6339A]">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-[#0089A7] text-lg">
            <a href="#" aria-label="Facebook" className="hover:text-[#F6339A]"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter" className="hover:text-[#F6339A]"><FaTwitter /></a>
            <a href="#" aria-label="Instagram" className="hover:text-[#F6339A]"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#F6339A]"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-stone-300 mt-10 pt-4 text-center text-xs text-stone-500">
        &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
