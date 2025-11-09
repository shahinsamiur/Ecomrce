"use client";

import { useState } from "react";
import { FiMenu, FiX, FiHeart, FiShoppingBag, FiUser } from "react-icons/fi";
import Image from "next/image";

export default function Header() {
  const [active, setActive] = useState("cart");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="w-full flex justify-center items-center shadow-md">
      <div className="w-full max-w-7xl flex justify-center items-center">
        <header className="w-full flex justify-between items-center px-6 md:px-10 py-4 relative">
          {/* Left Section */}
          <div className="flex items-center gap-4 md:gap-8">
            {/* Menu icon - visible on mobile */}
            <button
              className="text-text hover:text-secondary md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>

            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={120}
                height={40}
                className="object-contain size-10"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-text">
            <a href="#" className="hover:text-secondary transition">
              Home
            </a>
            <a href="#" className="hover:text-secondary transition">
              Collections
            </a>
            <a href="#" className="hover:text-secondary transition">
              New
            </a>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Heart */}
            <button
              className={`rounded-full p-3 transition max-md:hidden  ${
                active === "heart"
                  ? "bg-text/80 text-white"
                  : "bg-text/80 text-white"
              }`}
              onClick={() => setActive("heart")}
            >
              <FiHeart size={18} />
            </button>

            {/* Cart */}
            <button
              className={`flex items-center gap-2  rounded-full md:px-4 px-1 py-1 md:py-2 transition ${
                active === "cart"
                  ? "bg-text/80 text-white"
                  : "bg-text/80 text-white"
              }`}
              onClick={() => setActive("cart")}
            >
              <span className="text-sm font-medium max-md:hidden">Cart</span>
              <div
                className={`p-2 rounded-full  ${
                  active === "cart" ? " text-white" : " text-white "
                }`}
              >
                <FiShoppingBag size={14} />
              </div>
            </button>

            {/* User */}
            <button
              className={`rounded-full p-2 md:p-3 transition ${
                active === "user"
                  ? "bg-text/80 text-white"
                  : "bg-text/80 text-white"
              }`}
              onClick={() => setActive("user")}
            >
              <FiUser size={18} />
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden z-20">
              <nav className="flex flex-col text-center py-4 text-gray-700">
                <a
                  href="#"
                  className="py-2 hover:text-secondary transition"
                  onClick={() => setMobileOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#"
                  className="py-2 hover:text-secondary transition"
                  onClick={() => setMobileOpen(false)}
                >
                  Collections
                </a>
                <a
                  href="#"
                  className="py-2 hover:text-secondary transition"
                  onClick={() => setMobileOpen(false)}
                >
                  New
                </a>
              </nav>
            </div>
          )}
        </header>
      </div>
    </div>
  );
}
