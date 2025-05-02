/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import AchievementCard from "../components/AchievementCard";

interface AchievementsProps {
  username: string;
}

const Achievements = ({ username }: AchievementsProps) => {
  const [achievements, setAchievements] = useState<string[]>([]);

  useEffect(() => {
    async function fetchAchievements() {
      try {
        const res = await fetch(`/api/users/${username}/achievements`);
        
        if (!res.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await res.json();
        setAchievements(Array.isArray(data) ? data : []);  
      } catch (error) {
        console.error("Failed to fetch achievements:", error);
        setAchievements([]);
      }
    }
    fetchAchievements();
  }, [username]);

  return (
    <div className="ml-[18px] mt-[25px] h-full w-full mb-[20px]">
      <div className="font-tektur font-semibold text-[30px] text-white ml-3">
        Medals
      </div>
      <div className="flex ml-2 mt-4">
        {achievements.map((achievementName, index) => (
          <AchievementCard key={index} title={achievementName} />
        ))}
      </div>
    </div>
  );
};

export default Achievements;