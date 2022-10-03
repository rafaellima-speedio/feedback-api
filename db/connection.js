const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.CONNECTION_STRING;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
var conn = null;

class Connection {
    static getConnection() {
        if (conn == null) {
            client.connect();
            conn = client.db("atlas-feedbacks");
        }
        return conn;
    }

    static getCollection(collection) {
        return Connection.getConnection().collection(collection);
    }
}

module.exports = Connection;