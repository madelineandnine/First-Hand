const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const submitSchema = new Schema({
  topic: { type: String, required: true },
  language: { type: String, required: true },
  pullquote: {type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Submission = mongoose.model("Submission", submitSchema);

module.exports = Submission;
