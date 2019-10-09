import express from 'express';
import bodyParser from 'body-parser';
import data from './public/data.json';

const app = express();
const fs = require('fs');
const path = "./public/data.json";


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/api/values/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  data.map((todo) => {
    if (todo.id === id) {
      return res.status(200).send({
        success: 'true',
        message: 'todo retrieved successfully',
        todo
      });
    }
    else {
      return res.status(404).send("<h1>Data Not Found</h1>")
    }
  });
});

app.post('/api/values', (req, res) => {
  if (!req.body.num1 && !req.body.num2 && !req.body.id) {
    return res.status(400).send({
      success: 'false',
      message: 'num1 is required'
    });
  }

  fs.readFile(path, 'utf8', function readFileCallback(err, data) {
    if (err) {
      console.log(err);
    } else {
      let obj = {
        id: req.body.id,
        num1: req.body.num1,
        num2: req.body.num2,
        sum: req.body.num1 + req.body.num2
      }
      var jsonParse = JSON.parse(data); //now it an object
      jsonParse.push(obj); //add some data
      var json = JSON.stringify(jsonParse); //convert it back to json
      fs.writeFile(path, json, 'utf8', () => {
        console.log("successfully stored");
      }); // write it back 
    }
  });

  return res.status(201).send({
    success: 'true',
    message: 'todo added successfully',
  })


});


app.put('/api/values', function (req, res) {
  if (!req.body.num1 && !req.body.num2 && !req.body.id) {
    return res.status(400).send({
      success: 'false',
      message: 'num1,num2,id are required'
    });
  }

  const id = parseInt(req.body.id,10);

  data.map((todo) => {
    if (todo.id === id) {
     let obj={
       id:req.body.id,
       num1:req.body.num1,
       num2:req.body.num2,
       sum:req.body.num1+req.body.num2
     }
      obj['sum'] = req.body.num1 + req.body.num1;
      fs.readFile(path, 'utf8', function readFileCallback(err, data) {
        if (err) {
          console.log(err);
        } else {
          var jsonParse = JSON.parse(data); //now it an object
          jsonParse = jsonParse.filter((user) => { return user.id !== id })
          jsonParse.push(obj);
          var json = JSON.stringify(jsonParse); //convert it back to json
          fs.writeFile(path, json, 'utf8', () => {
            console.log("successfully updated");
          }); // write it back 
        }
      });

      return res.status(200).send("<h1>data successfully updated</h1>");
    } else {
      return res.status(404).send("<h1>data not found</h1>");
    }
  });
});



app.delete('/api/values/:id', function (req, res) {
  const id = parseInt(req.params.id, 10);
  data.map((todo) => {
    if (todo.id == id) {

      fs.readFile(path, 'utf8', function readFileCallback(err, data) {
        if (err) {
          console.log(err);
        } else {

          var jsonParse = JSON.parse(data); //now it an object
          jsonParse = jsonParse.filter((user) => { return user.id !== id })
          var json = JSON.stringify(jsonParse); //convert it back to json
          fs.writeFile(path, json, 'utf8', () => {
            console.log("successfully stored");
          }); // write it back 
        }
      });

      return res.status(200).send("<h1>data successfully deleted</h1>");
    } else {
      return res.status(404).send("<h1>data not found</h1>");
    }
  });

});


const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
