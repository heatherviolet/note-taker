const path = require('path');
const router = require('express').Router();
const { nanoid } = require('nanoid');
const fs = require('fs');

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
});

router.post('/notes', (req, res) => {
    const data = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));   
    const newNote = req.body;
    // push new note
    data.push(newNote);
    // creates unique id
    newNote.id = nanoid(50);
    
    // writes new note to db.json
    fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(data), (err) => {
        if (err) throw err;
    });
        res.json(data);
    });

module.exports = router;