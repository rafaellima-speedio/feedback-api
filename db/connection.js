const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.CONNECTION_STRING;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

module.exports = {
    getConnection: () => {
        client.connect(err => {
        const conn = client.db("atlas-feedbacks");     
        if (err || !conn) {
            return callback(err);
        }

        return conn;
        })
    }
}