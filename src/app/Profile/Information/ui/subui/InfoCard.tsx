import React from 'react'
 interface InfoCardProps{
    label:string,
    placeHolder:string
 }
const InfoCard: React.FC<InfoCardProps> = ({label,placeHolder}) => {
  return (
<div className='w-[400px] h-[60px] flex flex-row'>
    <div className='w-[75px] text-white text-[16px] font-tektur
     font-medium mb-[10px] self-center mr-[20px] tracking-[1px]'>{label}</div>
    <div className='bg-[#141723] w-[340px] h-[45px] rounded-[16px]
     shadow-lg shadow-black/25 text-[#9A999E] font-tektur text-[16px] 
     pl-[30px] pt-[10px]'>{placeHolder}</div>
</div>
  )
}

export default InfoCard