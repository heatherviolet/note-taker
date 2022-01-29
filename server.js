const express = require('express');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// routes to notes.html

app.get('/notes',  (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

// routes to index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

// reads db.json and returns all saves notes as JSON
app.get('/api/notes', (req, res) => {
    res.sendFile(req.params)
});

// receive a new note to save on the request body and add it do db.json, return new note
app.post('api/notes', (req, res) => {
    res.body.id = notes.length.toString();
});

// deletes a note

app.delete('api/notes/:id')

// starts the server
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });