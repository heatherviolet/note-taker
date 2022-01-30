const path = require('path');
const router = require('express').Router();

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
});

router.post('/notes', (req, res) => {
  //  retrieve all the notes
  // add new note from req body to current notes
  // return.res status to a 200-201
})

module.exports = router;