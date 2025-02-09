"use client";
import React, { useState } from "react";
import Image from "next/image";
import SelectorItem from "./subui/SelectorItem";
import Button from "@/app/ui/subui/Button";

interface SideSelectorProps {
  onApplyFilters: (selectedFilters: string[]) => void;
}

const SideSelector: React.FC<SideSelectorProps> = ({ onApplyFilters }) => {
  const [selectedTitles, setSelectedTitles] = useState<string[]>([]);

  const handleSelect = (title: string) => {
    setSelectedTitles((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title) // Remove if already selected
        : [...prev, title] // Add if not selected
    );
  };

  const applyFilters = () => {
    onApplyFilters(selectedTitles);
  };

  return (
    <div className="bg-[rgba(37,37,39,0.4)] w-[48.3929vh] h-[89.2857vh] mt-[14.2857vh] rounded-[4.2857vh] flex flex-col
                      shadow-[0_4px_6px_rgba(0,0,0,0.4)] backdrop-blur-md">
      <p className="font-tektur font-bold text-[3.5714vh] text-white ml-[5vh] mt-[5vh] mb-[2.8571vh]">
        Categories
      </p>
      <SelectorItem title="Gold" onSelect={handleSelect} selected={selectedTitles.includes("Gold")} />
      <SelectorItem title="Diamond" onSelect={handleSelect} selected={selectedTitles.includes("Diamond")} />
      <SelectorItem title="Pfp" onSelect={handleSelect} selected={selectedTitles.includes("Pfp")} />
      <SelectorItem title="Border" onSelect={handleSelect} selected={selectedTitles.includes("Border")} />
      <SelectorItem title="Background" onSelect={handleSelect} selected={selectedTitles.includes("Background")} />

      <Image
        src="/assets/images/Store/line.svg"
        alt="line"
        width={220}
        height={12}
        style={{ objectFit: "cover" }}
        className="w-[39.29vh] h-[2.14vh] ml-[3.5714vh] mt-[2.8571vh]"
      />

      <p className="font-tektur font-bold text-[3.5714vh] text-white ml-[5vh] mt-[2.1429vh] mb-[2.8571vh]">
        What's new!
      </p>
      <SelectorItem title="Recent" onSelect={handleSelect} selected={selectedTitles.includes("Recent")} />
      <SelectorItem title="Most Popular" onSelect={handleSelect} selected={selectedTitles.includes("Most Popular")} />
      <SelectorItem title="Owned" onSelect={handleSelect} selected={selectedTitles.includes("Owned")} />
      <SelectorItem title="Buy Coins" onSelect={handleSelect} selected={selectedTitles.includes("Buy Coins")} />

      <Button
        children="Apply Filters"
        top="3.5714vh"
        left="8.9286vh"
        pos="relative w-[25.8929vh] h-[8.0357vh]"
        onClick={applyFilters}
      />
    </div>
  );
};

export default SideSelector;
