var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
    path: 'public/out.csv',
    header: [
      {id: 'name', title: 'Name'},
      {id: 'address', title: 'Address'},
      {id: 'subject', title: 'Subject'},
      {id: 'rollno', title: 'Rollno'},
    ]
  });
const postHandler= (data) => {
    
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
 
  dbo.collection("customers").insertMany(data, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
  });



MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("customers").find({}).toArray(function(err, result) {
      if (err) throw err;
    
      csvWriter
      .writeRecords(result)
      .then(()=> console.log('The CSV file was written successfully'));
    
      db.close();
    });
   
  });


}

module.exports = postHandler