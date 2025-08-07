import connectDB from '@/lib/mongoose';
import User from '@/model/Users';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    await connectDB();
    const { username, email, password } = await req.json();

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: 'Email already registered' }, { status: 400 });
    }

    // Create new user
    const newUser = new User({ username, email, password });
    await newUser.save();

    return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Server error', error }, { status: 500 });
  }
}
