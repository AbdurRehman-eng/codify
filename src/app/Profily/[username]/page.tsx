"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Sidebar from "../ui/Sidebar";
import Header from "../ui/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Achievements from "./achievements";
import Assets from "./assets";

interface UserData {
  username: string;
  email: string;
}

const ProfilyPage = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [error, setError] = useState<string | null>(null); 
  const params = useParams();

  const username = params?.username as string;

  useEffect(() => {
    if (username) {
      const fetchUserData = async () => {
        try {
          const res = await fetch(`/api/users/${username}`);
          const data = await res.json();
          if (data.error) {
            throw new Error(data.error); 
          }
          setUserData(data); 
        } catch (error: unknown) {
          if (error instanceof Error) {
            setError(error.message);
            toast.error("Failed to load profile");
          } else {
            setError("An unknown error occurred");
            toast.error("An unknown error occurred");
          }
        }
      };

      fetchUserData(); 
    }
  }, [username]); 

  return (
    <div className="flex">
      <Sidebar username={userData?.username || ""} />
      <div className="flex flex-col w-[840px]">
        <Header />
        <div>
          {error && <p className="text-red-500">{error}</p>}
          {userData ? (
            <>
              {/* <Achievements username={username} /> */} 
              <Assets username={username} />
            </>
          ) : (
            <div>Loading...</div> 
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProfilyPage;