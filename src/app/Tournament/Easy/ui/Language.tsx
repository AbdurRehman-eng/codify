import React from 'react'
import Image from 'next/image'

const Language = () => {
  return (
    <div className='flex'>
      <p className='text-white font-sourceCodePro font-extralight text-[16px] 
      ml-[35px] mt-[20px]'>Language</p>
      
      <div className='font-sourceCodePro font-extralight text-[12px] text-white
        w-[94px] h-[23px] border-[#3E4157] border-[1px] rounded-[10px] 
        mt-[22px] ml-[14px] flex items-center pl-[15px]'>
        Java 7 
        <Image
          src="/assets/images/Tournament/dropdown.svg"
          alt="dropDown"
          width={21}
          height={21}
          className="w-[26px] h-[24px] ml-[8px] mt-[2px]"
        />
      </div>
    </div>
  )
}

export default Language
