var Model = require('./model')();

module.exports = Api = {};

Api.getJobLinks = function(req, res, next) {

  var jobLinks = Model.jobLinks;
  jobLinks.find(function(err, data) {

    if(err) {
      console.log(err);
      res.send(404);
    }

    res.send(data);
    next();

  });  

};

Api.getJobPosts = function(req, res, next) {

  var jobPosts = Model.jobPosts;
  jobPosts.find(function(err, data) {

    if(err) {
      console.log(err);
      res.send(404);
    }

    res.send(data);
    next();

  });  

};

Api.getJobPost = function(req, res, next) {

  var jobPosts = Model.jobPosts;
  var job = req.params['job'];

  var query = { _id: job };

  jobPosts.findOne(query, function(err, data) {
    
    if(err) {
      console.log(err);
      res.send(404);
    }

    res.send(data);
    next();

  });

};

Api.getJobPostByUrl = function(req, res, next) {

  var jobPosts = Model.jobPosts;
  var url = req.params['url'];

  var query = { url: url };

  jobPosts.findOne(query, function(err, data) {

    if(err) {
      console.log(err);
      res.send(404);
    }

    res.send(data);
    next();

  });  

};

Api.saveJobLinks = function(req, res, next) {

  var jobLinks = Model.jobLinks;
  var links = req.body['links'];

  jobLinks.create(links, function(err) {

    if(err){
      console.log(err);
      res.send(500);
    }

    res.send(200);
    next();

  });

};

Api.saveJobPost = function(req, res, next) {

  var jobPost = new Model.jobPosts();
  var job = req.body;

  jobPost.sourceId = job.sourceId;
  jobPost.jobVacant = job.jobVacant;
  jobPost.desc = job.desc;
  jobPost.pageTitle = job.pageTitle;
  jobPost.companyName = job.companyName;
  jobPost.companyUrl = job.companyUrl;
  jobPost.url = job.url;

  jobPost.save(function(err) {

    if(err) {
      console.log(err);
      res.send(500);
    }

    res.send(200);
    next();

  });

};

Api.delJobLink = function(req, res, next) {

  var jobLink = Model.jobLinks;
  var job = req.body['link'];

  // jobLink.remove(url, function(err, data) {

  //   if(err) {
  //     console.log(err);
  //     res.send(404);
  //   }

  //   res.send(data);
  //   next();

  // });

};

Api.delJobPost = function(req, res, next) {

  var jobLink = Model.jobPost;
  var job = req.body['job'];

  // jobLink.remove(url, function(err, data) {

  //   if(err) {
  //     console.log(err);
  //     res.send(404);
  //   }

  //   res.send(data);
  //   next();

  // });

};