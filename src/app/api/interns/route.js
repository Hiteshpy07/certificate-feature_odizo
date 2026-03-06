import { connectDB } from '@/lib/mongodb';
import Intern from '@/models/Intern';
import { NextResponse } from 'next/server';

export async function GET() {
  await connectDB();
  const interns = await Intern.find();
  return NextResponse.json(interns);
}

export async function POST(request) {
  await connectDB();
  const body = await request.json();
  try {
    const intern = new Intern(body);
    const saved = await intern.save();
    return NextResponse.json(saved, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}