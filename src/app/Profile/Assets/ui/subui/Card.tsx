import React from 'react'
import Image from 'next/image'
import Button from '@/app/ui/subui/Button';

interface CardProps {
    title: string; 
    type: string;
  }
const Card: React.FC<CardProps> = ({ title , type}) => {
  return (
    <div className='w-[185px] h-[215px] outline outline-1 outline-[#212023] rounded-[10px] mr-5 flex flex-col'>
        <div className='w-[185px] h-[142px] outline outline-1 outline-[#212023] rounded-[10px]'>
    <Image
      src={`/assets/images/Profile/Assets/${title}.${type === 'pfp' ? 'png':'jpg'}`}
      alt={`Icon`}
      width={185} 
      height={142}
      className="w-[185x] h-[142px] object-cover self-center rounded-[10px]"
      quality={100}
    />
        </div>

<p className='text-white text-[18px] font-medium font-tektur self-start mt-[10px] ml-[6px]'>{title}</p>
<div className='flex justify-between '>
<p className='text-[#626164] text-[10px] font-medium font-tektur ml-[6px]'>{type}</p>
<Button 
  children="Use" 
  top="0px" 
  left="0px" 
  pos={` w-[77px] h-[23px] mr-[10px] `}
/>
</div>

</div>
  )
}

export default Card