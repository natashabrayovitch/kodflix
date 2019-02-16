const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;
const getVideos = require('./videos');

app.get('/rest/videos', (req, res) => res.send(getVideos()));
console.log('xx', path.join(__dirname, '../../build'));
app.use(express.static(path.join(__dirname, '../../build')));
app.get('*', function (req, res) {
    console.log('YYYY', req.originalUrl)
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

app.listen(port, () => console.log(`Kodflix app listening on port ${port}!`))