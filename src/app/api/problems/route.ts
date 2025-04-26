/* eslint-disable @typescript-eslint/no-unused-vars */
import dbConnect from "@/lib/mongodb";
import Problem from "@/models/problem";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();

  try {
    const problems = await Problem.find({});
    return NextResponse.json(problems);
  } catch (err) {
    return NextResponse.json({ message: "Failed to fetch problems" }, { status: 500 });
  }
}
