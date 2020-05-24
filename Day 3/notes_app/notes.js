var yargs = require('yargs');
var work = require('./work.js');

yargs.command({
    command: 'add',
    describe : 'Add a new note',
    builder: {
        title: {
            describe : 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe : 'Note Body',
            demandOption: true,
            type: 'string'
        }

    },
    handler : function(argv){
        // console.log('Title : ' + argv.title);
        // console.log('Body : ' + argv.body);
        work.addNote(argv.title, argv.body);
    }
    
})

// yargs.command({
//     command : 'add',
//     describe : 'Add a new note',
//     handler : function(){
//         console.log('Adding a new note!');
//     }, handler : function(){
//     console.log('Adding a new note!');
    // }
// })

yargs.command({
    command: 'remove',
    describe : 'Remove a note',
    builder: {
        title: {
            describe : 'Note title',
            demandOption : true,
            type: 'string'
        }
    },
    handler : function(argv){
        work.removeNote(argv.title);
    }
})



// yargs.command({
//     command: 'remove',
//     describe : 'Remove a note',
//     handler : function(){
//         console.log('Removing a note!');
//     }
// })

yargs.command({
    command: 'list',
    describe : 'List all note',
    handler : function(){
        // console.log('Listing all the notes!');
        work.listNotes();
    }
})

// yargs.command({
//     command: 'read',
//     describe : 'Read a note',
//     handler : function(){
//         console.log('Reading a note!');
//     }
// })

yargs.command({
    command: 'read',
    describe : 'Read a note',
    builder:{
        title: {
            describe : 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler : function(argv){
        work.readNote(argv.title);
    }
})



// console.log(yargs.argv);
yargs.parse();

