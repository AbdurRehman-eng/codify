"use client";
import React, { useEffect, useState } from "react";
import Card from '../components/AssetCard';

interface AssetsProps {
  username: string;
  onAssetChange: (pfp: string, background: string) => void; // Callback to update Sidebar assets
}

const Assets = ({ username, onAssetChange }: AssetsProps) => {
  const [assets, setAssets] = useState({
    pfps: [],
    backgrounds: []
  });

  useEffect(() => {
    async function fetchAssets() {
      try {
        const res = await fetch(`/api/users/${username}/assets`);
        const data = await res.json();
        setAssets(data);
      } catch (error) {
        console.error("Failed to fetch assets:", error);
      }
    }
    fetchAssets();
  }, [username]);

  // Handle when the user clicks "Use" on an asset
  const handleUse = async (pfp: string, background: string) => {
    try {
      const res = await fetch(`/api/users/${username}/sidebar`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ pfp, background })
      });

      if (!res.ok) {
        throw new Error('Failed to update assets');
      }

      // Update Sidebar assets immediately after successful update
      onAssetChange(pfp, background); // Pass the updated pfp and background
    } catch (error) {
      console.error("Error updating assets:", error);
    }
  };

  return (
    <div className="ml-[18px] mt-[25px] h-full w-full mb-[20px]">
      <div className="font-tektur font-semibold text-[30px] text-white ml-3">Profile</div>
      <div className="flex ml-2 mt-4">
        {assets.pfps.map((pfp, index) => (
          <Card key={`pfp-${index}`} title={pfp} type='pfp' onUse={handleUse} username={username} />
        ))}
      </div>

      <div className="font-tektur font-semibold text-[30px] text-white ml-3 mt-6">Background</div>
      <div className="flex ml-2 mt-4">
        {assets.backgrounds.map((bg, index) => (
          <Card key={`bg-${index}`} title={bg} type='background' onUse={handleUse} username={username} />
        ))}
      </div>
    </div>
  );
};

export default Assets;
