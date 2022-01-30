const path = require('path');
const router = require('express').Router();
const { nanoid } = require('nanoid');
const fs = require('fs');

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
});

router.post('/notes', (req, res) => {
    const newNote = req.body;
    // push new note
    notes.push(newNote);
    // creates unique id
    newNote.id = nanoid(50);
    
    // writes new note to db.json
    fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(note), (err) => {
        if (err) throw err;
    });
        res.json(newNote);
    });


module.exports = router;