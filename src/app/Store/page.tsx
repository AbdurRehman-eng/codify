import React from 'react'
import Image from 'next/image'
import ItemCard from './ui/ItemCard'
import SideSelector from './ui/SideSelector'
import SlidingCard from './ui/SlidingCard'

const page = () => {
  return (
    <>
    <div className=' w-screen h-[132.1429vh] flex '>
      <div className=' w-[89.2857vh] h-full flex justify-center items-start '>
        <SideSelector/>
      </div>
      <div className='w-full h-full flex flex-col'> 
        <div className='w-full h-[62.5vh] flex justify-start items-center '>
        <SlidingCard/>
        </div>
        <div className=' w-full h-[71.4286vh] flex flex-row gap-9 justify-start pl-16'>
          <ItemCard/>
          <ItemCard/>
          <ItemCard/>

        </div>
      </div>

    </div>

    </>
  )
}

export default page