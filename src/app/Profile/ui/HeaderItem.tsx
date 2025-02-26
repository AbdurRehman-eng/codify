"use client"; // Needed for `usePathname`
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderItemProps {
  title: string;
}

const HeaderItem: React.FC<HeaderItemProps> = ({ title }) => {
  const pathname = usePathname();
  const lowerTitle = title.toLowerCase();
  const href = `/profile/${title}`;
  const isActive = pathname.startsWith(href); // Fix active link detection

  return (
    <Link
      href={href}
      className={`w-[124px] h-[33px] ml-5 mr-2 flex text-[12px] font-tektur
      ${isActive ? "border-b-[1.4px] border-[#B3FFED] text-[#B3FFED]" : "text-[#9A999E]"}`}
    >
      <Image
        src={`/assets/images/Profile/Header/${title}-active.svg`}
        alt={`${title} Icon`}
        width={21}
        height={21}
        className="w-[21px] h-[21px] object-cover mt-1 mr-[6px] mb-1"
        quality={100}
      />
      <p className="mt-[6px] mb-1 font-extralight">{title}</p>
    </Link>
  );
};

export default HeaderItem;
