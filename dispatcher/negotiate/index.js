module.exports = function (context, req, connectionInfo) {
    context.res = { body: connectionInfo };

    //Added it to make html client work. This would look a bit different in prod
    context.res.headers = { 'Access-Control-Allow-Credentials' : 'true', 
                        'Access-Control-Allow-Origin' : '*', 
                        'Access-Control-Allow-Headers' : 'Origin',
                        'Content-Type': 'application/json' };                        
                        
    context.done();
  };