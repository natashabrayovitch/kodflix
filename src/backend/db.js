const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const db = {
    host: 'localhost',
    port: '27017',
    name: 'kodflix',
    user: 'kodflix',
    pwd: 'kodflix',
};
// const url = `mongodb://${db.user}:${db.pwd}@${db.host}:${db.port}/${db.name}`;
const url = 'mongodb://localhost:27017'

function connect() {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url,{ useNewUrlParser: true }, function (err, client) {
            assert.equal(null, err);
            console.log('Connected successfully to MongoDB');
            const dbo = client.db(db.name);
            resolve(dbo);
        });
    });
}

module.exports = { connect };