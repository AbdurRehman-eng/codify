import React from 'react'
import Image from 'next/image'
import Button from '@/app/ui/subui/Button'

interface StoreCardProps{
  number: string;
  name: string;
  type: string;
  features: string[];
  price: string;
  currency: string;
}

const ItemCard: React.FC<StoreCardProps> = ({number,name,type,features,price,currency}) => {
  return (
<div className="w-[39.8214vh] h-[57.1429vh] bg-[rgba(37,37,39,0.5)] mt-[4.2857vh] rounded-[4.2857vh] backdrop-blur-lg shadow-[0_4px_4px_rgba(0,0,0,0.4)]">
    <div className='w-[35.7143vh] h-[35.3571vh] flex justify-center items-center rounded-[2.8571vh] ml-[2.1429vh] mt-[2.1429vh] shadow-md '>
      <Image  
     src={`/assets/images/Store/${type}${number}.${type === "Background" ? "jpg" : "png"}`}
        alt="Image"
        width={900}
        height={800}
        className="w-[35.7143vh] h-[35.3571vh] object-cover object-center rounded-[2.8571vh]"
        quality={100}
       />
    </div>
    <div className='font-medium font-tektur text-white text-[3.2286vh] ml-[3.5714vh] mt-[1.3286vh] leading-[3.5714vh] '>
    {name} <br />
      <div className='text-[#626164] text-[2.1429vh]'>{type}</div>
    </div>
    <div className='ml-[3.5714vh] mt-[0.7143vh] flex flex-row items-center '>
              <Image  
                  src= {`/assets/images/Store/${currency}.svg`}
                  alt="Diamond"
                  width={27}
                  height={27}
                  className="w-[4.8214vh] h-[4.8214vh]" 
              />
              <span className='font-bold text-[3.75vh] font-tektur text-white ml-[1.4286vh] mb-[0.7143vh]'>{price}</span>

             <Button children='BUY' top="0vh" left="3.3571vh" pos="relative w-[19.5914vh] h-[6.3364vh] "/> 
    </div>
  </div>
  )
}

export default ItemCard