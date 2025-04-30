import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb"; 
import User from "@/models/users";

export async function GET(req: NextRequest) {
  try {
    await dbConnect();


    const url = new URL(req.url); 
    const username = url.pathname.split("/").pop();  

    if (!username) {
      return NextResponse.json({ error: "Username is required" }, { status: 400 });
    }
    const user = await User.findOne({ username });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json({ username: user.username, email: user.email }, { status: 200 });
  } catch (error) {
    // Error handling
    console.error("Error fetching user:", error);
    return NextResponse.json({ error: "Failed to fetch user data" }, { status: 500 });
  }
}
