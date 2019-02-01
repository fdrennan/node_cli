console.log('Starting app.js');

const fs = require('fs');
const _  = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

argz = yargs.argv;
command = argz._[0]
console.log(command);
console.log('Command: ', argz);

if (command === 'add') {
    console.log('Adding new note');
    notes.addNote(argz.title, argz.body);
} else if (command === 'list') {
    console.log('Listing all notes'); 
} else if (command === 'read') {
      console.log('Fetching note') 
} else if(command === 'delete') {
      console.log('Note deleted.')
} else {
    console.log('Comand not recognized.')
}