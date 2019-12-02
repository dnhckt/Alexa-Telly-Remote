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
        this.tell("Oh tits");
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
     //   shell.exec('for i in {1..10}; do irsend SEND_ONCE LG KEY_VOLUMEUP; done;').code
          shell.exec('irsend SEND_ONCE LG KEY_VOLUMEUP').code
          shell.exec('irsend SEND_ONCE LG KEY_VOLUMEUP').code
          shell.exec('irsend SEND_ONCE LG KEY_VOLUMEUP').code
	 },

        VolumeDownIntent() {
          shell.exec('irsend SEND_ONCE LG KEY_VOLUMEDOWN').code
          shell.exec('irsend SEND_ONCE LG KEY_VOLUMEDOWN').code
          shell.exec('irsend SEND_ONCE LG KEY_VOLUMEDOWN').code
        },

        MuteIntent() {
            shell.exec('irsend SEND_ONCE LG KEY_MUTE').code
        },

    /**
     * Switching source commands
     */

        SourceOneIntent() {
            shell.exec('irsend SEND_ONCE LG input').code
            shell.exec('irsend SEND_ONCE LG KEY_LEFT').code
            shell.exec('irsend SEND_ONCE LG KEY_OK').code
        },

        SourceTwoIntent() {
            shell.exec('irsend SEND_ONCE LG input').code
            shell.exec('irsend SEND_ONCE LG KEY_LEFT').code
            shell.exec('irsend SEND_ONCE LG KEY_OK').code            
        }



});

module.exports.app = app;




