require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://username:<username123>@cluster0.oz5qb.mongodb.net/mydatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db("mydatabase");
  // perform actions on the collection object
  client.close();
});
