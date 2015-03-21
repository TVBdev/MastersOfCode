


//var parseClient = require('./parseClient/parseClient');
var masterCardClient = require('./masterCardClient/masterCardClient');

//parseClient.saveUser("bambi3", "tahaFbKeyyyyyy").then(function(user){
//    console.log(user.id)
//  }
//)

//master

var senderAddress = {
  Line1: "123 Main Street",
  City: "Arlington",
  CountrySubdivision: "VA",
  PostalCode: "22207",
  Country: "USA"
};

var fundingCard = {
  AccountNumber: "5184680430000014",
  ExpiryMonth: "11",
  ExpiryYear: "2015"
};

var fundingAmount = {
  Value: "15001",
  Currency: "840"
};

var receiverAddress = {
  Line1: "Pueblo Street",
  City: "El PASO",
  CountrySubdivision: "TX",
  PostalCode: "79906",
  Country: "USA"
};

var receivingCard = {
  AccountNumber: "5184680430000006"
};

var receivingAmount = {
  Value: "182206",
  Currency: "484"
};

var cardAcceptor = {
  Name: "My Local Bank",
  City: "Saint Louis",
  State: "MO",
  PostalCode: "63101",
  Country: "USA"
};

var transactionRef = '';
for (var i = 0; i <19; i++) {
  transactionRef = transactionRef.concat(String(Math.floor(Math.random() * 9) + 1));
}

masterCardClient.sendMoneyTransfer(
  "0612",
  "161222",
  transactionRef,
  "John Doe",
  senderAddress,
  fundingCard,
  "123456",
  fundingAmount,
  "Jose Lopez",
  receiverAddress,
  receivingCard,
  receivingAmount,
  "W",
  "true",
  "009674",
  "9000000442",
  "990442082",
  cardAcceptor,
  "P2P",
  "123456"
);

/*parseClient.getUser("bambi").then(function(user){

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

})*/



//dasadsdsad
