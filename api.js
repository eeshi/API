var Links = require('./controllers/joblinks');
var Posts = require('./controllers/jobposts');

var api = Router.prototype;

exports = module.exports = Router();

function Router() {
  if(!(this instanceof Router)) return new Router;
}

api.getJobLinks = Links.get;

api.getJobPosts = Posts.get;

api.getJobPost = Posts.getById;

api.getJobPostByUrl = Posts.getByUrl;

api.saveJobLinks = Links.bulkSave;

api.saveJobPost = Posts.save;

api.delJobLink = Links.del;