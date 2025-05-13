# conversation-client-int

### Deploying Serverless Function

1. Create a `.env` file at the path /serverless/conversations-token-generator and 
    - Add SERVICE_SID
        - Open [Conversations Services](https://www.twilio.com/console/conversations/services)
        - Copy the `SID` for `Default Conversations Service`, or the service you want to set up.
    - Add `TWILIO_API_KEY_SID` and `TWILIO_API_KEY_SECRET`. Create API Keys [in the console](https://www.twilio.com/console/project/api-keys).
2. Deploy the function to the Twilio account using [twilio serverless:deploy](https://www.twilio.com/docs/labs/serverless-toolkit/getting-started#explore-the-commands-and-options)
3. Navigate to the Functions and Assets section of Twilio Console and open the associated serverless instnace.
4. **Copy URL** from the "kebab" three dot menu next to it and and use it as `REACT_APP_ACCESS_TOKEN_SERVICE_URL` .env variable below.

### Set the Token Service URL

If you don't have your own `.env`, rename this repo's `.env.example` file to `.env`. Set the value of `REACT_APP_ACCESS_TOKEN_SERVICE_URL` to the value from **Copy URL** in step 4 above.  

```
REACT_APP_ACCESS_TOKEN_SERVICE_URL=http://example.com/token-service/
```

NOTE: No need for quotes around the URL, they will be added automatically.

This demo app expects your access token server to provide a valid token for valid credentials by URL:

 ```
$REACT_APP_ACCESS_TOKEN_SERVICE_URL?identity=<USER_PROVIDED_USERNAME>&password=<USER_PROVIDED_PASSWORD>
 ```
And return HTTP 401 in case of invalid credentials.

### Run Application Locally

- Run `yarn` to fetch project dependencies.
- Run `yarn build` to fetch Twilio SDK files and build the application.
- Run `yarn start` to run the application locally.
