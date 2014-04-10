var mongoose = require('mongoose');

var model = Model.prototype;

exports = module.exports = Model();

function Model() {
  
  if(!(this instanceof Model)) return new Model;

  var jobLinks = require('./models/joblinks');
  var jobPosts = require('./models/jobposts');

  this.JobLinks = mongoose.model('jobLinks', jobLinks, 'jobLinks');
  this.JobPosts = mongoose.model('jobPosts', jobPosts, 'jobPosts');

};

