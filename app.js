'use strict';

var file = require('fs')
var midi = require('midi')
var output = new midi.output()
output.getPortCount()
output.getPortName(0)
output.openVirtualPort('Text Sequencer') // this will work only for linux & mac

// on app close
// output.closePort();

// check arguments are set
if (typeof process.argv[2] == 'undefined' || typeof process.argv[3] == 'undefined') {
    console.log('need text file & bpm parameters.')
    process.exit(1)
}

var text = null;
var bpm = 60000 / process.argv[3];

if (typeof process.argv[4] != 'undefined') {
    // extra grid params
    bpm = 60000 / process.argv[3] / process.argv[4];
}

var loadText = (fileName, callBack) => {
    try {
      text = file.readFileSync(fileName).toString();
      callBack();
    } catch(e) {
      console.log(e)
      process.exit(1)
    }
}

var playNote = (i) => {
    var nextNote = i;
    if(typeof text[nextNote] == 'undefined') {
       nextNote = 0;
    }

    var noteNumber = text[nextNote].charCodeAt(0);
    if (text[nextNote] == ' ') {
        noteNumber = 0; // silence!
    }

    process.stdout.write(text[nextNote] + '-' + noteNumber + ' ')

    // play
    output.sendMessage([144, noteNumber, 127]);
    nextNote++;

    setTimeout((nextNote) => {
         playNote(nextNote);
      }, bpm, nextNote)

    // off, note length can be defined externally
    // so we are not really interested, as long as it does go off
    setTimeout((noteNumber) => {
         output.sendMessage([128, noteNumber, 40]);
      }, bpm, noteNumber)

}

loadText(process.argv[2], () => {
    playNote(0);
});


