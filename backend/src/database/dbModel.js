// module
const mongoose = require("mongoose");

const { Schema } = mongoose;

const IssueSchema = new Schema({
  wisId: String,
  title: String,
  body: String,
  isPublic: Boolean,
  date: { type: Date, default: Date.now },
  creatorId: String,
  isClosed: { type: Boolean, default: false },
  commentsCount: { type: Number, default: 0 }
});

exports.Issue = model("Issue", IssueSchema);
