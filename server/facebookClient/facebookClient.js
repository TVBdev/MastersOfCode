var https = require("https")

var getUserEvents = function(id, accessToken) {
  var uri = {
    hostName: 'graph.facebook.com',
    path: '/me/events',
    method: 'GET',
    access_token: accessToken,
    headers: {
    id: id
    }
  };

  var req = https.request(options, function(res) {
    console.log("statusCode: ", res.statusCode);
    console.log("headers: ", res.headers);

    res.on('data', function(d) {
      process.stdout.write(d);
    });
  });
  req.end();

  req.on('error', function(e) {
    console.error(e);
  });
}

exports.getUserEvents = getUserEvents;
