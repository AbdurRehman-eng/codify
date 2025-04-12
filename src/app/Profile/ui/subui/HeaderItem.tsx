"use client"
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface HeaderItemProps {
  title: string; // Accepts title as a prop
  route: string;
}

const HeaderItem: React.FC<HeaderItemProps> = ({ title, route }) => {
  const router = useRouter();
  function setTitle(title: string) {
    title = title; }
  return (
    <div onClick={() => {router.push(`/Profile/${route}`)}} className={`w-[124px] h-[33px] ml-5 mr-2  flex text-[12px] font-tektur hover:cursor-pointer
    ${title === "Achievements" ? 'border-b-[1.4px] border-[#B3FFED] text-[#B3FFED]' : 'text-[#9A999E]'}`} >
      <Image
        src={`/assets/images/Profile/Header/${title}-active.svg`}
        alt={`Icon`}
        width={21} 
        height={21}
        className="w-[21px] h-[21px] object-cover mt-1 mr-[6px] mb-1 "
        quality={100}
      />
      <p className='mt-[6px] mb-1  font-extralight'>{title}</p> 
    </div>
  );
};

export default HeaderItem;
