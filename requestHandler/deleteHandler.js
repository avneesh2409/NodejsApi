var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

const deleteHandler= (req, res) => {
    

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        //console.log(data.data[0])
        //var myobj = [{ name: data.data[0].name, address: data.data[0].address,subject:data.data[0].subject,rollno:data.data[0].rollno }];
        dbo.collection('customers').remove({})
          db.close();
        });
    res.send('successfully deleted delete')
}

module.exports = deleteHandler
