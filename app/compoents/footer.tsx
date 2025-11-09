"use client";
import { FiGlobe } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-full min-h-[60vh] flex flex-col justify-between items-center text-gray-700 bg-[#fafafa] px-6 md:px-16 py-10 font-sans relative">
      <div className="w-full flex flex-col px-6 md:px-12 justify-between items-center max-w-7xl">
        {/* Top Section */}
        <div className="w-full flex flex-row justify-between items-start md:items-center">
          {/* Left Column */}
          <div className="flex flex-col gap-10 text-sm tracking-wide">
            <div className="flex flex-col gap-1">
              <p className="uppercase text-gray-400 text-xs">Info</p>
              <ul className="flex flex-col gap-1">
                <li className="hover:text-black transition">Pricing</li>
                <li className="hover:text-black transition">About</li>
                <li className="hover:text-black transition">Contacts</li>
              </ul>
            </div>

            <div className="flex flex-col gap-1">
              <p className="uppercase text-gray-400 text-xs">Languages</p>
              <ul className="flex flex-col gap-1">
                <li className="hover:text-black transition">ENG</li>
                <li className="hover:text-black transition">ESP</li>
                <li className="hover:text-black transition">SVE</li>
              </ul>
            </div>
          </div>

          {/* Center Section */}
          <div className="flex flex-col items-center justify-center mt-10 md:mt-0 text-center relative">
            <p className="uppercase text-gray-400 text-xs mb-2">Technologies</p>
            <div className="text-5xl md:text-7xl font-bold tracking-tight text-black leading-tight">
              <div className="text-gray-300">VR</div>
              <div>XIV</div>
              <div>QR</div>
            </div>
            <p className="mt-3 text-gray-500 text-xs md:text-sm">
              Near-field communication
            </p>
          </div>

          {/* Right Placeholder (optional for balance) */}
          <div className="hidden md:block w-[100px]" />
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-gray-200 my-10" />

        {/* Bottom Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-3">
          <p>© 2024 — copyright</p>
          <div className="flex items-center gap-2">
            <FiGlobe size={14} />
            <span>privacy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
