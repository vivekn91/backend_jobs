import mongoose from 'mongoose';

var UserSchema = mongoose.Schema({
  createdAt:{
    type: Date,
    default: Date.now
  },
  email: String,
  usrPassword: String,
  role: String,
  isBlocked: Boolean,
});

export default mongoose.model('User', UserSchema);


