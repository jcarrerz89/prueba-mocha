var request = require('request');

const host = 'http://localhost:3979/api/messages';

var botUnitTest = module.exports = {

    /**
     * Function to stablish connection with local bot
     */
    connection: function(){
        console.log(`********* connnecting to ${host}`);
        request.post(
            host,
            { json: { 
                    "type": "conversationUpdate",
                    "membersAdded": [
                      {
                        "id": "h2fc6mf85n3e",
                        "name": "Bot"
                      }
                    ],
                    "id": "kbi6bk0a04j8",
                    "channelId": "emulator",
                    "timestamp": "2018-04-27T19:46:29.405Z",
                    "localTimestamp": "2018-04-27T16:46:29-03:00",
                    "recipient": {
                      "id": "h2fc6mf85n3e",
                      "name": "Bot"
                    },
                    "conversation": {
                      "id": "9g5mja795dh6"
                    },
                    "from": {
                      "id": "default-user",
                      "name": "User"
                    },
                    "serviceUrl": "http://localhost:55113"
                  
                } 
            },
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    console.log(body);
                }
            }
        );
    },

    /**
     * Send messagge and get results
     */
    sendMessage: function(mensaje){
        console.log(`********* sending message: ${mensaje}`);

        var bodyResponse = null;

        request.post(
            host,
            { json: {
                    "type": "message",
                    "text": mensaje,
                    "from": {
                        "id": "default-user",
                        "name": "User"
                    },
                    "locale": "es",
                    "textFormat": "plain",
                    "timestamp": "2018-04-27T19:23:46.266Z",
                    "channelData": {
                        "clientActivityId": "1524857022701.9375919823426424.0"
                    },
                    "entities": [
                        {
                            "type": "ClientCapabilities",
                            "requiresBotState": true,
                            "supportsTts": true,
                            "supportsListening": true
                        }
                    ],
                    "id": "0meh0c0in16g",
                    "channelId": "emulator",
                    "localTimestamp": "2018-04-27T16:23:46-03:00",
                    "recipient": {
                        "id": "h2fc6mf85n3e",
                        "name": "Bot"
                    },
                    "conversation": {
                        "id": "eg83921cd83"
                    },
                    "serviceUrl": "http://localhost:55113"
                }
            },
            function (error, response, body) {
                console.log(JSON.stringify(response));
                if (!error && response.statusCode == 200) {
                    console.log(body);
                }
            }
        );
        return bodyResponse;

    }



}