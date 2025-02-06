import React from 'react'
interface Item {
    title: string;
}

const SelectorItem:React.FC<Item> = ({title}) => {
  return (
<div className='font-tektur font-medium text-[15px] text-[#8F8D8C] flex ml-8 mt-1 items-center '>
    <div className='bg-[#333237] w-[15px] h-[15px] rounded-[4px] outline outline-1 outline-white/30 
                      shadow-[inset_4px_4px_10px_rgba(0,0,0,0.25)]'></div>
    <p className='ml-3'>{title}</p>
</div>
  )
}

export default SelectorItem