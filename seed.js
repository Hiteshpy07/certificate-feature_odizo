import mongoose from 'mongoose';
import { config } from 'dotenv';
import Intern from './src/models/Intern.js';

config({ path: '.env.local' });   // Next.js uses .env.local, not .env

const data = [
  {
    name: "Alex Rivera",
    email: "alex.rivera@company.com",
    role: "Frontend Developer Intern",
    password: "hashed_password_789",
    assignment1: "completed",
    assignment2: "completed",
    assignment3: "completed",
    final_project: "completed"
  },
  {
    name: "Samira Khan",
    email: "samira.khan@company.com",
    role: "Data Science Intern",
    password: "hashed_password_456",
    assignment1: "completed",
    assignment2: "completed",
    assignment3: "completed",
    final_project: "not completed"
  },
  {
    name: "Jordan Smith",
    email: "jordan.smith@company.com",
    role: "UX Research Intern",
    password: "hashed_password_123",
    assignment1: "completed",
    assignment2: "not completed",
    assignment3: "completed",
    final_project: "not completed"
  }
];

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI);
  await Intern.deleteMany({});
  await Intern.insertMany(data);
  console.log('✅ Database seeded successfully!');
  mongoose.connection.close();
}

seed().catch(console.error);