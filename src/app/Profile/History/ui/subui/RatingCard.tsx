import React from 'react'

interface RatingCardProps {
    week: string;
    problem: string;
    difficulty: string;
    lastResult: string;
    submissions: string;
}

const RatingCard: React.FC<RatingCardProps> = ({ week, problem,difficulty, lastResult,submissions }) => {
  const difficultyClass = difficulty === "Easy" ? "text-[#1CBABA]" 
  : difficulty === "Medium" ? "text-[#FFB700]" 
  : difficulty === "Hard" ? "text-[#F23737]" 
  : "text-white";

  return (
    <div className='flex h-[64px] w-[830px] bg-[#141723] rounded-2xl mt-1
                    shadow-[0_4px_4px_rgba(0,0,0,0.25)] items-center mb-4
                    font-tektur text-[14px] tracking-wider font-medium
                    text-[#9A999E] pointer-events-none px-4'>

      <p className="w-[20%] pl-3">{week}</p>
      <p className="w-[40%] text-white mt-2">{problem} <br /> <span className={`text-[10px] ${difficultyClass}`}>{difficulty}</span>
      </p>
      <p className="w-[20%]">{lastResult}</p>
      <p className="w-[20%] pl-20">{submissions}</p>

    </div>
  )
}

export default RatingCard
