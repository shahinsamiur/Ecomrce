import React from "react";
import Hero from "./compoents/Hero";
import SliderSection from "./compoents/SliderSection";
import SliderSection2 from "./compoents/SliderSection2";
import Section3 from "./compoents/section3";
export default function page() {
  return (
    <div className="flex justify-center items-start pt-20 min-h-screen w-full">
      <div className="w-full max-w-7xl">
        <Hero />
        <SliderSection />
        <SliderSection2 />
        <Section3 />
      </div>
    </div>
  );
}
