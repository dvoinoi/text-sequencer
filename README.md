# text sequencer

## about
This is a monophonic midi sequencer that uses text
and converts it to midi notes.
It does a good job making really long monophonic sequences easy to write,
and is used as a live music experimentation and composition tool.

## interface
the interface is ... your favourite text editor.

## use

You will first need to install node.js https://nodejs.org.
cd to the folder, and run this command:

```
// params: text-file bpm [grid] [debug]
node sequencer pieces/war-and-piece.txt 120 [32] [debug]
```
Open the text file `pieces/war-and-piece.txt` and edit some text, save, listen to
the sequencer play the updated sequnce once it gets to your changes.

You should now have a new virtual MIDI device called "Text Sequencer",
you can now route it to wherever you want.

## the notes?
The letters are mapped to notes directly as their ASCII value, reference: http://www.asciitable.com/


## limitations
This sequencer does not have velocity or note length,
but these are really easy to program/control yourself from your Hardware or DAW.
