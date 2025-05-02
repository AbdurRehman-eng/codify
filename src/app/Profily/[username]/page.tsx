"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Sidebar from "../ui/Sidebar";
import Header from "../ui/Header";
import Assets from "./assets";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface UserData {
  username: string;
  email: string;
}

const ProfilyPage = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const params = useParams();
  const username = params?.username as string;
  const [assets, setAssets] = useState({
    pfp: "/default-pfp.png",
    background: "/default-bg.jpg"
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
      
        const [userRes, assetsRes] = await Promise.all([
          fetch(`/api/users/${username}`),
          fetch(`/api/users/${username}/sidebar`)
        ]);

        const [userData, assetsData] = await Promise.all([
          userRes.json(),
          assetsRes.json()
        ]);

        if (!userRes.ok) throw new Error(userData.error || 'Failed to fetch user');
        if (!assetsRes.ok) throw new Error(assetsData.error || 'Failed to fetch assets');

        setUserData(userData);
        setAssets({
          pfp: assetsData.pfpUrl || "/default-pfp.png",
          background: assetsData.backgroundUrl || "/default-bg.jpg"
        });
      } catch (error) {
        console.error("Fetch error:", error);
        toast.error("Failed to load profile data");
      } 
    };

    if (username) fetchData();
  }, [username]);

  const handleAssetChange = (type: 'pfp' | 'background', assetPath: string) => {
    const extension = type === 'pfp' ? 'png' : 'jpg';
    setAssets(prev => ({
      ...prev,
      [type]: assetPath 
        ? `/assets/images/Store/${assetPath}.${extension}`
        : (type === 'pfp' ? '/default-pfp.png' : '/default-bg.jpg')
    }));
  };



  return (
    <div className="flex min-h-screen bg-[#121113]">
      <Sidebar 
        username={username} 
        initialPfp={assets.pfp}
        initialBackground={assets.background}
        key={`sidebar-${assets.pfp}-${assets.background}`}
      />
      
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-4 flex-1">
          {userData ? (
            <Assets 
              username={username} 
              onAssetChange={handleAssetChange} 
            />
          ) : (
            <div className="text-white text-center py-8">
              Failed to load profile data
            </div>
          )}
        </main>
      </div>
      
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default ProfilyPage;