var sendMoneyTransfer = function(localDate,
                        localTime,
                        transactionRef,
                        senderName,
                        senderAddress,
                        fundingCard,
                        fundingMasterCardAssignedId,
                        fundingAmount,
                        receiverName,
                        receiverAddress,
                        receivingCard,
                        receivingAmount,
                        channel,
                        ucafSupport,
                        ica,
                        processorId,
                        routingAndTransitNumber,
                        cardAcceptor,
                        transactionDesc,
                        merchantId
) {
  var js2xmlparser = require('js2xmlparser');

  // build the request body in json
  var jsonRequestBody = {
    "LocalDate": localDate,
    "LocalTime" : localTime,
    "TransactionReference": transactionRef,
    "SenderName": senderName,
    "SenderAddress": {
      "Line1": senderAddress.Line1,
      "City": senderAddress.city,
      "CountrySubdivision": senderAddress.CountrySubdivision,
      "PostalCode": senderAddress.PostalCode,
      "Country": senderAddress.Country
    },
    "FundingCard": {
      "AccountNumber": fundingCard.AccountNumber,
      "ExpiryMonth": fundingCard.ExpiryMonth,
      "ExpiryYear": fundingCard.ExpiryYear
    },
    "FundingMasterCardAssignedId": fundingMasterCardAssignedId,
    "FundingAmount": {
      "Value": fundingAmount.Value,
      "Currency": fundingAmount.Currency
    },
    "ReceiverName": receiverName,
    "ReceiverAddress": {
      "Line1": receiverAddress.Line1,
      "City": receiverAddress.city,
      "CountrySubdivision": receiverAddress.CountrySubdivision,
      "PostalCode": receiverAddress.PostalCode,
      "Country": receiverAddress.Country
    },
      "ReceivingCard": {
        "AccountNumber": receivingCard.AccountNumber
    },
    "ReceivingAmount": {
      "Value": receivingAmount.Value,
      "Currency": receivingAmount.Country
    },
    "Channel": channel,
    "UCAFSupport": ucafSupport,
    "ICA": ica,
    "ProcessorId": processorId,
    "RoutingAndTransitNumber": routingAndTransitNumber,
    "CardAcceptor": {
      "Name": cardAcceptor.Name,
      "City": cardAcceptor.City,
      "State": cardAcceptor.State,
      "PostalCode": cardAcceptor.PostalCode,
      "Country": cardAcceptor.Country
    },
    "TransactionDesc": transactionDesc,
    "MerchantId": merchantId
  };

  // Set the request body
  var xmlRequestBody = js2xmlparser("TransferRequest", jsonRequestBody);

  // Configure the request
  var options = {
    hostName: "http://dmartin.org",
    port: "8021",
    path: "/moneysend/v2/transfer",
    method: 'POST',
    headers: {
      'content-type':       'application/xml',
      'content-length':     '{length}'
    }
  };

  var http = require('http');

  var req = http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      console.log('BODY: ' + chunk);
    });
  });

  req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
  });

  // write data to request body
  req.write(xmlRequestBody);
  req.end();
};

exports.myFunc1 = sendMoneyTransfer;


