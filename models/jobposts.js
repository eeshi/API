var Schema = require('mongoose').Schema;

module.exports = JobPosts = new Schema({
  sourceId: String, 
  jobVacant: String,
  description: String,
  pageTitle: String,
  companyName: String,
  companyUrl: String,
  url: { 
    type: String,
    unique: true
  }
}, { id: false });

if (!JobPosts.options.toObject) JobPosts.options.toObject = {};
JobPosts.options.toObject.transform = function (doc, ret, options) {
  // remove the _id of every document before returning the result
  delete ret._id;
}
