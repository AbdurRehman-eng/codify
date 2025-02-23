"use client";
import React, { useState } from "react";
import ItemCard from "./ui/ItemCard";
import SideSelector from "./ui/SideSelector";
import SlidingCard from "./ui/SlidingCard";
import Image from "next/image";
import { store } from "@/../public/assets/data/store";

const Page = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleFiltersApply = (filters: string[]) => {
    setSelectedFilters(filters);
    console.log("Applied Filters:", filters); // Debugging
  };

// Filter items based on selected filters
const filteredStore = selectedFilters.length > 0
  ? store.filter(item => item.features.some(feature => selectedFilters.includes(feature)))
  : store;


  return (
    <div className="relative w-screen min-h-screen flex mt-5">
      {/* Sidebar */}
      <div className="w-[88.7857vh] min-h-screen flex justify-center items-start">
        <SideSelector onApplyFilters={handleFiltersApply} />
      </div>

      {/* Main Content */}
      <div className="w-full h-full flex flex-col">
        {/* Sliding Card Section */}
        <div className="w-full h-[62vh] flex justify-start items-center">
          <SlidingCard />
        </div>
        {/* Item Grid */}
        <div className="w-full grid grid-cols-3 gap-[5.1286vh] px-[9.9286vh] mb-[7.14vh] gap-y-[0vh]">
          {filteredStore.map((item) => (
            <ItemCard
              key={item.id}
              number={item.number}
              name={item.name}
              type={item.type}
              features = {item.features}
              price={item.price}
              currency={item.currency}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
