


var parseClient = require('./parseClient/parseClient');

//parseClient.saveUser("bambi3", "tahaFbKeyyyyyy").then(function(user){
//    console.log(user.id)
//  }
//)



parseClient.getUser("bambi").then(function(user){

  parseClient.getEvents(user.id).then(function(results){

    for (var i = 0; i < results.length; i++) {
      var object = results[i];
      console.log(object.id + ' - ' + object.get('name'));
    }

  })

  //var fbEventId = "first event!";
  //var listOfFriendsInvited = ["bambi", "taha"];
  //var name = "masterCardHackaton";
  //var description = "dinner";
  //var listOfFriendsThatHavePaid = [];
  //
  //parseClient.saveEvent(fbEventId,listOfFriendsInvited,name,description,listOfFriendsThatHavePaid,user.id).then(function(event){
  //
  //  console.log(event.id);
  //})

})



//dasadsdsad
