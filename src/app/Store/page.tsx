import React from 'react'
import Image from 'next/image'
import ItemCard from './ui/ItemCard'
import SideSelector from './ui/SideSelector'
import SlidingCard from './ui/SlidingCard'
import SocialIcons from '../ui/subui/SocialIcons'
import { store } from '@/../public/assets/data/store';

const page = () => {
  return (
    <>
    <div className='relatvie w-screen min-h-screen flex'>
        <div className="absolute inset-0 w-full h-[133vh]">
      <Image
        src="/assets/images/Store/Background.png"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className=""
      />
         </div>

      <div className=' w-[88.7857vh] min-h-screen flex justify-center items-start '>
        <SideSelector/>
      </div>

      <div className='w-full h-full flex flex-col'> 
        <div className='w-full h-[62vh] flex justify-start items-center '>
        <SlidingCard/>
        </div>
        <div className=' w-full h-[70.9286vh] flex flex-row gap-[6.9286vh] justify-start pl-[10.9286vh] '>
        {store.slice(0, 3).map((item) => (
          <ItemCard
            key={item.id}
            number={item.id}
            name={item.name}
            type={item.type}
            price={item.price}
            currency={item.currency}
          />
        ))}

        </div>
      </div>
    </div>
    

    </>
  )
}

export default page
