const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  company:    { type: String, required: true },
  role:       { type: String, required: true },
  stage:      { type: String, enum: ['applied','screening','interview','offer','rejected'], default: 'applied' },
  type:       { type: String, enum: ['remote','onsite','hybrid'], default: 'remote' },
  location:   { type: String },
  salary:     { type: String },
  priority:   { type: String, enum: ['high','med','low'], default: 'med' },
  appliedDate:{ type: Date, default: Date.now },
  followUpDate:{ type: Date },
  process:    { type: String },
  notes:      { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Job', JobSchema);