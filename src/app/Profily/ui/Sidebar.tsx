"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface SidebarProps {
  username: string;
  initialPfp: string;
  initialBackground: string;
}

const Sidebar = ({ username, initialPfp, initialBackground }: SidebarProps) => {
  const [assets, setAssets] = useState({
    pfp: initialPfp,
    background: initialBackground
  });

  useEffect(() => {
    setAssets({
      pfp: initialPfp,
      background: initialBackground
    });
  }, [initialPfp, initialBackground]);

  return (
    <div className="w-[320px] h-[482px] mt-[144px] ml-[66px] mb-[40px] flex flex-col items-center">
      {/* Background Image - Fixed to show full image */}
      <div className="w-full h-[107px] rounded-[12px] relative overflow-hidden">
        <Image
          src={assets.background}
          alt="Profile background"
          fill
          className="object-cover"
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      {/* Profile Picture - Fixed to fill circle completely */}
      <div className="w-24 h-24 rounded-full border-2 border-black -mt-12 z-10 relative overflow-hidden">
        <Image
          src={assets.pfp}
          alt="Profile picture"
          fill
          className="object-cover"
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      {/* Rest of your sidebar content */}
      <div className="text-white text-[28px] font-semibold mt-1 font-tektur">
        {username}
      </div>
      <div className="w-full h-[20px] font-tektur text-[12px] flex">
        <div className="text-[#908F92] flex flex-row ml-5">
          <Image
            src="/assets/images/Profile/SideBar/followerIcon.svg"
            alt="Icon"
            width={30}
            height={17}
            className="w-[30px] h-[17px] object-cover mr-1"
            quality={100}
          />
          Followers<span className="text-white ml-1">390</span>
        </div>
        <div className="text-[#908F92] flex flex-row ml-[50px]">
          <Image
            src="/assets/images/Profile/SideBar/RankIcon.svg"
            alt="Icon"
            width={19}
            height={15}
            className="w-[22px] h-[15px] object-cover mr-2"
            quality={100}
          />
          Rank<span className="text-white ml-1">#2</span>
        </div>
      </div>

      <div className="text-[#9A999E] font-tektur font-light text-[12px] h-fit w-[294px] leading-[16px] mt-2">
        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into.
      </div>

      <div className="w-full h-[26px] mt-6 font-tektur flex font-medium text-[12px] ml-2">
        <button className="h-[26px] w-[90px] bg-[#B3FFED] rounded-[5px] flex ">
          <Image
            src="/assets/images/Profile/SideBar/ProfileIcon.svg"
            alt="Icon"
            width={20}
            height={19}
            className="w-[20px] h-[19px] object-cover mr-[5px] ml-[6px] mt-[3px]"
            quality={100}
          />
          <p className="mt-1"> Follow</p>
        </button>
        <button className="h-[26px] w-[90px] bg-[#161618] rounded-[5px] flex ml-2 ">
          <Image
            src="/assets/images/Profile/SideBar/PenIcon.svg"
            alt="Icon"
            width={20}
            height={19}
            className="w-[20px] h-[19px] object-cover mr-[5px] ml-[6px] mt-[3px]"
            quality={100}
          />
          <p className="mt-1 text-[#B3FFED]"> Edit Bio</p>
        </button>

        <button className="h-[26px] w-[50px] bg-[#161618] rounded-[5px] flex ml-2 ">
          <Image
            src="/assets/images/Profile/SideBar/GlobeIcon.svg"
            alt="Icon"
            width={20}
            height={20}
            className="w-[20px] h-[20px] object-cover mr-[5px] ml-[15px] mt-[3px]"
            quality={100}
          />
        </button>
        <button className="h-[26px] w-[50px] bg-[#161618] rounded-[5px] flex ml-2 ">
          <Image
            src="/assets/images/Profile/SideBar/TwitterIcon.svg"
            alt="Icon"
            width={20}
            height={20}
            className="w-[20px] h-[20px] object-cover mr-[5px] ml-[15px] mt-[3px]"
            quality={100}
          />
        </button>
      </div>

      <div className="w-[294px] h-[68px] bg-[#161618] mt-5 mr-3 rounded-[10px] flex">
        <Image
          src="/assets/images/Profile/SideBar/crown.svg"
          alt="Icon"
          width={37}
          height={36}
          className="w-[37px] h-[36px] object-cover mr-[5px] ml-[8px] mt-[13px]"
          quality={100}
        />
        <div className="w-full h-full text-[12px] font-light font-tektur text-[#9A999E] mt-[13px] ml-[4px] leading-[18px]">
          No. of tournaments participated: <span className="ml-3">10</span>
          <br />
          Ranked in Top 3:
          <span className="ml-3 text-[#B3FFED]">03</span>
        </div>
      </div>
      
    </div>
  );
};

export default Sidebar;


