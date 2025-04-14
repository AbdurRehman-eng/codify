import React from 'react'
import Image from 'next/image'


interface ParticipentCardProps {
    position: string;
    name: string;
    points: string;
    }

const ParticipentCard:React.FC<ParticipentCardProps> = ({position,name,points}) => {
  return (
<div
  className="w-[313px] h-[55px] rounded-[16px] bg-[#141723]
  shadow-[0_4px_4px_rgba(0,0,0,0.25)] ml-[25px] mt-[13px]
  flex items-center font-tektur font-medium text-[14px] text-white tracking-[1px]"

>
  <Image
    src="/assets/images/leaderboard/Trophy.svg"
    alt="Trophy"
    width={21}
    height={21}
    className="ml-[20px] mt-[10px]"
  />

  <div className="w-[30px] ml-[14px] mt-[10px]">{position}</div>
  <div className="w-[90px] ml-[15px] mt-[5px]">{name}</div>
  <div className="w-[60px] ml-[54px] mt-[5px]">{points}</div>
</div>
                      
  )
}

export default ParticipentCard