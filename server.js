const express = require('express');
const fs = require('fs');
const path = require('path');
const ruid = require('express-ruid');
const htmlRoutes = require('./Routes/htmlRoutes');
const apiRoutes = require('./Routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();


app.use(ruid());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));



// deletes a note
//app.delete('api/notes/:id') 
app.use('/api', apiRoutes);

app.use('/', htmlRoutes);

// starts the server
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });