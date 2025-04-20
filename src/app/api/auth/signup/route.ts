import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
import User from '@/models/users';
import dbConnect from '@/lib/mongodb'

export async function POST(request: Request) {
  try {
    const { name, email, password, confirmPassword } = await request.json();

    const isValidEmail = (email: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    if (!name || !email || !password || !confirmPassword) {
      return NextResponse.json({ message: 'Please fill all fields' }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ message: 'Please enter a valid email' }, { status: 400 });
    }

    if (confirmPassword !== password) {
      return NextResponse.json({ message: 'Password and confirm password do not match' }, { status: 400 });
    }

    if (password.length < 6) {
      return NextResponse.json({ message: 'Password must be at least 6 characters' }, { status: 400 });
    }

    await dbConnect();
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error) {
    console.error('Signup Error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
