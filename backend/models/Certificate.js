const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
  certificateID: { type: String, required: true, unique: true },
  studentName: { type: String, required: true },
  regNo: { type: String, required: true },
  college: { type: String, required: true },
  courseName: { type: String, required: true },
  marks: { type: String, required: true },
  issueDate: { type: Date, default: Date.now },
  verified: { type: Boolean, default: false },
});

const Certificate = mongoose.model('Certificate', certificateSchema);

module.exports = Certificate;
