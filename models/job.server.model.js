import mongoose from 'mongoose';

var Schema = mongoose.Schema({
  createdAt:{
    type: Date,
    default: Date.now
  },
  jobTitle: String,
  skillSet: String,
  experience: String,
  job_location: String,
  appliedCount : Number
});

export default mongoose.model('JobPortal', Schema);
