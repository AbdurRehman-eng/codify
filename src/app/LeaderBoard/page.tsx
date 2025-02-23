import React from 'react'
import RatingCard from './ui/RatingCard'
import TopRatingCard from './ui/TopRatingCard';
import Selector from './ui/Selector';
import Timer from './ui/Timer';
import Standing from './ui/Standing';
import Information from './ui/Information';
import { ratings } from '@/../public/assets/data/Ratings';
const page = () => {
  return (
  
<div className='h-full  flex flex-col my-[55px]'>

<div className='h-[80] flex justify-center items-end '>
   <Selector/>
</div>

<div className='h-[450px]  mt-3 flex justify-center items-end gap-32'>
  <div className='w-[244px] h-[357px]  self-end'>
    {ratings.slice(2,3).map((rating) => (
      <TopRatingCard
          key={rating.id}
          place={rating.place}
          username={rating.username}
          points={rating.points}
          prize={rating.prize}
      />
      ))}
  </div>
  <div className='flex flex-col h-full self-start  mt-5 '>
    {ratings.slice(0,1).map((rating) => (
      <TopRatingCard
          key={rating.id}
          place={rating.place}
          username={rating.username}
          points={rating.points}
          prize={rating.prize}
      />
      ))}
  <Timer/>
  </div>
  <div className='w-[244px] h-[357px]  self-end'>
  {ratings.slice(1,2).map((rating) => (
  <TopRatingCard
      key={rating.id}
      place={rating.place}
      username={rating.username}
      points={rating.points}
      prize={rating.prize}
    />
      ))}
  </div>
</div>


<div className='mt-5 h-[120] flex flex-col items-center justify-start'>
  <Standing/>
</div>

<div className='h-full mx-[140px] flex flex-col items-center '> 
  <Information/>
  {ratings.slice(3,).map((rating) => (
  <RatingCard
      key={rating.id}
      place={rating.place}
      username={rating.username}
      points={rating.points}
      prize={rating.prize}
  />
      ))}
  </div>

</div>

  )
}

export default page