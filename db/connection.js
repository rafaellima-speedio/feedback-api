const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://mikael:Mi99454360@maincluster.i9itg.mongodb.net/?retryWrites=true&w=majority";
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