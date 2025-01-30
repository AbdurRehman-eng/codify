import React from 'react'
import Image from 'next/image'

const Standing = () => {
  return (
    <div className='flex items-center h-[40px] w-fit px-5 bg-[#1D2237] 
    rounded-xl shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-[#646C8B]
    font-tektur tracking-wider font-medium text-[12px] mt-4 pointer-events-none'>
   You earned {" "}
    <Image  src="/assets/images/leaderboard/Diamond.svg"
      alt="Trophy"
      width={15}
      height={15}
      className="inset-0 ml-1"
     />
    <span className='ml-1 text-white'> 90</span>
    <p className='ml-1'>today and are ranked 5th out of</p>  
    <span className='ml-1 text-white'>30 users</span>
    </div>
  )
}

export default Standing