require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;

const uri = process.env.mongoconnectionstring;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect(async (err) => {
  const useresCollection = client.db("mydatabase").collection("users");

  const users = await useresCollection.find().toArray();
  console.log(users);
  console.table(users);
  // perform actions on the collection object
  client.close();
});
