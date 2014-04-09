var restify = require('restify');
var mongoose = require('mongoose');

var server = restify.createServer();
var PORT = process.env['PORT'] || 3000;
var DATABASE_URL = process.env['DATABASE_URL'];
var api;

mongoose.connect(DATABASE_URL);
api = require('./api');

server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.jsonp());

server.get('/joblinks', api.getJobLinks);
server.get('/jobposts', api.getJobPosts);
server.get('/jobposts/:job', api.getJobPost);
server.get('/jobposts/byurl/:url', api.getJobPostByUrl);

server.post('/joblinks', api.saveJobLinks);
server.post('/jobposts', api.saveJobPost);

server.del('/joblinks/:link', api.delJobLink);
server.del('/jobposts/:job', api.delJobPost);

server.listen(PORT, function() {
  console.log('Eeshi API ready to rock on %s ', server.url);
});

