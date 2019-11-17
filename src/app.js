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

    /**
     * LAUNCH
     * The default method for Alexa
     * Triggered by the words 'TV Remote'
     */

     LAUNCH() {
        this.tell("Say alexa TV Remote... Then your command");
    },

    /**
     * ON And OFF commands
     * ON sends signal twice for greater accuracy
     */

        TVOnIntent() {  
            shell.exec('irsend SEND_ONCE LG KEY_POWER').code
            
            setTimeout(() => {
            shell.exec('irsend SEND_ONCE LG KEY_POWER').code  
            }, 1000);

        },

        TVOffIntent() {
            
            shell.exec('irsend SEND_ONCE LG KEY_POWER').code
        },

    /**
     * VOLUME UP, DOWN and MUTE commands
     */


        VolumeUpIntent() {
            shell.exec('for i in {1..5}; do irsend SEND_ONCE LG KEY_VOLUMEUP; done;').code
        },

        VolumeDownIntent() {
            shell.exec('for i in {1..5}; do irsend SEND_ONCE LG KEY_VOLUMEDOWN; done;').code
        },

        MuteIntent() {
            shell.exec('irsend SEND_ONCE LG KEY_MUTE').code
        },



});

module.exports.app = app;




