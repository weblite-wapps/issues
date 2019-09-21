const { Issue } = require("./dbModel");

exports.createIssue = ({ wisId, title, body, isPublic, creatorId }) =>
  Issue.Create({
    wisId,
    title,
    body,
    isPublic,
    creatorId
  });

exports.incrementCommentsCountById = id =>
  Issue.updateOne({ _id: id }, { $inc: { commentsCount: 1 } });

exports.closeIssueById = id =>
  Issue.updateOne({ _id: id }, { $set: { isClosed: false } });

exports.getIssuesByWisId = wisId =>
  Issue.findOne({ wisId: id }, { $set: { isClosed: false } });
