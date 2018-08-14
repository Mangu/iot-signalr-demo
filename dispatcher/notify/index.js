module.exports = function (context, eventHubMessage) {

    var msg = eventHubMessage;
    context.bindings.signalRMessages = [{
      "target": "newMessage",
      "arguments": [ msg ]
    }];
    context.done();
};