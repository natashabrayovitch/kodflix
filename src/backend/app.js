const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;
const videos = require('./videos');

app.get('/rest/videos', (req, res) => res.send(videos()));

// Serve any static files
app.use(express.static(path.join(__dirname, '../../build')));
// Handle React routing, return all requests to React app
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))