var Model = require('./model')();

module.exports = Api = {};

Api.getJobLinks = function(req, res, next) {

  var jobLinks = Model.jobLinks;
  jobLinks.find(function(err, data) {

    if(err) {
      console.log(err);
      res.send({ code: 404 });
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
      res.send({ code: 404 });
    }

    res.send(data);
    next();

  });  

};

Api.getJobPost = function(req, res, next) {

  var jobPosts = Model.jobPosts;
  var job = req.params['job'];

  jobPosts.findById(job, function(err, data) {
    
    if(err) {
      console.log(err);
      res.send({ code: 404 });
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
      res.send({ code: 404 });
    }

    res.send(data);
    next();

  });  

};

Api.saveJobLinks = function(req, res, next) {

  var jobLinks = Model.jobLinks;
  var links = req.body;
  console.log(links)
  jobLinks.create(links, function(err) {

    if(err){
      console.log(err);
      res.send({ code: 500 });
    }

    res.send({ code: 200 });
    next();

  });

};

Api.saveJobPost = function(req, res, next) {

  var jobPost = Model.jobPosts;
  var job = req.body;
  var post = new jobPost(job);
  var query;
  var options;
  var data;

  query = { url: job.url };
  data = post.toObject();
  options = { upsert: true };

  // delete data._id;
  console.log(data)
  jobPost.update(query, data, options, function(err) {

    if(err) {
      console.log(err);
      res.send({ code: 500 });
    }

    res.send({ code: 200 });
    next();

  });

};

Api.delJobLink = function(req, res, next) {

  var jobLink = Model.jobLinks;
  var job = req.body['link'];
  var query = { _id: job };

  jobLink.remove(query, function(err) {

    if(err) {
      console.log(err);
      res.send({ code: 404 });
    }

    res.send({ code: 200 });
    next();

  });

};
