
import { NextResponse } from 'next/server';
import connectionToDb from '@/lib/mongoose';
import User from '@/model/Users';

export async function POST(req: Request) {
  try {
    await connectionToDb();
    const { email, password } = await req.json();

    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    const response = NextResponse.json({ message: 'Login successful', user });

    response.cookies.set('authToken', user._id.toString(), {
      httpOnly: true,
      secure: true,
      path: '/',
      maxAge: 60 * 60 * 24, // 1 day
    });

    return response;
  } catch (error) {
    return NextResponse.json({ message: 'Server error', error }, { status: 500 });
  }
}
