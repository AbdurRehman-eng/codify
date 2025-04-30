"use client";
import React from 'react';
import Image from 'next/image';
import Button from '@/app/ui/subui/Button';

interface CardProps {
  title: string;
  type: string;
  username: string; // Pass username to the Card component
  onUse: (pfp: string, background: string) => void; // Callback function to trigger on "Use" button click
}

const Card: React.FC<CardProps> = ({ title, type, onUse }) => {
  const normalizedTitle = title.trim().toLowerCase();
  const imageType = type === 'pfp' ? 'png' : 'jpg';

  const handleUse = () => {
    // Call the onUse function passed as a prop with the appropriate data
    if (type === 'pfp') {
      onUse(normalizedTitle, ''); // Only updating profile picture (no background update)
    } else if (type === 'background') {
      onUse('', normalizedTitle); // Only updating background (no pfp update)
    }
  };

  return (
    <div className='w-[185px] h-[215px] outline outline-1 outline-[#212023] rounded-[10px] mr-5 flex flex-col'>
      <div className='w-[185px] h-[142px] outline outline-1 outline-[#212023] rounded-[10px]'>
        <Image
          src={`/assets/images/Store/${normalizedTitle}.${imageType}`}
          alt={`Icon`}
          width={185}
          height={142}
          className="w-[185px] h-[142px] object-cover self-center rounded-[10px]"
          quality={100}
        />
      </div>

      <p className='text-white text-[18px] font-medium font-tektur self-start mt-[10px] ml-[6px]'>{title}</p>
      <div className='flex justify-between '>
        <p className='text-[#626164] text-[10px] font-medium font-tektur ml-[6px]'>{type}</p>
        <Button 
          top="0px" 
          left="0px" 
          pos={`w-[77px] h-[23px] mr-[10px]`}
          onClick={handleUse} // Trigger the use function on click
        >
          Use
        </Button>
      </div>
    </div>
  );
};

export default Card;
