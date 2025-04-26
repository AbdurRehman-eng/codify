import React from 'react';
import Link from 'next/link';

interface ProblemCardProps {
  first?: boolean;
  title: string;
  points: number | string;
  difficulty: 'easy' | 'medium' | 'hard';
  id: string;  // Add the problem id as a prop
}

const difficultyStyles = {
  easy: 'text-[#1CBABA] border-[#1CBABA]',
  medium: 'text-[#FFB700] border-[#FFB700]',
  hard: 'text-[#F23737] border-[#F23737]',
};

const ProblemCard = ({ first = false, title, points, difficulty}: ProblemCardProps) => {
  return (
    <Link
      href={`/Tournament/Problem`} // Dynamically link to the problem using its ID
      className={`flex h-[71px] w-[430px] rounded-2xl 
        ${first ? 'mt-[50px]' : 'mt-[23px]'} ml-[30px]
        bg-[#141723] shadow-[0_4px_4px_rgba(0,0,0,0.25)]
        hover:shadow-lg hover:scale-[1.02] transition-all duration-200
        items-center font-tektur text-[14px] tracking-[1px] font-medium
        text-white px-4 border-t-[1px] ${difficultyStyles[difficulty]}`}
    >
      <p className="w-[60%] mt-2 ml-[10px]">
        {title} <br />
        <span className={`text-[10px] font-light leading-[10px] ${difficultyStyles[difficulty]}`}>
          {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
        </span>
      </p>
      <p className="w-[40%] pl-[75px]">{points} Points</p>
    </Link>
  );
};

export default ProblemCard;
