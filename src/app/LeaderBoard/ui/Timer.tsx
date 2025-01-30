import React from 'react'
import Image from 'next/image'

const Timer = () => {
  return (
    <>
    <div className='flex flex-col self-center pointer-events-none'>
    <Image  src="/assets/images/leaderboard/Alarm Clock.svg"
                    alt="Alarm Clock"
                    width={26}
                    height={26}
                    className="inset-0 mb-1 ml-10"
      />
      <p className='text-center font-tektur font-medium
                    tracking-wider text-[#646C8B] text-[10px]'>Ends in</p>
      <p className='text-center font-tektur font-medium tracking-wider
                  text-white text-[12px]'>00d 00h 43m 51s</p>

    </div>
    </>

  )
}

export default Timer