"use client";
import { LuSearch } from "react-icons/lu";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import SliderBtn from "./utilitys/sliderBtn";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center px-6 md:px-12 py-5 md:py-5 gap-10">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-between gap-10">
        {/* Menu + Search */}
        <div className="flex flex-col gap-6">
          <ul className="flex flex-col gap-2 tracking-wide text-sm">
            <li className="cursor-pointer hover:text-gray-600">MEN</li>
            <li className="cursor-pointer hover:text-gray-600">WOMEN</li>
            <li className="cursor-pointer hover:text-gray-600">KIDS</li>
          </ul>

          <div className="relative w-full sm:w-3/4 bg-gray-100 rounded-md flex items-center px-4 py-2 gap-3">
            <LuSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent w-full outline-none text-sm text-gray-600"
            />
          </div>
        </div>

        {/* Heading & Controls */}
        <div className="flex flex-col justify-between gap-10">
          <div>
            <h1>
              New <br /> Collection
            </h1>
            <p className="text-gray-600 mt-2 leading-5">
              Summer <br /> 2024
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="bg-gray-100 hover:bg-gray-200 transition w-full sm:w-1/2 h-10 flex justify-center items-center gap-3 cursor-pointer group">
              <h2 className="text-sm tracking-wide">Go To Shop</h2>
              <LiaLongArrowAltRightSolid className="text-xl group-hover:translate-x-1 transition" />
            </div>

            <div className="flex gap-3">
              <SliderBtn id="prevBtn">
                <SlArrowLeft />
              </SliderBtn>
              <SliderBtn id="nextBtn">
                <SlArrowRight />
              </SliderBtn>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section (Slider) */}
      <div className="w-full md:w-1/2">
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          modules={[Navigation]}
          navigation={{
            prevEl: "#prevBtn",
            nextEl: "#nextBtn",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2 },
          }}
          className="w-full"
        >
          <SwiperSlide>
            <Image
              src="/itemImages/itemImage1.png"
              alt="model 1"
              className="w-full object-cover"
              width={500}
              height={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/itemImages/itemImage2.png"
              alt="model 2"
              className="w-full object-cover"
              width={500}
              height={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/itemImages/itemImage2.png"
              alt="model 3"
              className="w-full object-cover"
              width={500}
              height={500}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
