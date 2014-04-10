var JobPosts = require('../model').JobPosts;
var post = Post.prototype;

exports = module.exports = Post();

function Post() {
  if(!(this instanceof Post)) return new Post;
}

post.get = function(req, res, next) {

  JobPosts.find(function(err, data) {

    if(err) {
      console.log(err);
      res.send({ code: 404 });
    }

    res.send(data);
    next();

  });  

};

post.getById = function(req, res, next) {

  var job = req.params['job'];

  JobPosts.findById(job, function(err, data) {
    
    if(err) {
      console.log(err);
      res.send({ code: 404 });
    }

    res.send(data);
    next();

  });

};

post.getByUrl = function(req, res, next) {

  var url = req.params['url'];
  var query = { url: url };

  JobPosts.findOne(query, function(err, data) {

    if(err) {
      console.log(err);
      res.send({ code: 404 });
    }

    res.send(data);
    next();

  });  

};

post.save = function(req, res, next) {

  var job = req.body;
  var post = new JobPosts(job);
  var query;
  var options;
  var data;

  query = { url: job.url };
  data = post.toObject();
  options = { upsert: true };

  JobPosts.update(query, data, options, function(err) {

    if(err) {
      console.log(err);
      res.send({ code: 500 });
    }

    res.send({ code: 200 });
    next();

  });

};
