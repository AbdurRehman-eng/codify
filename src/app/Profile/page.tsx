import React from 'react'
import Sidebar from './ui/Sidebar'
import Header from './ui/Header'
import MainContent from './ui/MainContent'


const page = () => {
  return (
    <div className='flex'>
    <Sidebar/>
    <div className='flex flex-col w-[840px]'>
    <Header/>
    <MainContent/>
    </div>

    </div>
  )
}

export default page