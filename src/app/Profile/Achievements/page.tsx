import React from 'react';
import AchievementCard from './ui/AchievementCard';

const Achievements = () => {
  return (
    <div className="ml-[18px] mt-[25px] h-full w-full mb-[20px]">
      <div className="font-tektur font-semibold text-[30px] text-white ml-3">Medals</div>

      <div className="flex ml-2 mt-4">
        <AchievementCard title="Multi-Chainer" />
        <AchievementCard title="Stashh-Crow" />
        <AchievementCard title="Stashh-Whale" />
        <AchievementCard title="Red-Eye" />
      </div>
    </div>
  );
};

export default Achievements;
