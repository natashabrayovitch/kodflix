const express = require('express')
const app = express()
const path = require('path');
const port = process.env.PORT || 3001;
const db = require('./db');
// const shows = require('./shows');

db.connect().then(dbo => {

    app.get('/rest/Intro', (req, res) => {
        dbo.collection('shows').find({}).toArray((err, results) => {
            if (err) throw err;
            res.send(results);
        });
    });

    //Serve any static files from the build folder
    app.use(express.static(path.join(__dirname, '../../build')));

    // app.get('/rest/shows', (req, res) => res.send(shows.data))

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../../build/', 'index.html'));
    });



    // Handle React routing, return all requests to React app
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
