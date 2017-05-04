# text sequencer

this is a monophonic midi sequencer that uses text
and converts it to midi notes. 

It loops over the text file which is reloaded on every save, making it a useful live instrument. 

### Making Sequences 
These are very easy to make, take for example this simple 4-to-the-floor:
```
// run with parameters
// node app.js text 120 
a   a   a   a
```

### Parameters

```
// params: text-file bpm [grid] [debug]
node app.js textfile.txt 120 [32] [true]
```
