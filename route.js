'use strict';
module.exports = function(app) {
  var Home = require('./Controller/Home/HomeController');

  app.route('/')
    .get(Home.Index)
  app.route('/v1/about')
    .get(Home.About)
  app.route('/v1/contact')
    .get(Home.GetContact)
    .post(Home.SaveContact)
    .put(Home.UpdateContact)
    .delete(Home.DeleteContact)
};
