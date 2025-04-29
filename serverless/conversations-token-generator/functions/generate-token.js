// If you do not want to pay for other people using your Twilio service for their benefit,
// generate a username and password pair different from what is presented below.

//The 1st value [user00] acts as your Username for the Demo app Login. The 2nd value within double qoutes will act as your Password for the login.
//This method is not advised to be used in production. This is ONLY for testing. In production, please utilize your own server side application to handle your users. 

let users = {
    username1: "password1",
    username2: "password2",
};

let response = new Twilio.Response();
let headers = {
    'Access-Control-Allow-Origin': '*',
  };

exports.handler = function(context, event, callback) {
    response.setHeaders(headers);
    if (!event.identity || !event.password) {
        response.setStatusCode(401);
        response.setBody("No credentials");
        callback(null, response);
        return;
    }

    if (users[event.identity] != event.password) {
        response.setStatusCode(401);
        response.setBody("Wrong credentials");
        callback(null, response);
        return;
    }
    
    let AccessToken = Twilio.jwt.AccessToken;
    let token = new AccessToken(
      context.ACCOUNT_SID,
      context.TWILIO_API_KEY_SID,
      context.TWILIO_API_KEY_SECRET, {
        identity: event.identity,
        ttl: 3600
      });

    let grant = new AccessToken.ChatGrant({ serviceSid: context.SERVICE_SID });
    
    /*
    if(context.PUSH_CREDENTIAL_SID) {
      // Optional: without it, no push notifications will be sent
      grant.pushCredentialSid = context.PUSH_CREDENTIAL_SID; 
    }
    */
    token.addGrant(grant);
    response.setStatusCode(200);
    response.setBody(token.toJwt());

    callback(null, response);
};