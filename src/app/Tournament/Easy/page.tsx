import React from 'react'
import Details from './ui/Details'
import Language from './ui/Language'
import Image from 'next/image'
import RunButton from './ui/RunButton'
import Terminal from './ui/Terminal'


const page = () => {
  return (
    <div className='h-fit flex  max-w-[1280px] mb-[20px]'>
    <div className='w-[386px] h-full mt-[86px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] 
    bg-[#141723] rounded-tr-[20px] rounded-br-[20px] text-[#C4C5C8] 
    font-sourceCodePro font-light text-[13px] pl-[20px] pt-[20px] pr-[10px]'>
      <Details/>
    </div>
  
      <div className='w-[873px] h- mt-[86px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] 
      bg-[#141723] rounded-tl-[20px] rounded-bl-[20px] ml-[14px] flex flex-col'>
        <div className='w-full h-[60px] bg-[#1E233A] shadow-[0_4px_4px_rgba(0,0,0,0.25)] 
        rounded-[20px] rounded-tr-[0px] flex flex-row '>
          <Language/>
                  <Image
                    src="/assets/images/Tournament/reset.svg"
                    alt="reset"
                    width={21}
                    height={21}
                    className="w-[18px] h-[18px] ml-[23px] mt-[25px] cursor-pointer"
           />
           <div className='font-sourceCodePro text-white font-normal
           text-[16px] w-[221px] mt-[24px] ml-[60px] mr-[160px]'>Time Remaining: 43m 51s</div>
           <RunButton/>
        </div>
        <Terminal/>
      </div>
    </div>
  )
}

export default page