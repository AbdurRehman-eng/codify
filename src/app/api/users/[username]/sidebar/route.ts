import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/models/users";  // Import the User model

export async function GET(req: NextRequest) {
  try {
    await dbConnect();

    const url = new URL(req.url);
    const pathParts = url.pathname.split('/');
    const username = pathParts[3];  // Extract the username from the URL

    if (!username) {
      return NextResponse.json({ error: "Username is required" }, { status: 400 });
    }

    const user = await User.findOne({ username }).select('pfp background');  // Only fetch pfp and background

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Return the user's current selected assets (profile picture and background)
    return NextResponse.json({ pfp: user.pfp, background: user.background }, { status: 200 });

  } catch (error) {
    console.error("Error fetching user assets:", error);
    return NextResponse.json({ error: "Failed to fetch assets" }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    await dbConnect();
    const url = new URL(req.url);
    const username = url.pathname.split('/')[3]; // Get the username from URL

    if (!username) {
      return NextResponse.json({ error: "Username is required" }, { status: 400 });
    }

    const { pfp, background } = await req.json();

    const user = await User.findOne({ username });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Update pfp and background
    user.pfp = pfp || user.pfp;
    user.background = background || user.background;
    await user.save();

    return NextResponse.json({ message: "Assets updated successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error updating assets:", error);
    return NextResponse.json({ error: "Failed to update assets" }, { status: 500 });
  }
}