import React from 'react'
import Image from 'next/image'

const SlidingCard = () => {
  return (
    <div className='w-[800px] h-[270px] mt-20 ml-10 rounded-3xl outline outline-1
    outline-black shadow-[inset_0_0_10px_rgba(0,0,0,0.5),0_4px_10px_rgba(0,0,0,0.25)]'>
       <Image
                 src="/assets/images/Store/background1.jpg"
                 alt="Background Image"
                 width={900}
                 height={800}
                 className="w-[800px] h-[270px] object-cover object-center rounded-3xl"
                 quality={100}
       />
    </div>
  )
}

export default SlidingCard