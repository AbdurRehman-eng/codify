import React from 'react'
import Image from 'next/image'

const RunButton = () => {
  return (
    <button className='bg-[#161618] w-[114px] h-[32px] rounded-[5px] mt-[20px] text-[12px]
    font-tektur font-normal text-[#B3FFED]  flex items-center pl-[16px]'>
      RUN CODE
      <Image
              src="/assets/images/Tournament/run.svg"
              alt="run"
              width={21}
              height={21}
              className="w-[20px] h-[20px] ml-[10px] "
     />
    </button>
  )
}

export default RunButton