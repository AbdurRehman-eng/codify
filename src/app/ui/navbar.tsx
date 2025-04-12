"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const router = useRouter()
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="bg-primary h-[88px] fixed top-0 left-0 shadow-lg border-[0.3571vh] border-[#212023] z-20 w-full flex items-center">
            
            {/* Left Section (Brand) */}
            <div className="flex items-center ml-[41px] hover:cursor-pointer" onClick={() => {router.push('/')}}>
                <div className="red w-[110px] h-[42px] text-[32px] font-medium font-tektur text-white">
                    Codify
                </div>
            </div>

            {/* Search Bar */}
            <div className="ml-[100px]">
                <div className="bg-[linear-gradient(180deg,#161618_0%,#242426_90%,#242426_100%)] 
                    w-[450px] h-[41px] rounded-[12px] border-[0.3571vh] border-[#373639] flex items-center px-3">
                    <Image  
                        src={`/assets/images/navbar/search.svg`}
                        alt="Search Icon"
                        width={20}
                        height={20}
                        className="w-[20px] h-[20px]"
                        quality={100}
                    />
                    <span className="text-[#4B4A4D] font-tektur font-normal text-[15px] ml-3">
                        Search Users
                    </span>
                </div>
            </div>

     
    
                <div className="relative ml-8 " ref={dropdownRef}>
                    <button 
                        className="text-white text-[14px] font-tektur font-light flex items-center"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                       More
                        <Image  
                            src={`/assets/images/navbar/dropdown.svg`}
                            alt="Dropdown Icon"
                            width={26}
                            height={16}
                            className="w-[26px] h-[16px] ml-[2px]"
                            quality={100}
                        />
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute left-1 mt-1 w-36 bg-primary text-black border  rounded-md shadow-lg font-tektur text-[14px]">
                            <ul className="py-2">
                                <li>
                                    <Link href="/Profile/Achievements" className="block px-4 py-2 hover:bg-gray-100 hover:text-primary text-white" onClick={()=>setIsDropdownOpen(false)}>Profile</Link>
                                </li>
                                <li>
                                    <Link href="/Store" className="block px-4 py-2 hover:bg-gray-100 hover:text-primary text-white" onClick={()=>setIsDropdownOpen(false)}>Store</Link>
                                </li>
                                <li>
                                    <Link href="/LeaderBoard" className="block px-4 py-2 hover:bg-gray-100 hover:text-primary text-white" onClick={()=>setIsDropdownOpen(false)}>Leaderboard</Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>

                <div className="w-[96px] h-[26px] ml-[75px] text-white text-[12px] font-tektur flex">
                <Image  
                            src={`/assets/images/navbar/Trophy.svg`}
                            alt="Trophy Icon"
                            width={24}
                            height={24}
                            className="w-[24px] h-[24px] ml-[2px] mr-[10px]"
                            quality={100}
                        />
                      <span className="mt-[3px]"> 30 Points</span> 
                </div>
                <div className="w-[96px] h-[26px] ml-[35px] text-white text-[12px] font-tektur flex">
                <Image  
                            src={`/assets/images/navbar/Diamond.svg`}
                            alt="Diamond Icon"
                            width={22}
                            height={22}
                            className="w-[22px] h-[22px] ml-[2px] mr-[10px]"
                            quality={100}
                        />
                      <span className="mt-[3px]"> 2 Gems</span> 
                    
                </div>

                       <Image  
                            src={`/assets/images/navbar/notification.svg`}
                            alt="Notification Icon"
                            width={22}
                            height={22}
                            className="w-[25px] h-[24px] ml-[28px] mr-[10px]"
                            quality={100}
                        />
                         <Image  
                            src={`/assets/images/navbar/User.svg`}
                            alt="User Icon"
                            width={22}
                            height={22}
                            className="w-[40px] h-[40px] ml-[28px] mr-[10px]"
                            quality={100}
                        />
            </div>
    );
};

export default Navbar;
