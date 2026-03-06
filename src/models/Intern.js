import mongoose from 'mongoose';

const internSchema = new mongoose.Schema({
  name:           { type: String, required: true },
  email:          { type: String, required: true, unique: true },
  role:           { type: String, required: true },
  password:       { type: String, required: true },
  assignment1:    { type: String, default: 'not completed' },
  assignment2:    { type: String, default: 'not completed' },
  assignment3:    { type: String, default: 'not completed' },
  final_project:  { type: String, default: 'not completed' },
});

export default mongoose.models.Intern || mongoose.model('Intern', internSchema);