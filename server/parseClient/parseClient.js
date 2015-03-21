var Parse = require('parse').Parse;
Parse.initialize("uRFo3EZW15ZznHafchLWav3vDcp5A7XHNz7JdbZ1", "829HRRpM4DayTgNKtqsT7KGKFucGTDi3iHlTxpXB");

var Users = Parse.Object.extend("Users");
var Events = Parse.Object.extend("Events");
var User = Parse.Object.extend("User");

var saveUser = function (name, fbKey) {
  var user = new Users();

  user.set("name", name);
  user.set("fbKey", fbKey);

  return user.save();
}

var getUser = function (name) {
  var query = new Parse.Query(Users);
  query.equalTo("name", name);
  return query.first();
}

var saveEvent = function (fbEventId, listOfFriendsInvited, name, description,listOfFriendsThatHavePaid, userId) {
  var events = new Events();

  events.set("fbEventId", fbEventId);
  events.set("listOfFriendsInvited", listOfFriendsInvited);
  events.set("listOfFriendsThatHavePaid", listOfFriendsThatHavePaid);
  events.set("name", name);
  events.set("description", description);
  events.set("userId", userId)

  return events.save();
}

var getEvents = function (userId){
  var query = new Parse.Query(Events);
  query.equalTo("userId", userId);
  return query.find();
}
var getUserEvents = function(objectId){
  var query = new Parse.Query(User);
  query.equalTo("objectId",objectId);
   query.find({
     success: function(results) {
       var fbApiCall = require("facebookClient/facebookClient")
       //fbApiCall.getUserEvents(results.)
     },
     error: function(error) {
       alert("Error: " + error.code + " " + error.message);
     }
   });
}


exports.saveUser = saveUser;
exports.getUser = getUser;
exports.getUserEvents = getUserEvents;

exports.saveEvent = saveEvent;
exports.getEvents = getEvents;

