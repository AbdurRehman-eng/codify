import React from 'react'
import Image from 'next/image'
import SelectorItem from './subui/SelectorItem'
import Button from '@/app/ui/subui/Button'



const SideSelector = () => {
  return (
    <div className='bg-[rgba(37,37,39,0.4)] w-[271px] h-[500px] mt-20 rounded-3xl flex flex-col
                      shadow-[0_4px_6px_rgba(0,0,0,0.4)] backdrop-blur-md'>
      <p className='font-tektur font-bold text-[20px] text-white ml-7 mt-7 mb-4'>Categories</p>
      <SelectorItem title="Gold"/>
      <SelectorItem title="Diamond"/>
      <SelectorItem title="Pfp"/>
      <SelectorItem title="Border"/>
      <SelectorItem title="Background"/>
            <Image
                        src="/assets/images/Store/line.svg"
                        alt="line"
                        width={220}
                        height={12}
                        style={{ objectFit: "cover" }}
                        className="ml-5 mt-4"
              />
      <p className='font-tektur font-bold text-[20px] text-white ml-7 mt-3 mb-4'>Whats new!</p>
      <SelectorItem title="Recent"/>
      <SelectorItem title="Most Popular"/>
      <SelectorItem title="Owned"/>
      <SelectorItem title="Liked"/>
      <Button children='Apply Filters' top="20px" left="50px" pos="relative"/>
      </div>

  )
}

export default SideSelector