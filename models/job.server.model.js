import mongoose from 'mongoose';

import User from './users.server.model';

var Schema = mongoose.Schema({
  createdAt:{
    type: Date,
    default: Date.now
  },
  jobTitle: String,
  skillSet: Array,
  experience: String,
  job_location: String,
  requiredNo: { type: Number, min: 0, max: 100 },
  appliedCount : Number,
  appliedUsers : Array,
  shortlistedUsers :Array,
  /*appliedUsers : [{type: Schema.Types.ObjectId, ref: 'User'}],
  shortlistedUsers : [{type: Schema.Types.ObjectId, ref: 'User'}],
  endDate : Date,
  juryPannel : [{type: Schema.Types.ObjectId, ref: 'Jury'}],*/
  comments : Array,
  isClosed : Boolean
});

export default mongoose.model('JobPortal', Schema);


/*var JurySchema = mongoose.Schema({
  createdAt:{
    type: Date,
    default: Date.now
  },
  pannelFor: String,
  user: [{type: Schema.Types.ObjectId, ref: 'User'}],
  address: Array,
  interviewDate: Array,
});

export default mongoose.model('Jury', JurySchema);

var InterviewSchema = mongoose.Schema({
  createdAt:{
    type: Date,
    default: Date.now
  },
  jobId: {type: Schema.Types.ObjectId, ref: 'JobPortal'},
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  interviewDate : Date,
  pannelId : {type: Schema.Types.ObjectId, ref: 'Jury'},
  isActive : Boolean,
  rounds : Array
});

export default mongoose.model('Interview', InterviewSchema);

var OnBoardSchema = mongoose.Schema({
  createdAt:{
    type: Date,
    default: Date.now
  },
  jobId: {type: Schema.Types.ObjectId, ref: 'JobPortal'},
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  pannelId : {type: Schema.Types.ObjectId, ref: 'Jury'},
  offerAccepted : Boolean,
  joiningDate: Date,
  bgcStatus: boolean
});

export default mongoose.model('OnBoard', OnBoardSchema);

var documentSchema = mongoose.Schema({
  createdAt:{
    type: Date,
    default: Date.now
  },
  docs: { data: Buffer, contentType: String },
  docType: String
});

export default mongoose.model('DocDet', documentSchema);
*/