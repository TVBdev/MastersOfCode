/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');




module.exports = function(app) {

  // Insert routes below
  app.use('/api/things', require('./api/thing'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  app.route('/postFBInfo').post(function(req,res){

     res.cookie( "bearerBambiSmile", req.body.accessToken );

    res.sendfile(app.get('appPath') + '/index2.html');
  })

  app.route('/myEvents').get(function(req,res){

    var a = req.cookies.bearerBambiSmile;

    if(a === undefined){
      res.status(404).send();
return;
    }
      res.sendfile(app.get('appPath') + '/index2.html');

  })


  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
