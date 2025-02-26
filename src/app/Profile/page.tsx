"use client"; // Make sure this is a client component

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/profile/achievements"); // Redirect to Achievements by default
  }, [router]);

  return null; // Don't render anything
};

export default ProfilePage;
