import React from 'react'
import Sidebar from './ui/Sidebar'
import Header from './ui/Header'

const page = ({
    children,
}: Readonly<{children : React.ReactNode}>) => {
  return (
    <div className='flex'>
        <Sidebar/>
        <div className='flex flex-col w-[840px]'>
            <Header/>
            {children}
        </div>
    </div>
  )
}

export default page