/*
   After you have deployed your Function, head to your phone number and configure the inbound SMS handler to this Function
*/
exports.handler = function(context, event, callback) {
    let twiml = new Twilio.twiml.MessagingResponse();
//    twiml.message("Hello Master");
    const body = event.Body ? event.Body.toLowerCase() : null;
    switch (body) {
        case 'jarvis':
            twiml.message("Good Day Master")
            break;
        case 'hello':
            twiml.message("Hello Master")
            break;
        case 'help':
            twiml.message("Master, You can type 1 or 2 for menu ");
            break;
        case '1':
            twiml.message("Master, Woman are never wrong");
            break;
        case '2':
            twiml.message("Master Stark, Twilio is a great and awesome company");
            break;
        default:
            twiml.message("Sorry Master, I don't understand. Please type 1 or 2 or help.");
            break;
    }

    callback(null, twiml);
};