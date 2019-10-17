


// mongoose.connect(url);
// console.log(mongoose.modelNames())
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

//displaying multiple values from the database



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

