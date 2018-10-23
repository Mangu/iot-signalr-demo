module.exports = async function (context, eventGridEvent) {     
    var msg = eventGridEvent;
    var results = {deviceConnect:0} ;    

    if(msg.eventType = "Microsoft.Devices.DeviceConnected")
    {           
        results = {deviceConnect:1}       
    }
    else if (msg.eventType = "Microsoft.Devices.DeviceDisconnected")
    {
        results = {deviceConnect:-1} 
    }
    

    context.bindings.signalRMessages = [{
        "target": "newDevice",
        "arguments": [results]
    }];
    
    context.done();
};