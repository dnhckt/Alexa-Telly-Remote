'use strict';

// ------------------------------------------------------------------
// APP INITIALIZATION
// ------------------------------------------------------------------

const { App } = require('jovo-framework');
const { Alexa } = require('jovo-platform-alexa');
const { GoogleAssistant } = require('jovo-platform-googleassistant');
const { JovoDebugger } = require('jovo-plugin-debugger');
const { FileDb } = require('jovo-db-filedb');
const shell = require('shelljs');


const app = new App();



app.use(
    new Alexa(),
    new GoogleAssistant(),
    new JovoDebugger(),
    new FileDb()
);


// ------------------------------------------------------------------
// APP LOGIC
// ------------------------------------------------------------------

app.setHandler({
    LAUNCH() {
     //   return this.toIntent('TVOnIntent');
	this.ask("To hear commands, say alexa tv remote list");
    },

    TVOnIntent() {

	shell.exec('irsend SEND_ONCE LG KEY_POWER').code

	setTimeout(() => {
	shell.exec('irsend SEND_ONCE LG KEY_POWER').code  
	}, 1000);
 },
    
});

module.exports.app = app;




