
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://hectormtz22:8125667392a@nute-qcwyh.gcp.mongodb.net/admin?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
