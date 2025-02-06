import React from 'react'
import Image from 'next/image'
import Button from '@/app/ui/subui/Button'

const ItemCard = () => {
  return (
    <div className='w-[223px] h-[320px] bg-[rgba(37,37,39,0.5)] mt-6 rounded-3xl backdrop-blur-lg shadow-2xl shadow-black/40 '>
    <div className='w-[200px] h-[198px] flex justify-center items-center rounded-2xl ml-3 mt-3 shadow-lg shadow-black/20 '>
      <Image  
        src={`/assets/images/Store/pfp1.png`}
        alt="Image"
        width={900}
        height={800}
        className="w-[200px] h-[198px] object-cover object-center rounded-2xl"
        quality={100}
       />
    </div>
    <div className='font-medium font-tektur text-white text-[22px] ml-5 mt-2 leading-20px '>
      Sekiro <br />
      <div className='text-[#626164] text-[12px]'>PFP</div>
    </div>
    <div className='ml-5 mt-1 flex flex-row items-center '>
              <Image  
                  src="/assets/images/Store/Diamond.svg"
                  alt="Diamond"
                  width={27}
                  height={27}
                  className="w-[27px] h-[27px]" 
              />
              <span className='font-bold text-[21px] font-tektur text-white ml-2 mb-1'>5</span>
              
             <Button children='Buy' top="5px" left="30px" pos="relative"/> 
    </div>
  </div>
  )
}

export default ItemCard