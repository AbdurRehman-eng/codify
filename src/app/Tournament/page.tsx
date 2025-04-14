import React from 'react'
import Heading from './ui/TournamentHeading'
import ParticipentCard from './ui/ParticipentCard'
import ProblemCard from './ui/ProblemCard'
import Timer from '../LeaderBoard/ui/Timer'
import AwardContainer from './ui/AwardContainer'



const page = () => {
  return (
    <div className='relative max-w-[1280px] h-fit flex mt-5 '>
       <div className="  h-[452px] w-[374px] mt-[67px]
        rounded-[10px] border-white border-t-[4px] border-r-[1px]">
          <Heading title="Participents"/>
          <ParticipentCard position='1' name='Sparta' points='200'/>
          <ParticipentCard position='2' name='HellKing' points='180'/>
          <ParticipentCard position='3' name='Hafiz' points='140'/>
          <ParticipentCard position='4' name='Panda' points='100'/>
          <ParticipentCard position='5' name='Alex' points='80'/>
        </div>

        <div className='h-[452px] w-[490px] mt-[67px] ml-[86px]'>
        <Heading title="Tournament: 2nd week"/>
        <ProblemCard first title="Palindrome Number" points={30} difficulty="easy" />
        <ProblemCard title="Binary Tree Zigzag" points={50} difficulty="medium" />
        <ProblemCard title="DP Grid Paths" points={100} difficulty="hard" />
        </div>

        <div className='h-[452px] w-[300px] mt-[67px] ml-[10px] flex flex-col'>
          <div className='h-[160px] flex justify-center items-center'>
          <Timer/>
          </div>
          <AwardContainer/>
        </div>
    </div>
  )
}

export default page