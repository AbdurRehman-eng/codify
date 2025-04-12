import React from 'react'
import Card from './subui/Card'
const MainContent = () => {
  return (
    <div className='ml-[18px] mt-[25px] h-full w-full mb-[20px]'>
    <div className='font-tektur font-semibold text-[30px] text-white ml-3'>Profile</div>
    
    <div className='flex ml-2 mt-4 '>
    <Card title='Sekiro' type ='pfp'/>
    <Card title='Hollow Knight' type ='pfp'/>
    <Card title='Fire Hashira' type ='pfp'/>
    <Card title='Gengar' type ='pfp'/>
    </div>

    <div className='font-tektur font-semibold text-[30px] text-white ml-3 mt-6'>Background</div>
    <div className='flex ml-2 mt-4 '>
    <Card title='Fortnite' type ='background'/>
    <Card title='The Witcher IV' type ='background'/>
    <Card title='Peace' type ='background'/>
    <Card title='War On Stars' type ='background'/>
    </div>
</div>
  )
}

export default MainContent