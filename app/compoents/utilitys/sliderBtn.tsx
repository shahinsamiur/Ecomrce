import React from "react";

export default function SliderBtn({
  children,
  id,
}: {
  children: React.ReactNode,
  id?: string,
}) {
  return (
    <button
      id={id}
      className="text-lg h-10 px-3 border border-gray-300 hover:bg-gray-100 transition-all cursor-pointer rounded"
    >
      {children}
    </button>
  );
}
