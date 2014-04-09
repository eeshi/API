var mongoose = require('mongoose');

module.exports = Model = function() {

  var Schema = mongoose.Schema;
  var jobLinks = require('./models/joblinks');
  var jobPosts = require('./models/jobposts');

  Model.jobLinks = mongoose.model('jobLinks', jobLinks, 'jobLinks');
  Model.jobPosts = mongoose.model('jobPosts', jobPosts, 'jobPosts');

  return Model;

};

