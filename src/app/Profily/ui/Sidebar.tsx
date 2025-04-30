"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface SidebarProps {
  username: string;
}

const Sidebar: React.FC<SidebarProps> = ({ username }) => {
  const [userAssets, setUserAssets] = useState({
    pfp: "/assets/images/Profile/SideBar/hollowknight.png",  // Default if not set
    background: "/assets/images/Profile/SideBar/fortnite.jpg",  // Default if not set
  });

  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    async function fetchUserAssets() {
      try {
        const res = await fetch(`/api/users/${username}/sidebar`);

        if (!res.ok) {
          throw new Error('Failed to fetch assets');
        }
        const data = await res.json();
        if (data.pfp) {
          setUserAssets((prevAssets) => ({
            ...prevAssets,
            pfp: `/assets/images/Store/${data.pfp.trim().toLowerCase()}.png`,
          }));
        }

        if (data.background) {
          setUserAssets((prevAssets) => ({
            ...prevAssets,
            background: `/assets/images/Store/${data.background.trim().toLowerCase()}.jpg`,
          }));
        }
      } catch (error) {
        console.error('Error fetching user assets:', error);
        setError('Failed to load user assets.');
      }
    }

    fetchUserAssets();
  }, [username]);



  return (
    <div className="w-[320px] h-[482px] mt-[144px] ml-[66px] mb-[40px] flex flex-col items-center">
      {error && <p className="text-red-500">{error}</p>}

      <div className="w-full h-[107px] rounded-[12px] relative">
        <Image
          src={userAssets.background}
          alt="User Background"
          width={320}
          height={107}
          className="w-full h-[107px] rounded-[12px] object-cover object-center"
          quality={100}
        />
      </div>

      <div className="w-[96px] h-[89px] rounded-[100px] outline outline-2 outline-black -mt-12 flex items-center justify-center z-10">
        <Image
          src={userAssets.pfp}
          alt="Profile Image"
          width={96}
          height={89}
          className="w-full h-full object-cover rounded-[100px]"
          quality={100}
        />
      </div>

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


