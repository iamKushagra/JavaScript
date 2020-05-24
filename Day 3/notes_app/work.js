var fs = require('fs');

var addNote = function(title, body)
{
    var notes = loadNotes();
    // notes.push({
    //     title: title,
    //     body: body
    // })
    // saveNotes(notes);
    // console.log('New note Added');
    var duplicateNotes = notes.filter(function (note){
        return note.title === title;
    })

    if(duplicateNotes.length === 0)
    {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log('New note added!');
    }
    else {
        console.log('Note title is already exist!!');
    }
}


var removeNote = function(title)
{
    var notes = loadNotes();
    var notesToKeep = notes.filter(function(note){
        return note.title !== title;
    })
    if(notes.length > notesToKeep.length){
        saveNotes(notesToKeep);
        console.log('Note removed successfully');
    }else{
        console.log('Note not found');
    }
}

var listNotes = function()
{
    var notes = loadNotes();
    console.log('List of Notes being Populated:');
    notes.forEach(function(note){
        console.log(note.title);
    })
}

var readNote = function(title)
{
    var notes = loadNotes();
    var note = notes.find(function(note){
        return note.title === title;
    })
    if(note){
        console.log('You are reading : ' + note.title );
        console.log(note.body);
    }else{
        console.log('Note not found!!!');
    }
}

//above used function is defined below here

var saveNotes = function(notes)
{
    var dataJSON = JSON.stringify(notes);
    fs.writeFileSync('json.json', dataJSON);

}

var loadNotes = function(){
    try{
        var buf = fs.readFileSync('json.json');
        var dataJSON = buf.toString();
        return JSON.parse(dataJSON);

    } catch(e) {
        return []
    }
}


module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote : readNote 
}


