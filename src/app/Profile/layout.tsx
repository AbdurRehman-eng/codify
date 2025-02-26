import React from 'react';
import Sidebar from './ui/Sidebar';
import Header from './ui/Header';

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      {/* Sidebar (Fixed) */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex flex-col w-[840px]">
        {/* Header (Fixed) */}
        <Header />

        {/* Dynamic Content (Changes Based on Route) */}
        <div className="mt-5">{children}</div>
      </div>
    </div>
  );
};

export default ProfileLayout;
