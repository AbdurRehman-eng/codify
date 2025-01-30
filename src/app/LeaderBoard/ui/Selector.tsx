import React from 'react'

const Selector = () => {
  return (
<div className='flex  flex-row w-[400] h-[45] bg-[#1D2237] rounded-2xl  shadow-[0_4px_4px_rgba(0,0,0,0.25)] pointer-events-none'>
    <div className='bg-[#272D42] text-white font-tektur  tracking-wider shadow-[0_4px_4px_rgba(0,0,0,0.25)] w-[200] text-center font-medium text-[14px] rounded-2xl m-[0.7vh] pt-2 '>Weekly</div>
    <div className=' text-[#5A637F] font-tektur w-[200] text-center  tracking-wider font-medium text-[14px] rounded-2xl m-[0.7vh] pt-2'>Overall</div>
</div>
  )
}

export default Selector