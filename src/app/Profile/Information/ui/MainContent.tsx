import React from 'react'
import InfoCard from './subui/InfoCard'

const MainContent = () => {
  return (
    <div className='ml-[18px] mt-[25px] h-[400px] w-full mb-[20px]'>
    <div className='font-tektur font-semibold text-[30px] text-white ml-3'>Personal Info</div>
    
    <div className='w-[500px] h-[500px] flex flex-col ml-[65px] mt-[25px]'>
        <InfoCard label="Name" placeHolder="Muhammad Bakhat Nasar" />
        <InfoCard label="U-Name" placeHolder="Klaxoon" />
        <InfoCard label="Email" placeHolder="bakhatnasar246@gmail.com" />
        <InfoCard label="Location" placeHolder="Nust-h12" />
    </div>
     
    </div>
  )
}

export default MainContent