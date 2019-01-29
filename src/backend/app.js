const express = require('express')
const app = express()
const port = 3001
const videos = require('./videos');

app.get('/rest/videos', (req, res) => res.send(videos()))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))