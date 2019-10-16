//var MongoClient = require('mongodb').MongoClient;
//const {promisify} = require('util');
var mongoose = require('mongoose').model('customers')
var url = "mongodb://localhost:27017/mydb";

mongoose.Promise = global.Promise;
mongoose.connect(url);
console.log(mongoose)
// console.log(q.host); //returns 'localhost:8080'
// console.log(q.pathname); //returns '/default.htm'
// console.log(q.search); //returns '?year=2017&month=february'

// var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
// console.log(qdata.month);


// MongoClient({ useUnifiedTopology: true })
//create database
// if(request==="database")
// { console.log(request.query)
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });
// }
//create table
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
   
//     var dbo = db.db("mydb");
//     dbo.createCollection("customers", function(err, res) {
//       if (err) throw err;
//       console.log("Collection created!");
//       db.close();
//     });
//   });
  //insert data into table
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     var myobj = [
//         { name: 'John', address: 'Highway 71',subject:"Tautology",rollno:"0537cs161004" },
//         { name: 'Peter', address: 'Lowstreet 4',subject:"Tautology",rollno:"0537cs161004" },
//         { name: 'Amy', address: 'Apple st 652',subject:"Tautology",rollno:"0537cs161004" },
//         { name: 'Hannah', address: 'Mountain 21',subject:"Tautology",rollno:"0537cs161004" },
//         { name: 'Michael', address: 'Valley 345',subject:"Tautology",rollno:"0537cs161004" },
//         { name: 'Sandy', address: 'Ocean blvd 2',subject:"Tautology",rollno:"0537cs161004" },
//         { name: 'Betty', address: 'Green Grass 1',subject:"Tautology",rollno:"0537cs161004" },
//         { name: 'Richard', address: 'Sky st 331',subject:"Tautology",rollno:"0537cs161004" },
//         { name: 'Susan', address: 'One way 98',subject:"Tautology",rollno:"0537cs161004" },
//         { name: 'Vicky', address: 'Yellow Garden 2',subject:"Tautology",rollno:"0537cs161004" },
//         { name: 'Ben', address: 'Park Lane 38',subject:"Tautology",rollno:"0537cs161004" },
//         { name: 'William', address: 'Central st 954',subject:"Tautology",rollno:"0537cs161004" },
//         { name: 'Chuck', address: 'Main Road 989',subject:"Tautology",rollno:"0537cs161004" },
//         { name: 'Viola', address: 'Sideway 1633',subject:"Tautology",rollno:"0537cs161004" }
//       ];
//   //  var myobj = { name: "Think future", address: "Bunglows1",subject:"maths",rollno:"0537cs161015" };
//   dbo.collection("customers").insertMany(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("Number of documents inserted: " + res.insertedCount);
//     db.close();
//   });
//   });
//displaying multiple values from the database
 var data = []
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     dbo.collection("customers").find({}).toArray(function(err, result) {
//       if (err) throw err;
//       data.push(result)
//       console.log(result);
//       db.close();
//     });
//     module.exports = data
//   });

//querying the database using regular expression

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     var query = { address: /^S/ };


//     dbo.collection("customers").find(query).toArray(function(err, result) {
//       if (err) throw err;
//       for(let i=0;i<result.length;i++)
//         { data.push(result[i].name)
//         }
//         console.log(data)
      
//       db.close();
    
//     });
    
//   });
  console.log(data)
  module.exports=data