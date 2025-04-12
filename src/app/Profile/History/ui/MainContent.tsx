import React from 'react'
import Information from './subui/Information'
import RatingCard from './subui/RatingCard'

const MainContent = () => {
  return (
    <div className='ml-[18px] mt-[25px] h-full w-full mb-[20px]'>
    <div className='font-tektur font-semibold text-[30px] text-white ml-3'>Problems History</div>
    <Information/>
    <RatingCard week='5' problem='Palindrome Number' difficulty='Easy' lastResult='Accepted' submissions='01'/>
    <RatingCard week='5' problem='Asteroid Collision' difficulty='Medium' lastResult='Wrong Answer' submissions='05'/>
    <RatingCard week='3' problem='Removing Stars From a String' difficulty='Medium' lastResult='Accepted' submissions='02'/>
    <RatingCard week='2' problem='Add Digits' difficulty='Easy' lastResult='Time Limit Exceeded' submissions='06'/>
    <RatingCard week='2' problem='Matrix Rotation' difficulty='Hard' lastResult='Accepted' submissions='04'/>

</div>
  )
}

export default MainContent