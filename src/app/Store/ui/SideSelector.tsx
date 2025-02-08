import React from 'react'
import Image from 'next/image'
import SelectorItem from './subui/SelectorItem'
import Button from '@/app/ui/subui/Button'



const SideSelector = () => {
  return (
    <div className='bg-[rgba(37,37,39,0.4)] w-[48.3929vh] h-[89.2857vh] mt-[14.2857vh] rounded-[4.2857vh] flex flex-col
                      shadow-[0_4px_6px_rgba(0,0,0,0.4)] backdrop-blur-md'>
      <p className='font-tektur font-bold text-[3.5714vh] text-white ml-[5vh] mt-[5vh] mb-[2.8571vh]'>Categories</p>
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
                        className="w-[39.29vh] h-[2.14vh] ml-[3.5714vh] mt-[2.8571vh]"
              />
      <p className='font-tektur font-bold text-[3.5714vh] text-white ml-[5vh] mt-[2.1429vh] mb-[2.8571vh]'>Whats new!</p>
      <SelectorItem title="Recent"/>
      <SelectorItem title="Most Popular"/>
      <SelectorItem title="Owned"/>
      <SelectorItem title="Buy Coins"/>
      <Button children='Apply Filters' top="3.5714vh" left="8.9286vh" pos="relative w-[25.8929vh] h-[8.0357vh]"/>
      </div>

  )
}

export default SideSelector