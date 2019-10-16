var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

// MongoClient({ useUnifiedTopology: true })
//create database
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
//create table
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.createCollection("customers", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  });
  