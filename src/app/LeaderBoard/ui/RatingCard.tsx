import React from 'react'
import Image from 'next/image'

interface RatingCardProps {
    place: string;
    username: string;
    points: string;
    prize: string;
  }

const RatingCard: React.FC<RatingCardProps>= ({place,username,points,prize}) => {
  return (
    <div className='flex h-[64px] w-[990]  bg-[#141723] rounded-2xl 
                    shadow-[0_4px_4px_rgba(0,0,0,0.25)] items-center mb-2
                    font-tektur text-[14px] tracking-wider font-medium
                  text-white pointer-events-none'>
    <Image
                src="/assets/images/leaderboard/Trophy.svg"
                alt="Trophy"
                width={21}
                height={21}
                className="ml-[40px]"
      />
      <p className='ml-[10px] w-[180] '>{place}</p>
      <p className='w-[400] '>{username}</p>
      <p className='w-[250] '>{points}</p>
      <div className='flex justify-center items-center bg-[#1E233A]  w-[73px] h-[35px] rounded-xl shadow-[0_4px_4px_rgba(0,0,0,0.25)]   '>
          <Image  src="/assets/images/leaderboard/Diamond.svg"
                alt="Trophy"
                width={15}
                height={15}
                className="inset-0 mr-1"
           />
          {prize}</div>
</div>
  )
}

export default RatingCard