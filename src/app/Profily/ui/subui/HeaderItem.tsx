"use client"
import React from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

interface HeaderItemProps {
  title: string;
  route: string;
}

const HeaderItem: React.FC<HeaderItemProps> = ({ title, route }) => {
  const router = useRouter();
  const pathname = usePathname();
  const isActive = pathname.endsWith(route);

  return (
    <div 
      onClick={() => router.push(`/Profile/${route}`)} 
      className={`w-[124px] h-[33px] ml-5 mr-2 flex text-[12px] font-tektur hover:cursor-pointer
      ${isActive ? 'border-b-[1.4px] border-[#B3FFED] text-[#B3FFED]' : 'text-[#9A999E]'}`}
    >
      <Image
        src={`/assets/images/Profile/Header/${title}-${isActive ? 'active' : 'inactive'}.svg`}
        alt={`${title} icon`}
        width={21} 
        height={21}
        className="w-[21px] h-[21px] object-cover mt-1 mr-[6px] mb-1"
        quality={100}
      />
      <p className='mt-[6px] mb-1 font-extralight'>{title}</p> 
    </div>
  );
};

export default HeaderItem;