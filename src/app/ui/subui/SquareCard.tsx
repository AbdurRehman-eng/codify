import React from 'react';
import Image from 'next/image'; 
import arrow from '../../../../public/assets/images/cards/arrow.svg';
import Link from 'next/link';

interface SquareCardProps {
  title: string;
  detail: string;
  color: string;
  iconSrc: string;
  bgSrc: string
}
const SquareCard: React.FC<SquareCardProps> = ({ title, detail, color, iconSrc, bgSrc}) => {
  const c:string[] = ['89,230,255','253,207,126']
  const rgbaBorderColor = `rgba(${color}, 0.7)`; 

  return (
    <div
    className={`relative flex h-[294px] w-[273px] flex-shrink-0 
                items-end gap-[62px] overflow-hidden bg-primary
                border-t-[4px] border-r border-b border-l border-solid
                rounded-tl-3xl rounded-bl-3xl rounded-br-3xl 
                rounded-tr-[70] hover:scale-105 hover:transition-all hover:duration-300 hover:ease-in-out group
              `}
    style={{
      borderColor: rgbaBorderColor, 
    }}
  >
  
      {/* Background Image */}
      <Image
        src={bgSrc}
        alt="Card Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-20"
      />

      {/* Card Content */}
      <h1
        className="absolute left-[17px] top-[34px] w-[106px] text-center 
                  font-inter text-[16px] font-normal text-white"
      >
        {title}
      </h1>

      <p
        className="absolute left-[25px] top-[74px] w-[223px] text-left
                  font-sora text-[11px] font-normal text-lightGray"
      >
        {detail}
      </p>

      <Image
        src={iconSrc}
        alt="Card Icon"
        width={48}
        height={48}
        objectFit="cover"
        className="absolute w-[48px] h-[48px] top-[205px] left-[25px]"
      />

      {/* Clickable Link */}
      <Link
        href={'/explore'}
        className="absolute left-[147px] top-[222px] font-sourceCodePro 
                   text-[10px] font-extrabold text-white z-2"
      >
        EXPLORE MORE
      </Link>

      <Image
        src={arrow}
        alt="Arrow"
        className="absolute w-[16px] h-[16px] top-[221px] left-[225px]"
      />

    </div>
  );
};

export default SquareCard;
