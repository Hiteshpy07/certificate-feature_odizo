import { connectDB } from '@/lib/mongodb';
import Intern from '@/models/Intern';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  await connectDB();
  try {
    const intern = await Intern.findById(params.id);
    if (!intern) return NextResponse.json({ message: 'Not found' }, { status: 404 });
    return NextResponse.json(intern);
  } catch {
    return NextResponse.json({ message: 'Invalid ID' }, { status: 400 });
  }
}

export async function PATCH(request, { params }) {
  await connectDB();
  const body = await request.json();
  try {
    const updated = await Intern.findByIdAndUpdate(params.id, body, { new: true });
    if (!updated) return NextResponse.json({ message: 'Not found' }, { status: 404 });
    return NextResponse.json(updated);
  } catch {
    return NextResponse.json({ message: 'Invalid ID' }, { status: 400 });
  }
}

export async function DELETE(request, { params }) {
  await connectDB();
  try {
    await Intern.findByIdAndDelete(params.id);
    return NextResponse.json({ message: 'Deleted successfully' });
  } catch {
    return NextResponse.json({ message: 'Invalid ID' }, { status: 400 });
  }
}