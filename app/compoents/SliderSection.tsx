"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CardImageCompoents from "./utilitys/CardImageComponets";
import { newProducts } from "../_mock/new_product";
import SliderBtn from "./utilitys/sliderBtn";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}
export default function SliderSection() {
  return (
    <div className="w-full flex flex-col  justify-between items-center gap-6 py-10 px-6 md:px-12 ">
      <div className="w-full flex items-center justify-start ">
        <h1>
          New <br />
          This week
        </h1>
      </div>
      <div className="w-full  ">
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          modules={[Navigation]}
          navigation={{
            prevEl: "#prevBtn2",
            nextEl: "#nextBtn2",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full "
        >
          {newProducts.map((item) => (
            <SwiperSlide key={item.id}>
              <CardImageCompoents item={item as Item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="">
        <div className="flex gap-3">
          <SliderBtn id="prevBtn2">
            <SlArrowLeft />
          </SliderBtn>
          <SliderBtn id="nextBtn2">
            <SlArrowRight />
          </SliderBtn>
        </div>
      </div>
    </div>
  );
}
