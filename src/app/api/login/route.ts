import { NextResponse } from 'next/server';
import connectionToDb from '@/lib/mongoose';
import User from '@/model/Users';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
  try {
    await connectionToDb();
    const { email, password } = await req.json();

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    // Compare hashed password with entered password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    const response = NextResponse.json({ 
      message: 'Login successful', 
      user: { id: user._id, username: user.username, email: user.email } // don't send password
    });

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
