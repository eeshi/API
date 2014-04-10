var JobLinks = require('../model').JobLinks;
var link = JobLink.prototype;

exports = module.exports = JobLink();

function JobLink() {
  if(!(this instanceof JobLink)) return new JobLink;
}

link.get = function(req, res, next) {

  JobLinks.find(function(err, data) {

    if(err) {
      console.log(err);
      res.send({ code: 404 });
    }

    res.send(data);
    next();

  });  

};

link.bulkSave = function(req, res, next) {

  var links = req.body;

  JobLinks.create(links, function(err) {

    if(err){
      console.log(err);
      res.send({ code: 500 });
    }

    res.send({ code: 200 });
    next();

  });

};

link.del = function(req, res, next) {

  var job = req.body['link'];
  var query = { _id: job };

  JobLink.remove(query, function(err) {

    if(err) {
      console.log(err);
      res.send({ code: 404 });
    }

    res.send({ code: 200 });
    next();

  });

};
