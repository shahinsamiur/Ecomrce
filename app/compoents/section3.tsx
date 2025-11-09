"use client";
import Image from "next/image";

export default function Section3() {
  const images = [
    "/itemImages/itemImage1.png",
    "/itemImages/itemImage2.png",
    "/itemImages/itemImage1.png",
    "/itemImages/itemImage2.png",
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center py-10 gap-6 overflow-hidden relative">
      {/* Text Section */}
      <div className="px-4 text-center">
        <h1 className="text-2xl md:text-4xl font-semibold text-gray-800">
          Our Approach to Fashion Design
        </h1>
        <p className="max-w-3xl text-center mt-4 text-gray-600 mx-auto text-sm md:text-base leading-relaxed">
          At Elegant Vogue, we blend creativity with craftsmanship to create
          fashion that transcends trends and stands the test of time. Each
          design is meticulously crafted, ensuring the highest quality and
          exquisite finish.
        </p>
      </div>

      {/* Scrolling Images */}
      <div className="relative w-full flex justify-center items-center overflow-hidden  md:px-12">
        <div className="relative w-full  py-8 px-6 md:px-12 overflow-hidden">
          {/* Gradient Left */}
          <div className="absolute left-0 top-0 h-full w-1/5 bg-linear-to-r from-white to-transparent z-20" />

          {/* linear Right */}
          <div className="absolute right-0 top-0 h-full w-1/5 bg-linear-to-l from-white to-transparent z-20" />

          {/* Infinite Scrolling Container */}
          <div className="flex animate-scroll gap-8">
            {[...images, ...images].map((src, index) => (
              <div
                key={index}
                className="shrink-0 w-40 sm:w-52 md:w-64 lg:w-72 overflow-hidden rounded-xl"
              >
                <Image
                  src={src}
                  alt={`model ${index + 1}`}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
