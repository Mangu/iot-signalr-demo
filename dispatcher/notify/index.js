module.exports = function (context, eventHubMessage) {

    var msg = eventHubMessage;

    context.log(JSON.stringify(context.bindingData));  

    context.bindings.signalRMessages = [{
      "target": "newMessage",
      "arguments": [ msg ]
    }];
    context.done();
};