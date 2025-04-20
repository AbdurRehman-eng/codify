"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Loader } from "lucide-react";

const Navbar = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const avatarFallback = session?.user?.name?.charAt(0).toUpperCase() ?? "?";

  return (
    <div className="bg-primary h-[88px] fixed top-0 left-0 shadow-lg border-[0.3571vh] border-[#212023] z-20 w-full flex items-center">
      <div className="flex items-center ml-[41px] hover:cursor-pointer" onClick={() => { router.push('/') }}>
        <div className="red w-[110px] h-[42px] text-[32px] font-medium font-tektur text-white">
          Codify
        </div>
      </div>

      <div className="ml-[160px]">
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



      <div className="w-[96px] h-[26px] ml-[75px] text-white text-[12px] font-tektur flex">
        <Image  
          src={`/assets/images/navbar/Trophy.svg`}
          alt="Trophy Icon"
          width={24}
          height={24}
          className="w-[24px] h-[24px] ml-[2px] mr-[10px]"
          quality={100}
        />
        <span className="mt-[3px]">30 Points</span> 
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
        <span className="mt-[3px]">2 Gems</span> 
      </div>

      <Image  
        src={`/assets/images/navbar/notification.svg`}
        alt="Notification Icon"
        width={22}
        height={22}
        className="w-[25px] h-[24px] ml-[28px] mr-[10px]"
        quality={100}
      />

      {status === "loading" ? (
        <div className="ml-[28px] mr-[10px]">
          <Loader className="animate-spin text-white" />
        </div>
      ) : session ? (
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger className="outline-none ml-[28px] mr-[10px]">
            <Avatar className="size-10 hover:opacity-75 transition cursor-pointer">
              <AvatarImage
                src={session.user?.image ?? ""}
                alt="User Avatar"
                className="size-10"
              />
              <AvatarFallback className="bg-sky-900 text-white">
                {avatarFallback}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-[#161618] border border-[#373639] rounded-lg shadow-lg text-white">
            <DropdownMenuItem onClick={() => router.push("/Profile/Achievements")}>Profile</DropdownMenuItem>
            <DropdownMenuItem onClick={() => signOut({ callbackUrl: "/sign-in" })}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Image
          src={`/assets/images/navbar/User.svg`}
          onClick={() => router.push("/sign-up")}
          alt="User Icon"
          width={22}
          height={22}
          className="w-[40px] h-[40px] ml-[28px] mr-[10px] cursor-pointer"
          quality={100}
        />
      )}
    </div>
  );
};

export default Navbar;
