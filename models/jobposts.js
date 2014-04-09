var Schema = require('mongoose').Schema;

module.exports = JobPosts = new Schema({
  sourceId: String,
  jobVacant: String,
  description: String,
  pageTitle: String,
  companyName: String,
  companyUrl: String,
  url: String 
});