"use client"
import React, {useState} from 'react'
import Image from 'next/image';
interface Item {
    title: string;
}
const SelectorItem:React.FC<Item> = ({title}) => {
  const [isActive, setIsActive] = useState(false);
  return (
<div className='font-tektur font-medium text-[2.6786vh] text-[#8F8D8C] flex ml-[5.7143vh] mt-[0.7143vh] items-center '>
    <div  onClick={() => setIsActive(!isActive) } 
          className={`bg-[#333237] w-[2.6786vh] h-[2.6786vh] rounded-[0.7143vh]
                        outline outline-[0.1786vh] outline-white/30 
                        shadow-[inset_4px_4px_10px_rgba(0,0,0,0.25)] cursor-pointer
                        ${isActive? "bg-[#FFA500] outline-orange-300" : ""}` }>
                                   <Image  
                                          src= {`/assets/images/Store/tick.svg`}
                                          alt="tick"
                                          width={8}
                                          height={5}
                                          className={`w-[5.429vh] h-[5.429vh] pb-[1.429vh] ${isActive? "opacity-100": "opacity-0"}`}
                                 />
                        </div>
    <p className='ml-[2.1429vh]'>{title}</p>
</div>
  )
}

export default SelectorItem